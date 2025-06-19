import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';
import { OptionItem } from '../optionItem';

const titleStyle = 'text-[22px] lg:text-xl leading-[140%] font-medium mb-2 lg:mb-3';
const optionNameStyle = 'text-sm mb-3 lg:mb-0';

export const StepFinal = () => {
  const { config } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);

  if (!model) return null;

  const {
    batteryId,
    colorBodyId,
    colorMoldingsId,
    wheelsId,
    interiorMaterialId,
    seatId,
    extrasIds,
    softwareId,
  } = config;

  const opts = model.availableOptions;

  const getOption = <T extends { id: string }>(list: T[], id?: string) =>
    list.find((item) => item.id === id);

  const selectedBattery = getOption(opts.batteries, batteryId);
  const selectedBodyColor = getOption(opts.colors.body, colorBodyId);
  const selectedMolding = getOption(opts.colors.moldings, colorMoldingsId);
  const selectedWheels = getOption(opts.wheels, wheelsId);
  const selectedMaterial = getOption(opts.interior.material, interiorMaterialId);
  const selectedSeat = getOption(opts.interior.seat, seatId);
  const selectedExtras = opts.extras.filter((e) => extrasIds.includes(e.id));
  const selectedSoftware = getOption(opts.software, softwareId);

  const renderVisual = (option?: { code?: string; image?: string }) => {
    if (!option) return null;

    if (option.code) {
      const colors = option.code.split(',').map((c) => c.trim());
      return (
        <div
          className="w-full h-full"
          style={{
            background:
              colors.length > 1 ? `linear-gradient(to bottom, ${colors.join(', ')})` : colors[0],
          }}
        />
      );
    }

    if (option.image) {
      return <img src={option.image} alt="" className="w-full h-full" />;
    }

    return null;
  };

  return (
    <>
      <h1 className=" text-[38px] text-center leading-[140%] font-medium">{`${model.name.toUpperCase()}`}</h1>

      <div className="grid lg:grid-cols-2 gap-3 lg:gap-6 mt-4.5">
        {selectedBattery && (
          <div className="flex flex-col">
            <div className={titleStyle}>Ёмкость аккумулятора</div>

            <OptionItem className="order-3 lg:order-2">{renderVisual(selectedBattery)}</OptionItem>

            <div className={`${optionNameStyle} order-2 lg:order-3`}>{selectedBattery.name}</div>
          </div>
        )}

        {selectedBodyColor && (
          <div>
            <div className={titleStyle}>Цвет кузова</div>
            <OptionItem>{renderVisual(selectedBodyColor)}</OptionItem>
            <div className={optionNameStyle}>{selectedBodyColor.name}</div>
          </div>
        )}

        {selectedMolding && (
          <div>
            <div className={titleStyle}>Цвет молдингов</div>
            <OptionItem>{renderVisual(selectedMolding)}</OptionItem>
            <div className={optionNameStyle}>{selectedMolding.name}</div>
          </div>
        )}

        {selectedWheels && (
          <div>
            <div className={titleStyle}>Диски</div>
            <OptionItem>{renderVisual(selectedWheels)}</OptionItem>
            <div className={optionNameStyle}>{selectedWheels.name}</div>
          </div>
        )}

        {selectedMaterial && (
          <div>
            <div className={titleStyle}>Салон</div>
            <OptionItem>{renderVisual(selectedMaterial)}</OptionItem>
            <div className={optionNameStyle}>{selectedMaterial.name}</div>
          </div>
        )}

        {selectedSeat && (
          <div>
            <div className={titleStyle}>Сидения</div>
            <OptionItem>{renderVisual(selectedSeat)}</OptionItem>
            <div className={optionNameStyle}>{selectedSeat.name}</div>
          </div>
        )}

        {selectedExtras.length > 0 && (
          <div className="lg:col-span-2">
            <div className={titleStyle}>Дополнительные опции</div>
            <div className="grid lg:grid-cols-2 gap-4">
              {selectedExtras.map((extra) => (
                <div key={extra.id}>
                  <OptionItem>{renderVisual(extra)}</OptionItem>
                  <div className={optionNameStyle}>{extra.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSoftware && (
          <div>
            <div className={titleStyle}>Программное обеспечение</div>
            <OptionItem>{renderVisual(selectedSoftware)}</OptionItem>
            <div className={optionNameStyle}>{selectedSoftware.name}</div>
          </div>
        )}
      </div>
    </>
  );
};
