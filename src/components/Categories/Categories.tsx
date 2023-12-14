import * as React from 'react';

type Categories = {
  activeIndex: number;
  setActiveIndexHandler: (index: number) => void;
};
export const Categories: React.FC<Categories> = ({
  activeIndex,
  setActiveIndexHandler,
}) => {
  const categories = ['All', 'Meat Lovers', 'Veggie', 'BBQ', 'Spicy'];
  console.log('Categories rerendered!');

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
