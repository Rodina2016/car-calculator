import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';

export const StepInterior = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;
  const { material, seat } = model.availableOptions.interior;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Выбор интерьера</h2>

      <h3 className="text-lg mb-2">Материал</h3>
      <div className="flex gap-4 mb-4">
        {material.map((mat) => (
          <div
            key={mat.id}
            onClick={() => updateConfig('interiorMaterialId', mat.id)}
            className={`w-12 h-12 rounded-full cursor-pointer border-4 ${config.interiorMaterialId === mat.id ? 'border-blue-500' : 'border-transparent'}`}
            style={{ backgroundColor: mat.code }}
            title={mat.name}
          />
        ))}
      </div>

      <h3 className="text-lg mb-2">Сиденья</h3>
      <div className="grid grid-cols-2 gap-4">
        {seat.map((s) => (
          <div
            key={s.id}
            onClick={() => updateConfig('seatId', s.id)}
            className={`border rounded p-4 cursor-pointer ${config.seatId === s.id ? 'border-blue-500' : ''}`}
          >
            <img src={s.image} alt={s.name} className="w-full h-20 object-contain" />
            <div className="mt-2">{s.name}</div>
            <div className="text-sm text-gray-500">{s.price.toLocaleString()} ₽</div>
          </div>
        ))}
      </div>
    </div>
  );
};
