import * as React from 'react';

export const Categories = () => {
  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const setIndexHandler = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((cat, index) => {
          return (
            <li
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => setIndexHandler(index)}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
