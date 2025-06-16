import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/styles/global.css';
import { ConfiguratorProvider } from './context/configuratorContext';
import { CarConfigurator } from './pages/carConfigurator';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfiguratorProvider>
      <CarConfigurator />
    </ConfiguratorProvider>
  </React.StrictMode>,
);
