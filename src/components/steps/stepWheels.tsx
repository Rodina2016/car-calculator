import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';
import { WheelOption } from '@/types/types';
import { useState } from 'react';
import { OptionItem } from '../optionItem';

export const StepWheels = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  const [name, setName] = useState(model?.availableOptions.wheels[0].name || '');
  const [price, setPrice] = useState(model?.availableOptions.wheels[0].price || 0);

  const handleWheelChange = (wheel: WheelOption) => {
    updateConfig('wheelsId', wheel.id);
    setName(wheel.name);
    setPrice(wheel.price);
  };
  if (!model) return null;

  return (
    <>
      <h2 className="text-[22px] lg:text-xl leading-[140%] mb-2 font-medium">Диски</h2>
      <div className="text-lg lg:text-base text-base/6 mb-2 font-medium">
        ₽ {price.toLocaleString('ru-RU')}
      </div>
      <div className="mb-3 text-sm text-base/6">{name}</div>
      <div className="flex items-center gap-3 lg:gap-6">
        {model.availableOptions.wheels.map((wheel) => (
          <div key={wheel.name}>
            <OptionItem
              onClick={() => handleWheelChange(wheel)}
              isActive={config.wheelsId === wheel.id}
            >
              <img src={wheel.image} alt={wheel.name} className="max-w-none h-full" />
            </OptionItem>
          </div>
        ))}
      </div>
    </>
  );
};
