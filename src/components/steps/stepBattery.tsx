import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';

export const StepBattery = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Выбор батареи</h2>
      <p className="text-sm mb-2">{model.specs.description}</p>
      <ul className="mb-4 text-sm text-gray-700 space-y-1">
        <li>Запас хода: {model.specs.range}</li>
        <li>Разгон: {model.specs.acceleration}</li>
        <li>Мощность: {model.specs.power}</li>
      </ul>

      <div className="grid grid-cols-2 gap-4">
        {model.availableOptions.batteries.map((battery) => (
          <div
            key={battery.id}
            className={`border rounded p-4 cursor-pointer ${config.batteryId === battery.id ? 'border-blue-500' : ''}`}
            onClick={() => updateConfig('batteryId', battery.id)}
          >
            <img src={battery.image} alt={battery.name} className="w-full h-20 object-contain" />
            <div className="mt-2">{battery.name}</div>
            <div className="text-sm text-gray-500">{battery.price.toLocaleString()} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
