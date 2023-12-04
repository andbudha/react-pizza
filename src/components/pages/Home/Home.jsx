// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { PizzaCard } from '../../PizzaCard/PizzaCard';
import { PizzaSkeleton } from '../../Skeletons/PizzaSkeleton';
import { Categories } from '../../Categories/Categories';
import { Sort } from '../../Sort/Sort';
import { Pagination } from '../../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveIndex,
  setSortChoice,
} from '../../../redux/slices/filterSlice';

export const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.filters.activeIndex);
  const sortChoice = useSelector((state) => state.filters.sortChoice);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const sort = () => {
    if (sortChoice.includes(' asc')) {
      return sortChoice.replace(' asc', '');
    } else if (sortChoice.includes(' desc')) {
      return sortChoice.replace(' desc', '');
    }
  };

  const order = () => {
    if (sortChoice.includes('asc')) {
      return 'asc';
    } else if (sortChoice.includes('desc')) {
      return 'desc';
    }
  };
  const finalSortChoice = sort();
  const finalOrder = order();
  const filter = searchValue.toLowerCase();

  const setActiveIndexHandler = (index) => {
    dispatch(setActiveIndex(index));
  };

  const setSortChoiceHandler = (choice) => {
    dispatch(setSortChoice(choice));
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items?${
        activeIndex > 0 ? `category=${activeIndex}` : ''
      }&sortBy=${finalSortChoice}&order=${finalOrder}&filter=${filter}&limit=4&p=${selectedPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [
    sortChoice,
    activeIndex,
    searchValue,
    selectedPage,
    filter,
    finalOrder,
    finalSortChoice,
  ]);

  const pizzaSkeletons = [...new Array(6)].map((_, i) => (
    <PizzaSkeleton key={i} />
  ));

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
    <div className="container">
      <div className="content__top">
        <Categories
          activeIndex={activeIndex}
          setActiveIndexHandler={setActiveIndexHandler}
        />
        <Sort
          sortChoice={sortChoice}
          setSortChoiceHandler={setSortChoiceHandler}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? pizzaSkeletons : pizzaList}
      </div>
      <Pagination setSelectedPage={setSelectedPage} />
    </div>
  );
};
