import * as React from 'react';

type Categories = {
  activeIndex: number;
  setActiveIndexHandler: (index: number) => void;
};
export const Categories = ({ activeIndex, setActiveIndexHandler }) => {
  const categories = ['All', 'Meat Lovers', 'Veggie', 'BBQ', 'Spicy'];

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
