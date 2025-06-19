import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';
import { OptionItem } from '../optionItem';
import { useOptionState } from '@/shared/hooks/useOptionState';
import { renderPrice } from '@/shared/helpers/renderPrice';

export const StepSoftware = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  const { name, price, handleChange } = useOptionState(
    model.availableOptions.software,
    'softwareId',
    updateConfig,
  );

  return (
    <div>
      <h2 className="text-[22px] lg:text-xl leading-[140%] mb-2 font-medium">
        Программное обеспечение*
      </h2>
      <div className="text-lg lg:text-base text-base/6 mb-2 font-medium">{renderPrice(price)}</div>
      <div className="mb-3 text-sm text-base/6">{name}</div>
      <div className="flex items-center gap-3 lg:gap-6">
        {model.availableOptions.software.map((soft) => (
          <div key={soft.name}>
            <OptionItem onClick={() => handleChange(soft)} isActive={config.softwareId === soft.id}>
              <img src={soft.image} alt={soft.name} className="max-w-none h-full" />
            </OptionItem>
          </div>
        ))}
      </div>{' '}
    </div>
  );
};
