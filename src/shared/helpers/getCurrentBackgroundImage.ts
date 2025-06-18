import { Config } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';

export const getCurrentBackgroundImage = (config: Config, currentStep: number): string | null => {
  const model = carOptions.models.find((m) => m.id === config.modelId);
  if (!model) return null;

  const opts = model.availableOptions;

  switch (currentStep) {
    case 0:
      return model.mainImage;

    case 1: {
      const battery = opts.batteries.find((b) => b.id === config.batteryId);
      return battery?.mainImage ?? model.mainImage;
    }

    case 2: {
      const color = opts.colors.body.find((c) => c.id === config.colorBodyId);
      const molding = opts.colors.moldings.find((m) => m.id === config.colorMoldingsId);
      return molding?.mainImage || color?.mainImage || model.mainImage;
    }

    case 3: {
      const wheels = opts.wheels.find((w) => w.id === config.wheelsId);
      return wheels?.mainImage ?? model.mainImage;
    }

    case 4: {
      const material = opts.interior.material.find((m) => m.id === config.interiorMaterialId);
      const seat = opts.interior.seat.find((s) => s.id === config.seatId);
      return seat?.mainImage || material?.mainImage || model.mainImage;
    }

    case 5: {
      const extra = opts.extras.find((e) => config.extrasIds.includes(e.id));
      return extra?.mainImage ?? model.mainImage;
    }

    case 6: {
      const software = opts.software.find((s) => s.id === config.softwareId);
      return software?.mainImage ?? model.mainImage;
    }

    default:
      return model.mainImage;
  }
};
