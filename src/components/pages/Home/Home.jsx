// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { PizzaCard } from '../../PizzaCard/PizzaCard';
import { PizzaSkeleton } from '../../Skeletons/PizzaSkeleton';

export const Home = (props) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items')
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);

  const pizzaList = pizzas.map((pizza) => {
    return (
      <PizzaCard
        key={pizza.id}
        pizzaname={pizza.name}
        pizzaImage={pizza.imageUrl}
        price={pizza.price}
        sizes={pizza.sizes}
        types={pizza.types}
      />
    );
  });
  return (
    <>
      {isLoading
        ? [...new Array(9)].map((_, i) => <PizzaSkeleton key={i} />)
        : pizzaList}
    </>
  );
};
