import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';
import { getDefaultConfigForModel } from '@/shared/helpers/getDefaultConfigForModel';
import { CarModel } from '@/types/types';
import { useEffect, useState } from 'react';
import { OptionItem } from '../optionItem';

export const StepModel = () => {
  const { setFullConfig, config } = useConfigurator();
  const [name, setName] = useState(carOptions.models[0].name);
  const [price, setPrice] = useState(carOptions.models[0].price);

  const handleModelChange = (model: CarModel) => {
    const defaultConfig = getDefaultConfigForModel(model);
    setName(model.name);
    setPrice(model.price);
    setFullConfig(defaultConfig);
  };

  useEffect(() => {
    if (!config.modelId && carOptions.models.length > 0) {
      handleModelChange(carOptions.models[0]);
    }
  }, [config.modelId]);

  return (
    <>
      <h1 className="text-4xl text-center font-medium mb-4 uppercase">Все модель</h1>
      <div className="mt-9.6 mb-4 text-xl font-semibold">{name}</div>
      <div className="text-base mb-3 font-medium">₽ {price.toLocaleString('ru-RU')}</div>
      <div className="flex items-center gap-6">
        {carOptions.models.map((model) => (
          <OptionItem
            key={model.id}
            onClick={() => handleModelChange(model)}
            isActive={config.modelId === model.id}
          >
            <img src={model.image} alt={model.name} className="max-w-none h-12" />
          </OptionItem>
        ))}
      </div>
    </>
  );
};
