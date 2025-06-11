import { useState } from 'react';

type StepName = 'battery' | 'color' | 'wheels' | 'interior' | 'options' | 'software';

type ModelData = Record<StepName, string[]>;

type Models = Record<string, ModelData>;

const models: Models = {
  modelA: {
    battery: ['60 кВт·ч', '75 кВт·ч'],
    color: ['Черный', 'Белый'],
    wheels: ['17"', '18"'],
    interior: ['Черный', 'Бежевый'],
    options: ['Камера', 'Подогрев'],
    software: ['Базовая', 'Про'],
  },
  modelB: {
    battery: ['55 кВт·ч', '70 кВт·ч'],
    color: ['Красный', 'Серебристый'],
    wheels: ['16"', '18"'],
    interior: ['Серый'],
    options: ['Навигация'],
    software: ['Базовая'],
  },
};

export default function App() {
  const [modelKey, setModelKey] = useState<string>('');
  const [formData, setFormData] = useState<Partial<Record<StepName, string>>>({});

  const handleChange = (step: StepName, value: string) => {
    setFormData((prev) => ({ ...prev, [step]: value }));
  };

  const handleSubmit = () => {
    const fullSummary = [
      `Модель: ${modelKey}`,
      ...Object.entries(formData).map(
        ([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
      ),
    ].join(', ');

    console.log('Отправка данных в родительский документ:', fullSummary);

    window.parent.postMessage({ type: 'OPEN_POPUP_FORM', payload: fullSummary }, '*');

    alert('Отправлено в родительский документ');
  };

  const steps: StepName[] = ['battery', 'color', 'wheels', 'interior', 'options', 'software'];

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2>Калькулятор выбора авто</h2>

      <label>Модель:</label>
      <select
        value={modelKey}
        onChange={(e) => {
          setModelKey(e.target.value);
          setFormData({});
        }}
      >
        <option value="">Выберите модель</option>
        {Object.keys(models).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {modelKey &&
        steps.map((step) => (
          <div key={step} style={{ marginTop: '10px' }}>
            <label>{step}</label>
            <select
              value={formData[step] || ''}
              onChange={(e) => handleChange(step, e.target.value)}
            >
              <option value="">-- выбрать --</option>
              {models[modelKey][step].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}

      {modelKey && (
        <button
          style={{ marginTop: '20px', padding: '10px 20px' }}
          onClick={handleSubmit}
        >
          Отправить
        </button>
      )}
    </div>
  );
}
