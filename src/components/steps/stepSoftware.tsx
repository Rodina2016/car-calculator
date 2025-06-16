import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';

export const StepSoftware = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Программное обеспечение</h2>
      <div className="grid grid-cols-2 gap-4">
        {model.availableOptions.software.map((soft) => (
          <div
            key={soft.id}
            onClick={() => updateConfig('softwareId', soft.id)}
            className={`border rounded p-4 cursor-pointer ${config.softwareId === soft.id ? 'border-blue-500' : ''}`}
          >
            <img src={soft.image} alt={soft.name} className="w-full h-20 object-contain" />
            <div className="mt-2 font-semibold">{soft.name}</div>
            <div className="text-sm text-gray-500">{soft.description}</div>
            <div className="text-sm text-gray-500">{soft.price.toLocaleString()} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
