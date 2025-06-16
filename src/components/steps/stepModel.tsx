import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';
import { getDefaultConfigForModel } from '@/shared/helpers/getDefaultConfigForModel';
import { CarModel } from '@/types/types';
import { useEffect, useState } from 'react';

const modelStyles = '';
const activeModelStyles = 'rounded-full border border-gray-light bg-gray-medium';

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
      <h2 className="text-4xl text-center font-bold mb-4 uppercase">Модель</h2>
      <div className="mt-9.6 mb-4 text-xl font-semibold">{name}</div>
      <div className="text-base mb-3 font-medium">₽ {price}</div>
      <div className="flex items-center gap-6">
        {carOptions.models.map((model) => (
          <div key={model.id} className={` `} onClick={() => handleModelChange(model)}>
            <div
              className={`w-15 h-15 flex items-center justify-center ${config.modelId === model.id ? activeModelStyles : modelStyles}`}
            >
              <div
                className={`w-12 h-12 rounded-full border overflow-hidden flex items-center justify-center ${config.modelId === model.id ? 'border-white' : 'border-gray-medium'}`}
              >
                <img src={model.image} alt={model.name} className="max-w-none h-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
