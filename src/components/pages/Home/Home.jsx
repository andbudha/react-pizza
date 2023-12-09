// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { PizzaCard } from '../../PizzaCard/PizzaCard';
import { PizzaSkeleton } from '../../Skeletons/PizzaSkeleton';
import { Categories } from '../../Categories/Categories';
import { Sort, sortList } from '../../Sort/Sort';
import { Pagination } from '../../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveIndex,
  setFilters,
  setSelectedPage,
  setSortChoice,
} from '../../../redux/slices/filterSlice';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { pizzaThunks } from '../../../redux/slices/pizzaSlice';

export const Home = ({ searchValue }) => {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeIndex = useSelector((state) => state.filters.activeIndex);
  const sortChoice = useSelector((state) => state.filters.sortChoice);
  const selectedPage = useSelector((state) => state.filters.selectedPage);
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const status = useSelector((state) => state.pizzas.status);

  const setActiveIndexHandler = (index) => {
    dispatch(setActiveIndex(index));
  };

  const setSortChoiceHandler = (choice) => {
    dispatch(setSortChoice(choice));
  };

  const setSelectedPageHandler = (pageNumber) => {
    dispatch(setSelectedPage(pageNumber));
  };

  const getPizzas = async () => {
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

    dispatch(
      pizzaThunks.setPizzas({
        activeIndex,
        finalSortChoice,
        finalOrder,
        filter,
        selectedPage,
      })
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortChoice,
        activeIndex,
        selectedPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortChoice, activeIndex, searchValue, selectedPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const index = sortList.findIndex((choice) => {
        return choice === params.sortChoice;
      });
      if (index !== -1) {
        dispatch(
          setFilters({
            ...params,
            sortChoice: sortList[index],
          })
        );
        isSearch.current = true;
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [sortChoice, activeIndex, searchValue, selectedPage]);

  const pizzaSkeletons = [...new Array(6)].map((_, i) => (
    <PizzaSkeleton key={i} />
  ));

  const pizzaList = pizzas.map((pizza) => {
    return (
      <PizzaCard
        key={pizza.id}
        pizzaName={pizza.name}
        pizzaImage={pizza.imageUrl}
        pizzaPrice={pizza.price}
        sizes={pizza.sizes}
        types={pizza.types}
        pizzaId={pizza.id}
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
        {status === 'loading' ? pizzaSkeletons : pizzaList}
      </div>
      <Pagination setSelectedPageHandler={setSelectedPageHandler} />
    </div>
  );
};
