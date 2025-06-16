export interface CarModel {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: {
    range: string;
    acceleration: string;
    power: string;
    description: string;
  };
  availableOptions: {
    batteries: BatteryOption[];
    colors: {
      body: ColorOption[];
      moldings: ColorOption[];
    };
    wheels: WheelOption[];
    interior: {
      material: InteriorMaterialOption[];
      seat: SeatOption[];
    };
    extras: ExtraOption[];
    software: SoftwareOption[];
  };
}

export interface BatteryOption {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface ColorOption {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface WheelOption {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface InteriorMaterialOption {
  id: string;
  name: string;
  code: string;
  price: number;
}

export interface SeatOption {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface ExtraOption {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface SoftwareOption {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}
