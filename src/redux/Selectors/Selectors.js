export const activeIndexSelector = (state) => state.filters.activeIndex;
export const sortChoiceSelector = (state) => state.filters.sortChoice;
export const selectedPageSelector = (state) => state.filters.selectedPage;
export const pizzaSelector = (state) => state.pizzas.pizzas;
export const statusSelector = (state) => state.pizzas.status;
export const cartItemsSelector = (state) => state.cart.cartItems;
export const totalSumSelector = (state) => state.cart.totalSum;
export const foundItemSelector = (pizzaId) => (state) =>
  state.cart.cartItems.find((item) => item.pizzaId === pizzaId);
export const searchValueSelector = (state) => state.filters.searchValue;
