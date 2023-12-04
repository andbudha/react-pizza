import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveIndex } from '../../redux/slices/filterSlice';

export const Categories = ({ activeIndex }) => {
  const dispatch = useDispatch();
  const categories = ['All', 'Meat Lovers', 'Veggie', 'BBQ', 'Spicy'];

  const setActiveIndexHandler = (index) => {
    dispatch(setActiveIndex(index));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndexHandler(index)}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
