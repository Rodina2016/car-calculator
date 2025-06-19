import { useConfigurator } from '@/context/configuratorContext';
import { OptionItem } from '../optionItem';
import { useState } from 'react';
import { BatteryOption } from '@/types/types';
import { carOptions } from '@/data/carOptions';

export const StepBattery = () => {
  const { config, updateConfig } = useConfigurator();

  const model = carOptions.models.find((m) => m.id === config.modelId);
  const [name, setName] = useState(model?.availableOptions.batteries[0].name || '');
  const [price, setPrice] = useState(model?.availableOptions.batteries[0].price || 0);

  const handleBatteryChange = (battery: BatteryOption) => {
    updateConfig('batteryId', battery.id);
    setName(battery.name);
    setPrice(battery.price);
  };
  if (!model) return null;

  return (
    <div>
      <h1 className="text-[34px] leading-[130%] lg:text-4xl lg:text-center font-medium mb-3 lg:mb-4 uppercase">
        {model.name}
      </h1>
      <p className="bg-gray-super-light rounded text-base rounded-[20px] p-4 mb-5">
        {model.specs.description}
      </p>
      <ul className="mb-10 text-base flex gap-6 flex justify-center">
        <li className="flex flex-col items-center">
          <span className="text-xl font-medium">{model.specs.range}</span>
          <span>запас&nbsp;хода</span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-xl font-medium">{model.specs.acceleration}</span>
          <span>0-100&nbsp;км/ч</span>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-xl font-medium">{model.specs.power}</span>
          <span>мощность</span>
        </li>
      </ul>

      <div className="mb-3 lg:mb-10">
        <h2 className="text-[22px] lg:text-xl leading-[140%] mb-2 font-medium">
          Емкость аккумулятора
        </h2>
        <div className="text-lg lg:text-base text-base/6 mb-2 font-medium">
          ₽ {price.toLocaleString('ru-RU')}
        </div>
        <div className="mb-3 text-sm text-base/6">{name}</div>

        <div className="flex items-center gap-3 lg:gap-6">
          {model.availableOptions.batteries.map((battery) => {
            return (
              <div key={battery.name}>
                <OptionItem
                  onClick={() => handleBatteryChange(battery)}
                  isActive={config.batteryId === battery.id}
                >
                  <img src={battery.image} alt={battery.name} className="max-w-none h-full" />
                </OptionItem>
              </div>
            );
          })}
        </div>
      </div>

      {model.availableOptions.intelligentDrivingSolution && (
        <div className="mb-3 lg:mb-10">
          <h2 className="text-[22px] lg:text-xl leading-[140%] mb-2 font-medium">
            Интеллектуальное решение для вождения*
          </h2>
          <div className="text-lg lg:text-base text-base/6 mb-2 font-medium">
            {model.availableOptions?.intelligentDrivingSolution[0].price > 0
              ? `₽ ${price.toLocaleString('ru-RU')}`
              : '*Включено в стоимость'}
          </div>
          <div className="mb-3 text-sm text-base/6">
            {model.availableOptions.intelligentDrivingSolution[0].description}
          </div>

          <div className="flex items-center gap-3 lg:gap-6">
            {model.availableOptions.intelligentDrivingSolution.map((option) => {
              return (
                <div key={option.description}>
                  <OptionItem isActive>
                    <img
                      src={option.image}
                      alt={option.description}
                      className="max-w-none h-full"
                    />
                  </OptionItem>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
