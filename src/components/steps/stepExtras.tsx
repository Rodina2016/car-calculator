import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';

export const StepExtras = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  const toggleExtra = (id: string) => {
    const set = new Set(config.extrasIds);
    set.has(id) ? set.delete(id) : set.add(id);
    updateConfig('extrasIds', Array.from(set));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Дополнительные опции</h2>
      <div className="grid grid-cols-2 gap-4">
        {model.availableOptions.extras.map((extra) => (
          <div
            key={extra.id}
            onClick={() => toggleExtra(extra.id)}
            className={`border rounded p-4 cursor-pointer ${config.extrasIds.includes(extra.id) ? 'border-blue-500' : ''}`}
          >
            <img src={extra.image} alt={extra.name} className="w-full h-20 object-contain" />
            <div className="mt-2">{extra.name}</div>
            <div className="text-sm text-gray-500">{extra.price.toLocaleString()} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
