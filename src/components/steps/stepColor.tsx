import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';

export const StepColor = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;
  const { colors } = model.availableOptions;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Выбор цвета</h2>

      <h3 className="text-lg mb-2">Кузов</h3>
      <div className="flex gap-4 mb-4">
        {colors.body.map((color) => (
          <div
            key={color.id}
            onClick={() => updateConfig('colorBodyId', color.id)}
            className={`w-12 h-12 rounded-full cursor-pointer border-4 ${config.colorBodyId === color.id ? 'border-blue-500' : 'border-transparent'}`}
            style={{ backgroundColor: color.code }}
            title={color.name}
          />
        ))}
      </div>

      <h3 className="text-lg mb-2">Молдинги</h3>
      <div className="flex gap-4">
        {colors.moldings.map((molding) => (
          <div
            key={molding.id}
            onClick={() => updateConfig('colorMoldingsId', molding.id)}
            className={`w-12 h-12 rounded-full cursor-pointer border-4 ${config.colorMoldingsId === molding.id ? 'border-blue-500' : 'border-transparent'}`}
            style={{ backgroundColor: molding.code }}
            title={molding.name}
          />
        ))}
      </div>
    </div>
  );
};
