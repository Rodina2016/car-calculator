import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export interface Config {
  modelId?: string;
  batteryId?: string;
  colorBodyId?: string;
  colorMoldingsId?: string;
  wheelsId?: string;
  interiorMaterialId?: string;
  intelligentDrivingSolutionId?: string;
  seatId?: string;
  extrasIds: string[];
  softwareId?: string;
}

interface ConfiguratorContextType {
  config: Config;
  updateConfig: (key: keyof Config, value: any) => void;
  setFullConfig: (newConfig: Partial<Config>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  wasRestoredFromStorage: boolean;
}

const CONFIG_KEY = 'configurator_config';
const STEP_KEY = 'configurator_step';

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export const ConfiguratorProvider = ({ children }: { children: ReactNode }) => {
  const [wasRestoredFromStorage] = useState(() => {
    try {
      const stored = localStorage.getItem(CONFIG_KEY);
      return !!stored;
    } catch {
      return false;
    }
  });

  const [config, setConfig] = useState<Config>(() => {
    try {
      const stored = localStorage.getItem(CONFIG_KEY);
      return stored ? JSON.parse(stored) : { extrasIds: [] };
    } catch {
      return { extrasIds: [] };
    }
  });

  const [currentStep, setCurrentStep] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STEP_KEY);
      return stored ? parseInt(stored, 10) : 0;
    } catch {
      return 0;
    }
  });

  // сохраняем при изменении
  useEffect(() => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem(STEP_KEY, String(currentStep));
  }, [currentStep]);

  const updateConfig = (key: keyof Config, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const setFullConfig = (newConfig: Partial<Config>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <ConfiguratorContext.Provider
      value={{
        config,
        updateConfig,
        setFullConfig,
        currentStep,
        setCurrentStep,
        wasRestoredFromStorage,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) throw new Error('useConfigurator must be used inside ConfiguratorProvider');
  return ctx;
};
