import { CarModel } from '@/types/types';

export const carOptions: { models: CarModel[] } = {
  models: [
    {
      id: 'zeekr-007-gt',
      name: 'Zeekr 007 GT',
      price: 17000000,
      image: '/images/models/b13e0aff0f94779524fe4491627451b86b71e11e.png',
      mainImage: '/images/models/big.png',
      specs: {
        range: '620 км',
        acceleration: '3.8 с',
        power: '480 кВт',
        description: 'Полностью электрический спортивный седан с продвинутыми технологиями',
      },
      availableOptions: {
        batteries: [
          {
            id: 'battery-std',
            name: 'Стандартная батарея',
            image: '/images/batteries/acum1.png',
            price: 60000,
            mainImage: '/images/batteries/acum1.png',
          },
          {
            id: 'battery-max',
            name: 'Увеличенная батарея',
            image: '/images/batteries/acum2.png',
            mainImage: '/images/batteries/acum2.png',
            price: 250000,
          },
        ],
        intelligentDrivingSolution: [
          {
            id: 'ids-basic',
            description: 'H7 содержит LiDAR | NVIDIA dual Orin-X вычислительная мощность 508 TOPS',
            image: '/images/intelligentSystem/1.png',
            price: 0,
            mainImage: '/images/batteries/acum1.png',
          },
        ],
        colors: {
          body: [
            {
              id: 'zeekr-007-gt-body1',
              name: 'ледниковое серебро',
              code: '#EAEAEA, #777C83',
              price: 8000,
            },
            {
              id: 'zeekr-007-gt-body2',
              name: 'Зеленый',
              code: '#ADB29D, #494D3D',
              price: 15000,
            },
          ],
          moldings: [
            {
              id: 'zeekr-007-gt-molding1',
              name: 'ледниковое серебро',
              code: '#BEBEBE',
              price: 0,
            },
            {
              id: 'zeekr-007-gt-molding2',
              name: 'Чёрный',
              code: '#070707',
              price: 10000,
            },
          ],
          combinations: [
            {
              bodyId: 'zeekr-007-gt-body1',
              moldingId: 'zeekr-007-gt-molding1',
              mainImage: '/images/colors/zeekr-007-gt11.jpg',
            },
            {
              bodyId: 'zeekr-007-gt-body1',
              moldingId: 'zeekr-007-gt-molding2',
              mainImage: '/images/colors/zeekr-007-gt12.jpg',
            },
            {
              bodyId: 'zeekr-007-gt-body2',
              moldingId: 'zeekr-007-gt-molding1',
              mainImage: '/images/colors/zeekr-007-gt21.jpg',
            },
            {
              bodyId: 'zeekr-007-gt-body2',
              moldingId: 'zeekr-007-gt-molding2',
              mainImage: '/images/colors/zeekr-007-gt22.jpg',
            },
          ],
        },
        wheels: [
          {
            id: 'sport-19',
            name: 'Спорт 19"',
            image: '/images/wheels/1.png',
            price: 50000,
            mainImage: '/images/wheels/main/1.jpg',
          },
          {
            id: 'aero-21',
            name: 'Аэро 21"',
            image: '/images/wheels/2.png',
            price: 90000,
            mainImage: '/images/wheels/main/2.jpg',
          },
        ],
        interior: {
          material: [
            {
              id: 'eco-leather',
              name: 'Чёрно-белый-коричневый',
              code: '#914245, #1F1D1D',
              price: 0,
              mainImage: '/images/interior/1.jpg',
            },
            {
              id: 'nappa',
              name: 'Наппа',
              code: '#ECE3DD, #1F1D1D',
              price: 100000,
              mainImage: '/images/batteries/acum1.png',
            },
          ],
          seat: [
            {
              id: 'comfort',
              name: 'Комфорт',
              image: '/images/seats/comfort.png',
              price: 0,
              mainImage: '/images/batteries/acum1.png',
            },
            {
              id: 'sport',
              name: 'Спорт',
              image: '/images/seats/sport.png',
              price: 50000,
              mainImage: '/images/batteries/acum1.png',
            },
          ],
        },
        extras: [
          {
            id: 'extras1',
            name: 'Высокопроизводительная система пневматической подвески',
            description: (
              <>
                <p>
                  В зависимости от различных сценариев вождения поддерживается 5-ступенчатая
                  регулировка, что позволяет автомобилю добиться максимальной эффективности.
                </p>
                <p>
                  *Вес автомобиля с различными комбинациями опциональной конфигурации отличается,
                  что может привести к различиям в диапазоне CLTC. Пожалуйста, обратитесь к
                  менеджеру для получения подробной информации.
                </p>
              </>
            ),
            image: '/images/extras/extras1.jpg',
            price: 0,
            mainImage: '/images/extras/main/extras1.jpg',
          },
          {
            id: 'extras2',
            name: 'Интеллектуальный индукционный автоматический дверной комплект',
            description: (
              <>
                <p>
                  Полностью индукционная безрамная автоматическая дверь транспортного средства.
                  Четыре двери открываются/закрываются автоматически, что делает поездку более
                  комфортной, а радар миллиметрового диапазона и возможности обхода препятствий
                  делают поездку более безопасной.
                </p>

                <p>
                  Сенсорная интеллектуальная интерактивная система центральной стойки. Она обладает
                  такими функциями, как управление транспортным средством, распознавание личности
                  (поддерживает ношение масок и головных уборов), отображение информации (зарядка и
                  т. д.) и социальное взаимодействие.
                </p>

                <p>
                  Вес автомобиля с различными комбинациями опциональной конфигурации отличается, что
                  может привести к различиям в диапазоне CLTC. Пожалуйста, обратитесь к менеджеру
                  для получения подробной информации.
                </p>
              </>
            ),
            image: '/images/extras/camera360.png',
            price: 99000,
            mainImage: '/images/extras/main/acum1.png',
          },
          {
            id: 'extras3',
            name: 'Интегрированная интеллектуальная световая завеса ZEEKR Stargate',
            description: (
              <>
                <p>
                  В эпоху воплощенного интеллекта автомобили превратились из бесшумных механических
                  тел в роботов в форме машин с богатым эмоциональным интеллектом.
                </p>

                <p>
                  Огромный 90-дюймовый световой занавес имеет интерактивные функции, такие как
                  световой язык, музыкальное шоу и настраиваемый дисплей, что расширяет его
                  технологические возможности.
                </p>

                <p>
                  Вес автомобиля с различными комбинациями опциональной конфигурации отличается, что
                  может привести к различиям в диапазоне CLTC. Пожалуйста, обратитесь к менеджеру
                  для получения подробной информации.
                </p>
              </>
            ),
            image: '/images/extras/hud.png',
            price: 123000,
            mainImage: '/images/batteries/acum1.png',
          },
        ],
        software: [
          {
            id: 'basic',
            name: 'Интегрированная интеллектуальная световая завеса ZEEKR Stargate',
            description: 'Стандартные функции',
            image: '/images/software/basic.png',
            price: 0,
            mainImage: '/images/batteries/acum1.png',
          },
          {
            id: 'premium',
            name: 'Премиум',
            description: 'Доп. навигация и ассистенты',
            image: '/images/software/premium.png',
            price: 0,
            mainImage: '/images/batteries/acum1.png',
          },
        ],
      },
    },
    {
      id: 'zeekr-009-performance',
      name: 'Zeekr 009 Performance',
      price: 19500000,
      image: '/images/models/8b575ed5fb23534d61916e225bb374b1abe1154f.png',
      mainImage: '/images/models/big2.png',
      specs: {
        range: '702 км',
        acceleration: '3.9 с',
        power: '475 кВт',
        description: 'Премиальный электровэн с максимальным комфортом для пассажиров',
      },
      availableOptions: {
        batteries: [
          {
            id: 'battery-pro',
            name: 'PRO-батарея',
            image: '/images/batteries/acum1.png',
            mainImage: '/images/batteries/acum1.png',
            price: 0,
          },
          {
            id: 'battery-ultra',
            name: 'ULTRA-батарея',
            image: '/images/batteries/acum2.png',
            mainImage: '/images/batteries/acum1.png',
            price: 320000,
          },
        ],
        colors: {
          body: [
            {
              id: 'white-pearl',
              name: 'Жемчужно-белый',
              code: '#f8f8f8',
              price: 0,
            },
            {
              id: 'blue-mica',
              name: 'Синий металлик',
              code: '#335577',
              price: 20000,
            },
          ],
          moldings: [
            {
              id: 'satin',
              name: 'Сатин',
              code: '#cccccc',
              price: 0,
            },
            {
              id: 'black-gloss',
              name: 'Глянцевый чёрный',
              code: '#000000',
              price: 12000,
            },
          ],
          combinations: [
            {
              bodyId: 'silver',
              moldingId: 'chrome',
              mainImage: '/images/colors/silver-chrome.png',
            },
            {
              bodyId: 'silver',
              moldingId: 'black',
              mainImage: '/images/colors/silver-black.png',
            },
            {
              bodyId: 'black',
              moldingId: 'chrome',
              mainImage: '/images/colors/black-chrome.png',
            },
            {
              bodyId: 'black',
              moldingId: 'black',
              mainImage: '/images/colors/black-black.png',
            },
          ],
        },
        wheels: [
          {
            id: 'comfort-20',
            name: 'Комфорт 20"',
            image: '/images/wheels/comfort-20.png',
            price: 0,
            mainImage: '/images/batteries/acum1.png',
          },
          {
            id: 'luxury-22',
            name: 'Люкс 22"',
            image: '/images/wheels/luxury-22.png',
            price: 80000,
            mainImage: '/images/batteries/acum1.png',
          },
        ],
        interior: {
          material: [
            {
              id: 'vegan-leather',
              name: 'Веган-кожа',
              code: '#d8cab8',
              price: 0,
              mainImage: '/images/batteries/acum1.png',
            },
            {
              id: 'alcantara',
              name: 'Алькантара',
              code: '#1e1e1e',
              price: 150000,
              mainImage: '/images/batteries/acum1.png',
            },
          ],
          seat: [
            {
              id: 'executive',
              name: 'Executive',
              image: '/images/seats/executive.png',
              price: 0,
              mainImage: '/images/batteries/acum1.png',
            },
            {
              id: 'executive-massage',
              name: 'Executive + Массаж',
              image: '/images/seats/massage.png',
              price: 75000,
              mainImage: '/images/batteries/acum1.png',
            },
          ],
        },
        extras: [
          {
            id: 'fridge',
            name: 'Мини-холодильник',
            image: '/images/extras/fridge.png',
            price: 45000,
            mainImage: '/images/batteries/acum1.png',
            description: 'Премиальный электровэн с максимальным комфортом для пассажиров',
          },
          {
            id: 'curtains',
            name: 'Электрошторки',
            image: '/images/extras/curtains.png',
            price: 30000,
            mainImage: '/images/batteries/acum1.png',
            description: 'Премиальный электровэн с максимальным комфортом для пассажиров',
          },
        ],
        software: [
          {
            id: 'family-pack',
            name: 'Family Pack',
            description: 'Развлекательные функции для пассажиров',
            image: '/images/software/family.png',
            price: 0,
            mainImage: '/images/batteries/acum1.png',
          },
          {
            id: 'nav-assist',
            name: 'Навигация + Автопилот',
            description: 'Продвинутая навигация с автоуправлением',
            image: '/images/software/nav-assist.png',
            price: 0,
            mainImage: '/images/batteries/acum1.png',
          },
        ],
      },
    },
  ],
};
