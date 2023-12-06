import * as React from 'react';
export const sortList = [
  'rating asc',
  'rating desc',
  'price asc',
  'price desc',
  'name asc',
  'name desc',
];
export const Sort = ({ sortChoice, setSortChoiceHandler }) => {
  const [openSate, setOpenState] = React.useState(false);
  const sortRef = React.useRef();

  const onClickSetSortChoice = (choice) => {
    setSortChoiceHandler(choice);
    setOpenState(false);
  };

  React.useEffect(() => {
    const outsideClickHandler = (e) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setOpenState(false);
      }
    };
    document.body.addEventListener('click', outsideClickHandler);

    return () => {
      document.body.removeEventListener('click', outsideClickHandler);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={() => setOpenState(!openSate)}>{sortChoice}</span>
      </div>
      {openSate && (
        <div className="sort__popup">
          <ul>
            {sortList.map((choice, i) => {
              return (
                <li
                  key={i}
                  className={sortChoice === choice ? 'active' : ''}
                  onClick={() => onClickSetSortChoice(choice)}
                >
                  {choice}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
