import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';
import { getDefaultConfigForModel } from '@/shared/helpers/getDefaultConfigForModel';
import { CarModel } from '@/types';
import { useEffect } from 'react';

export const StepModel = () => {
  const { setFullConfig, config } = useConfigurator();

  const handleModelChange = (model: CarModel) => {
    const defaultConfig = getDefaultConfigForModel(model);
    setFullConfig(defaultConfig);
  };

  useEffect(() => {
    if (!config.modelId && carOptions.models.length > 0) {
      handleModelChange(carOptions.models[0]);
    }
  }, [config.modelId]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Выберите модель</h2>
      <div className="grid grid-cols-2 gap-4">
        {carOptions.models.map((model) => (
          <div
            key={model.id}
            className={`border rounded p-4 cursor-pointer ${config.modelId === model.id ? 'border-blue-500' : ''}`}
            onClick={() => handleModelChange(model)}
          >
            <img src={model.image} alt={model.name} className="w-full h-32 object-contain" />
            <div className="mt-2 font-semibold">{model.name}</div>
            <div className="text-sm text-gray-500">{model.price.toLocaleString()} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
