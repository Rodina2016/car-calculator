import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';
import { OptionItem } from '../optionItem';

import { useOptionState } from '@/shared/hooks/useOptionState';

export const StepInterior = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;
  const { material, seat } = model.availableOptions.interior;

  const {
    name: nameMaterial,
    price: priceMaterial,
    handleChange: handleMaterialChange,
  } = useOptionState(material, 'interiorMaterialId', updateConfig);

  const {
    name: nameSeat,
    price: priceSeat,
    handleChange: handleSeatChange,
  } = useOptionState(seat, 'seatId', updateConfig);

  return (
    <>
      <div className="mb-3 lg:mb-10">
        <h2 className="text-[22px] lg:text-xl leading-[140%] mb-2 font-medium">Салон</h2>
        <div className="text-lg lg:text-base text-base/6 mb-2 font-medium">
          ₽ {priceMaterial.toLocaleString('ru-RU')}
        </div>
        <div className="mb-3 text-base/6">{nameMaterial}</div>
        <div className="flex items-center gap-3 lg:gap-6">
          {material.map((mat) => (
            <div key={mat.name}>
              <OptionItem
                onClick={() => handleMaterialChange(mat)}
                isActive={config.interiorMaterialId === mat.id}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={
                    mat.code.includes(',')
                      ? {
                          backgroundImage: `linear-gradient(to bottom, ${mat.code
                            .split(',')
                            .map((c) => c.trim())
                            .slice(0, 2)
                            .join(' 50%, ')} 50%)`,
                        }
                      : { backgroundColor: mat.code }
                  }
                />
              </OptionItem>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3 lg:mb-10">
        <h2 className="text-[22px] lg:text-xl leading-[140%] mb-2 font-medium">Материал сиденья</h2>
        <div className="text-lg lg:text-base text-base/6 mb-2 font-medium">
          ₽ {priceSeat.toLocaleString('ru-RU')}
        </div>
        <div className="mb-3 text-base/6">{nameSeat}</div>
        <div className="flex items-center gap-3 lg:gap-6">
          {seat.map((s) => (
            <div key={s.name}>
              <OptionItem onClick={() => handleSeatChange(s)} isActive={config.seatId === s.id}>
                <img src={s.image} alt={s.name} className="max-w-none h-full" />
              </OptionItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
