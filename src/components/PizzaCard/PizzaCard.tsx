import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { cartItemsSelector } from '../../redux/Selectors/Selectors';
import { Link } from 'react-router-dom';
import { NewPizza, Pizza } from '../../types/types.ts';
import { AppRootState, useAppDispatch } from '../../redux/store.tsx';
import { addPizza } from '../../redux/slices/cartSlice.ts';

type PizzaCard = Pizza;
export const PizzaCard = ({
  name,
  price,
  imageUrl,
  types,
  sizes,
  id,
}: PizzaCard) => {
  const dispatch = useAppDispatch();

  const cartItems = useSelector<AppRootState, NewPizza[]>(cartItemsSelector);
  const foundPizza = cartItems.find((pizza) => pizza.id === id);
  const addedPizzaCount = foundPizza ? foundPizza.count : 0;

  const pizzaType = ['thin-crust', 'thick-crust'];
  const [activeType, setActiveType] = useState(0);
  const [pizzaSize, setPizzaSize] = useState(26);
  const crustType = activeType === 0 ? 'thin-crust' : 'thick-crust';

  const addPizzaHandler = () => {
    const newPizza = {
      name,
      price,
      imageUrl,
      id,
      crustType,
      pizzaSize,
    };
    dispatch(addPizza({ pizza: newPizza }));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <div>
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>
          </div>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => {
              return (
                <li
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={activeType === type ? 'active' : ''}
                >
                  {pizzaType[type]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size) => {
              return (
                <li
                  key={size}
                  onClick={() => setPizzaSize(size)}
                  className={pizzaSize === size ? 'active' : ''}
                >
                  {size} cm.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom" onClick={addPizzaHandler}>
          <div className="pizza-block__price">{price}€</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>add</span>
            {addedPizzaCount && addedPizzaCount > 0 ? (
              <i>{addedPizzaCount}</i>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
