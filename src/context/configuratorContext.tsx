import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Config {
  modelId?: string;
  batteryId?: string;
  colorBodyId?: string;
  colorMoldingsId?: string;
  wheelsId?: string;
  interiorMaterialId?: string;
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
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export const ConfiguratorProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Config>({ extrasIds: [] });
  const [currentStep, setCurrentStep] = useState(0);

  const updateConfig = (key: keyof Config, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const setFullConfig = (newConfig: Partial<Config>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };
  return (
    <ConfiguratorContext.Provider
      value={{ config, updateConfig, setFullConfig, currentStep, setCurrentStep }}
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
