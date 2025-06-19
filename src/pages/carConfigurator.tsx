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
import LogoMob from '@/assets/svg/logo-mob.svg?react';

import { useState } from 'react';
import { getCurrentBackgroundImage } from '@/shared/helpers/getCurrentBackgroundImage';
import { carOptions } from '@/data/carOptions';
import { StepFinal } from '@/components/steps/stepFinal';

const steps = [
  StepModel,
  StepBattery,
  StepColor,
  StepWheels,
  StepInterior,
  StepExtras,
  StepSoftware,
  StepFinal,
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
    <div className="flex flex-col lg:flex-row overflow-hidden h-full w-full">
      <main className="lg:flex-grow">
        <div className="flex">
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer flex justify-center items-center text-accent-200 w-11 lg:w-15 h-15 ml-4.25 lg:ml-7.5"
          >
            <ArrowIcon className="rotate-180 " />
          </button>
          <div className="flex items-center justify-end mr-6 lg:mr-0 lg:justify-center w-full">
            <LogoMob className="block lg:hidden" />

            <Logo className="hidden lg:block" />
          </div>
        </div>
        {model && (
          <div
            className="lg:w-full lg:h-full md:h-120 h-75 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}
      </main>
      <aside
        className={`overflow-hidden flex flex-col flex-grow lg:grow-0 lg:flex-row lg:h-full relative transition-all duration-500 ${isSidebarOpen ? 'mr-0' : '-mr-[476px]'}`}
      >
        <div className="lg:w-15 bg-gray-super-light">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden w-15 h-15 bg-accent-100/80 lg:flex items-center justify-center cursor-pointer text-accent-200"
            type="button"
          >
            <ArrowIcon />
          </button>
          <div className="flex px-[17px] lg:p-0 lg:flex-col lg:h-full lg:justify-center gap-2 lg:gap-0 justify-center">
            {steps.map((_, index) => {
              if (!stepsIcons[index]) return null;
              return (
                <button
                  type="button"
                  key={index}
                  className={`flex justify-center items-center w-11 h-11 lg:h-[66px] lg:w-full text-gray-light cursor-pointer ${index === currentStep && 'bg-accent-200 text-white'}`}
                  onClick={() => setCurrentStep(index)}
                >
                  {stepsIcons[index]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-grow w-full lg:w-[476px] pt-5 px-5 lg:pt-7.5 lg:pb-2 lg:px-9 overflow-y-auto flex flex-col">
          <div className="h-full overflow-y-auto scrollbar-none pb-10 lg:pb-0">
            <StepComponent />
          </div>

          <div className="shadow-[0_-15px_30px_-10px_rgba(0,11,48,0.2)] lg:shadow-none p-4 lg:p-0 -mx-5 lg:mx-0 lg:mt-6 flex justify-between items-center">
            <div className="text-lg lg:text-base font-semibold">
              <TotalPrice />
            </div>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="text-sm px-3 py-3 bg-accent-200 text-white rounded-[10px] hover:bg-accent-800 disabled:opacity-50 transition-colors duration-300 cursor-pointer"
              >
                Далее
              </button>
            ) : (
              <button
                //тут будет вызов формы обратной связи
                onClick={() => {}}
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
