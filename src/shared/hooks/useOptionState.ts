import { Config } from '@/context/configuratorContext';
import { useState } from 'react';

interface Option {
  id: string;
  name: string;
  price: number;
}

export const useOptionState = <T extends Option>(
  options: T[],
  configKey: keyof Config,
  updateConfig: (key: keyof Config, value: any) => void,
) => {
  const initial = options[0] || { id: '', name: '', price: 0 };
  const [name, setName] = useState(initial.name);
  const [price, setPrice] = useState(initial.price);

  const handleChange = (option: T) => {
    updateConfig(configKey, option.id);
    setName(option.name);
    setPrice(option.price);
  };

  return { name, price, handleChange };
};
