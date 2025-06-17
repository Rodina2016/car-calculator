import { useConfigurator } from '@/context/configuratorContext';
import carOptions from '@/data/carOptions.json';
import { ColorOption } from '@/types/types';
import { useState } from 'react';
import { OptionItem } from '../optionItem';

export const StepColor = () => {
  const { config, updateConfig } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);

  if (!model) return null;
  const { colors } = model.availableOptions;
  const [nameMolding, setNameMolding] = useState(colors.moldings[0].name || '');
  const [priceMolding, setPriceMolding] = useState(colors.moldings[0].price || 0);

  const [nameBody, setNameBody] = useState(colors.body[0].name || '');
  const [priceBody, setPriceBody] = useState(colors.body[0].price || 0);

  const handleMoldingChange = (molding: ColorOption) => {
    updateConfig('colorMoldingsId', molding.id);
    setNameMolding(molding.name);
    setPriceMolding(molding.price);
  };

  const handleBodyChange = (body: ColorOption) => {
    updateConfig('colorBodyId', body.id);
    setNameBody(body.name);
    setPriceBody(body.price);
  };

  return (
    <>
      <div className="mb-10">
        <h2 className="text-2xl text-2xl/8 mb-2 font-medium">Цвет кузова</h2>
        <div className="text-base text-base/6 mb-2 font-medium">
          ₽ {priceBody.toLocaleString('ru-RU')}
        </div>
        <div className="mb-3 text-base/6">{nameBody}</div>
        <div className="flex items-center gap-6">
          {colors.body.map((body) => (
            <div key={body.name}>
              <OptionItem
                onClick={() => handleBodyChange(body)}
                isActive={config.colorBodyId === body.id}
              >
                <div
                  className="w-full h-full"
                  style={
                    body.code.includes(',')
                      ? { backgroundImage: `linear-gradient(to bottom, ${body.code})` }
                      : { backgroundColor: body.code }
                  }
                ></div>
              </OptionItem>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl text-2xl/8 mb-2 font-medium">Цвет молдингов</h2>
        <div className="text-base text-base/6 mb-2 font-medium">
          ₽ {priceMolding.toLocaleString('ru-RU')}
        </div>
        <div className="mb-3 text-base/6">{nameMolding}</div>
        <div className="flex items-center gap-6">
          {colors.moldings.map((molding) => (
            <div key={molding.name}>
              <OptionItem
                onClick={() => handleMoldingChange(molding)}
                isActive={config.colorMoldingsId === molding.id}
              >
                <div
                  className="w-full h-full"
                  style={
                    molding.code.includes(',')
                      ? { backgroundImage: `linear-gradient(to bottom, ${molding.code})` }
                      : { backgroundColor: molding.code }
                  }
                ></div>
              </OptionItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
