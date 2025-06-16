import { CarModel } from '@/types';

export const getDefaultConfigForModel = (model: CarModel) => {
  return {
    modelId: model.id,
    batteryId: model.availableOptions.batteries[0]?.id,
    colorBodyId: model.availableOptions.colors.body[0]?.id,
    colorMoldingsId: model.availableOptions.colors.moldings[0]?.id,
    wheelsId: model.availableOptions.wheels[0]?.id,
    interiorMaterialId: model.availableOptions.interior.material[0]?.id,
    seatId: model.availableOptions.interior.seat[0]?.id,
    extrasIds: [],
    softwareId: model.availableOptions.software[0]?.id,
  };
};
