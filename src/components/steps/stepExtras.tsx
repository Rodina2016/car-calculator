import { useState, useEffect } from 'react';
import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';
import { ExtraOption } from '@/types/types';
import { Dialog } from '@headlessui/react';
import CheckIcon from '@/assets/svg/check.svg?react';
import CrossIcon from '@/assets/svg/cross.svg?react';
import { renderPrice } from '@/shared/helpers/renderPrice';

export const StepExtras = () => {
  const { config, updateConfig, wasRestoredFromStorage } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  const [modalExtra, setModalExtra] = useState<ExtraOption | null>(null);

  useEffect(() => {
    if (!wasRestoredFromStorage && !config.extrasIds.length && model) {
      const included = model.availableOptions.extras.find((e) => e.price === 0);
      if (included) {
        updateConfig('extrasIds', [included.id]);
      }
    }
  }, [wasRestoredFromStorage, model, config.extrasIds.length, updateConfig]);

  if (!model) return null;

  const toggleExtra = (id: string) => {
    const set = new Set(config.extrasIds);
    if (set.has(id)) {
      set.delete(id);
    } else {
      set.add(id);
    }
    updateConfig('extrasIds', Array.from(set));
  };

  const isSelected = (id: string) => config.extrasIds.includes(id);

  return (
    <div>
      <h2 className="text-[22px] lg:text-xl font-medium mb-4">Дополнительные опции</h2>
      <div className="flex flex-col gap-3 lg:gap-8">
        {model.availableOptions.extras.map((extra) => {
          const included = extra.price === 0;
          const selected = isSelected(extra.id);

          return (
            <div
              key={extra.id}
              onClick={() => setModalExtra(extra)}
              className={`rounded-[20px] overflow-hidden relative cursor-pointer`}
            >
              <div className="max-h-[205px]">
                <img src={extra.image} alt={extra.name} className="w-full h-full object-contain" />
              </div>

              <div className="bg-gray-super-light p-4 flex justify-between items-center">
                <div>
                  <div className="text-lg lg:font-base font-medium">{extra.name}</div>
                  <div className="text-sm mt-2">{renderPrice(extra.price)}</div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!included) {
                      toggleExtra(extra.id);
                    }
                  }}
                  className="w-[18px] h-[18px] flex items-center justify-center"
                >
                  {selected ? (
                    <CheckIcon className="w-4 h-4 text-accent-200" />
                  ) : (
                    <div className="w-[18px] h-[18px] rounded-full border border-accent-200" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={!!modalExtra} onClose={() => setModalExtra(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {modalExtra && (
            <Dialog.Panel className="bg-white rounded-xl max-w-[484px] w-full pt-2.5 pb-5 px-5 lg:pt-7.5 lg:px-10 lg:pb-10 relative">
              <button
                onClick={() => setModalExtra(null)}
                className="absolute top-4 right-4 cursor-pointer"
              >
                <CrossIcon width={'14px'} height={'14px'} />
              </button>

              <h3 className="text-lg lg:text-xl font-medium mb-2">{modalExtra.name}</h3>
              <div className="text-sm mb-5">{renderPrice(modalExtra.price)}</div>
              <div className="max-h-[370px] lg:max-h-[330px] overflow-y-auto scrollbar-none">
                <div className="w-full max-h-[205px] rounded-xl overflow-hidden mb-5">
                  <img src={modalExtra.image} alt={modalExtra.name} className="w-full" />
                </div>
                <div className="mb-5">{modalExtra.description}</div>
              </div>

              {isSelected(modalExtra.id) ? (
                <button
                  disabled
                  className="w-full bg-gray-medium text-gray-dark py-3.5 lg:py-5.5 rounded-[10px] cursor-not-allowed"
                >
                  Включено
                </button>
              ) : (
                <button
                  className="w-full bg-accent-200 text-sm text-white py-3.5 lg:py-5.5 rounded-[10px] hover:bg-accent-800 disabled:opacity-50 transition-colors duration-300 cursor-pointer"
                  onClick={() => {
                    toggleExtra(modalExtra.id);
                    setModalExtra(null);
                  }}
                >
                  Добавить
                </button>
              )}
            </Dialog.Panel>
          )}
        </div>
      </Dialog>
    </div>
  );
};
