'use client';

import { useConfigurator } from '@/context/configuratorContext';
import { carOptions } from '@/data/carOptions';

type Props = {
  isLastStep: boolean;
  onNext: () => void;
};

const getName = <T extends { id: string; name: string }>(arr: T[], id?: string) =>
  arr.find((item) => item.id === id)?.name || '-';

const getMultipleNames = <T extends { id: string; name: string }>(arr: T[], ids: string[]) =>
  ids
    .map((id) => arr.find((item) => item.id === id)?.name)
    .filter(Boolean)
    .join(', ') || '-';

export const NextStepButton = ({ isLastStep, onNext }: Props) => {
  const { config } = useConfigurator();
  const model = carOptions.models.find((m) => m.id === config.modelId);

  const handleSubmit = () => {
    if (!model) return;

    const { availableOptions } = model;

    const battery = getName(availableOptions.batteries, config.batteryId);
    const bodyColor = getName(availableOptions.colors.body, config.colorBodyId);
    const molding = getName(availableOptions.colors.moldings, config.colorMoldingsId);
    const wheels = getName(availableOptions.wheels, config.wheelsId);
    const interiorMaterial = getName(availableOptions.interior.material, config.interiorMaterialId);
    const interiorSeat = getName(availableOptions.interior.seat, config.seatId);
    const extras = getMultipleNames(availableOptions.extras, config.extrasIds);
    const software = getName(availableOptions.software, config.softwareId);

    const fullSummary = [
      `Модель: ${model.name}`,
      `Батарея: ${battery || '-'}`,
      `Цвет кузова: ${bodyColor || '-'}`,
      `Молдинги: ${molding || '-'}`,
      `Диски: ${wheels || '-'}`,
      `Салон: ${interiorMaterial || '-'} / ${interiorSeat || '-'}`,
      `Доп. Опции: ${extras || '-'}`,
      `Программное обеспечение: ${software || '-'}`,
    ].join('\n');

    console.log('Отправка данных:', fullSummary);
    window.parent.postMessage({ type: 'OPEN_POPUP_FORM', payload: fullSummary }, '*');
  };

  return (
    <button
      onClick={isLastStep ? handleSubmit : onNext}
      className="text-sm px-3 py-3 bg-accent-200 text-white rounded-[10px] hover:bg-accent-800 disabled:opacity-50 transition-colors duration-300 cursor-pointer"
    >
      Далее
    </button>
  );
};
