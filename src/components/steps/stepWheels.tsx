import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';

export const StepWheels = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Выбор дисков</h2>
      <div className="grid grid-cols-2 gap-4">
        {model.availableOptions.wheels.map((wheel) => (
          <div
            key={wheel.id}
            onClick={() => updateConfig('wheelsId', wheel.id)}
            className={`border rounded p-4 cursor-pointer ${config.wheelsId === wheel.id ? 'border-blue-500' : ''}`}
          >
            <img src={wheel.image} alt={wheel.name} className="w-full h-20 object-contain" />
            <div className="mt-2">{wheel.name}</div>
            <div className="text-sm text-gray-500">{wheel.price.toLocaleString()} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
