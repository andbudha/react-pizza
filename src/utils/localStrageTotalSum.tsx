import { NewPizza } from '../types/types';

export const localStrageTotalSum = () => {
  const cartItems = localStorage.getItem('cart');
  if (cartItems?.length) {
    return JSON.parse(cartItems).reduce(
      (sum: number, item: NewPizza) =>
        item.count ? sum + item.count * item.price : 0,
      0
    );
  }
};
