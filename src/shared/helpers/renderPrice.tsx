export const renderPrice = (price: number) => {
  return price === 0 ? <span>*Включено в стоимость</span> : <>₽ {price.toLocaleString('ru-RU')}</>;
};
