import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';

export const TotalPrice = () => {
  const { config } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  const getPrice = (items: any[], id?: string) => items.find((i) => i.id === id)?.price || 0;

  const total =
    model.price +
    getPrice(model.availableOptions.batteries, config.batteryId) +
    getPrice(model.availableOptions.colors.body, config.colorBodyId) +
    getPrice(model.availableOptions.colors.moldings, config.colorMoldingsId) +
    getPrice(model.availableOptions.wheels, config.wheelsId) +
    getPrice(model.availableOptions.interior.material, config.interiorMaterialId) +
    getPrice(model.availableOptions.interior.seat, config.seatId) +
    config.extrasIds.reduce((sum, id) => sum + getPrice(model.availableOptions.extras, id), 0) +
    getPrice(model.availableOptions.software, config.softwareId);

  return <span>{total.toLocaleString('ru-RU')} рублей</span>;
};
