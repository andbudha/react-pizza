import * as React from 'react';
import { useEffect } from 'react';
import { PizzaCard } from '../../PizzaCard/PizzaCard.tsx';
import { PizzaSkeleton } from '../../Skeletons/PizzaSkeleton.tsx';
import { Categories } from '../../Categories/Categories.tsx';
import { Sort, sortList } from '../../Sort/Sort.tsx';
import { Pagination } from '../../Pagination/Pagination.tsx';
import { useSelector } from 'react-redux';
import {
  setActiveIndex,
  setFilters,
  setSelectedPage,
  setSortChoice,
} from '../../../redux/slices/filterSlice.ts';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { pizzaThunks } from '../../../redux/slices/pizzaSlice.ts';
import { AxiosError } from '../../AxiosError/AxiosError.js';
import {
  activeIndexSelector,
  selectedPageSelector,
  sortChoiceSelector,
  pizzaSelector,
  statusSelector,
  searchValueSelector,
} from '../../../redux/Selectors/Selectors.js';
import { AppRootState, useAppDispatch } from '../../../redux/store.tsx';
import { Pizza } from '../../../types/types.ts';

export const Home = () => {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeIndex = useSelector<AppRootState, number>(activeIndexSelector);
  const sortChoice = useSelector<AppRootState, string>(sortChoiceSelector);
  const selectedPage = useSelector<AppRootState, number>(selectedPageSelector);
  const pizzas = useSelector<AppRootState, Pizza[]>(pizzaSelector);
  const status = useSelector<AppRootState, string>(statusSelector);
  const searchValue = useSelector<AppRootState, string>(searchValueSelector);

  const setActiveIndexHandler = React.useCallback((index: number) => {
    dispatch(setActiveIndex({ index }));
  }, []);

  const setSortChoiceHandler = (choice: string) => {
    dispatch(setSortChoice({ choice }));
  };

  const setSelectedPageHandler = (pageNumber: number) => {
    dispatch(setSelectedPage({ pageNumber }));
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
            activeIndex: params.activeIndex,
            selectedPage: params.selectedPage,
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
        name={pizza.name}
        imageUrl={pizza.imageUrl}
        price={pizza.price}
        sizes={pizza.sizes}
        types={pizza.types}
        id={pizza.id}
      />
    );
  });
  if (status === 'error') {
    return <AxiosError />;
  }

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
      <Pagination
        setSelectedPageHandler={setSelectedPageHandler}
        selectedPage={selectedPage}
      />
    </div>
  );
};
