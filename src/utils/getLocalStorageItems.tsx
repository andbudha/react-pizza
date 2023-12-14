export const getCartItems = () => {
  const cartItems = localStorage.getItem('cart');
  return cartItems ? JSON.parse(cartItems) : [];
};
