import { StepBattery } from '@/components/steps/stepBattery';
import { StepColor } from '@/components/steps/stepColor';
import { StepExtras } from '@/components/steps/stepExtras';
import { StepInterior } from '@/components/steps/stepInterior';
import { StepModel } from '@/components/steps/stepModel';
import { StepSoftware } from '@/components/steps/stepSoftware';
import { StepWheels } from '@/components/steps/stepWheels';
import { TotalPrice } from '@/components/totalPrice';
import { useConfigurator } from '@/context/configuratorContext';

const steps = [
  StepModel,
  StepBattery,
  StepColor,
  StepWheels,
  StepInterior,
  StepExtras,
  StepSoftware,
];

export const CarConfigurator = () => {
  const { currentStep, setCurrentStep, config } = useConfigurator();
  const StepComponent = steps[currentStep];

  return (
    <div className="flex">
      {/* Sidebar можно здесь же или отдельно */}
      <div className="w-64 bg-gray-100 p-4 border-r">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`block w-full text-left py-2 px-3 rounded mb-2 ${index === currentStep ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setCurrentStep(index)}
          >
            Шаг {index + 1}
          </button>
        ))}
      </div>

      <main className="flex-1 p-6">
        <StepComponent />

        <div className="mt-6 flex justify-between items-center">
          <div className="text-lg font-semibold text-green-600">
            <TotalPrice />
          </div>
          <button
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(currentStep - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Назад
          </button>

          {currentStep < steps.length - 1 && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Далее
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
