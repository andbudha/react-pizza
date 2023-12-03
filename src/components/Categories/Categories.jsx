import * as React from 'react';

export const Categories = ({ activeIndex, setActiveIndex }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((cat, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
