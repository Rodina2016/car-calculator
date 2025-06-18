import { StepBattery } from '@/components/steps/stepBattery';
import { StepColor } from '@/components/steps/stepColor';
import { StepExtras } from '@/components/steps/stepExtras';
import { StepInterior } from '@/components/steps/stepInterior';
import { StepModel } from '@/components/steps/stepModel';
import { StepSoftware } from '@/components/steps/stepSoftware';
import { StepWheels } from '@/components/steps/stepWheels';
import { TotalPrice } from '@/components/totalPrice';
import { useConfigurator } from '@/context/configuratorContext';
import CarIcon from '@/assets/svg/car.svg?react';
import BatteryIcon from '@/assets/svg/battery.svg?react';
import PaleteIcon from '@/assets/svg/pallete.svg?react';
import DiskIcon from '@/assets/svg/disk.svg?react';
import RudderIcon from '@/assets/svg/rudder.svg?react';
import OptionsIcon from '@/assets/svg/options.svg?react';
import CarbonIcon from '@/assets/svg/carbon.svg?react';
import ArrowIcon from '@/assets/svg/arrow.svg?react';
import Logo from '@/assets/svg/logo.svg?react';
import { useState } from 'react';
import { getCurrentBackgroundImage } from '@/shared/helpers/getCurrentBackgroundImage';
import { carOptions } from '@/data/carOptions';

const steps = [
  StepModel,
  StepBattery,
  StepColor,
  StepWheels,
  StepInterior,
  StepExtras,
  StepSoftware,
];

const stepsIcons = [
  <CarIcon />,
  <BatteryIcon />,
  <PaleteIcon />,
  <DiskIcon />,
  <RudderIcon />,
  <OptionsIcon />,
  <CarbonIcon />,
];

export const CarConfigurator = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { currentStep, setCurrentStep, config } = useConfigurator();
  const StepComponent = steps[currentStep];
  const model = carOptions.models.find((m) => m.id === config.modelId);
  const bgImage = getCurrentBackgroundImage(config, currentStep);

  return (
    <div className="flex overflow-hidden h-full w-full">
      <main className="flex-grow ">
        <div className="flex">
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer flex justify-center items-center text-accent-200 w-15 h-15 ml-7.5"
          >
            <ArrowIcon className="rotate-180 " />
          </button>
          <div className="flex items-center justify-center w-full">
            <Logo />
          </div>
        </div>
        {model && (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}
      </main>
      <aside
        className={`relative flex transition-all duration-500 ${isSidebarOpen ? 'mr-0' : '-mr-[476px]'}`}
      >
        {/* Sidebar можно здесь же или отдельно */}
        <div className="w-15 bg-gray-super-light">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-15 h-15 bg-accent-100/80 flex items-center justify-center cursor-pointer text-accent-200"
            type="button"
          >
            <ArrowIcon />
          </button>
          <div className="flex flex-col h-full justify-center">
            {steps.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`flex w-full text-gray-light px-4.5 py-3.5 cursor-pointer ${index === currentStep && 'bg-accent-200 text-white'}`}
                onClick={() => setCurrentStep(index)}
              >
                {stepsIcons[index]}
              </button>
            ))}
          </div>
        </div>

        <div className="w-[476px] pt-7.5 pb-2 px-9 overflow-y-auto flex flex-col">
          <div className="h-full overflow-y-auto scrollbar-none">
            <StepComponent />
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-base font-semibold">
              <TotalPrice />
            </div>

            {currentStep < steps.length - 1 && (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-3 py-3 bg-accent-200 text-white rounded-[10px] hover:bg-accent-800 disabled:opacity-50 transition-colors duration-300 cursor-pointer"
              >
                Далее
              </button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};
