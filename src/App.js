import './App.css';
import './scss/app.scss';
import './scss/_variables.scss';
import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { useEffect, useState } from 'react';
import { PizzaCard } from './components/PizzaCard/PizzaCard';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://656897589927836bd975198a.mockapi.io/reactpizza/api/1/items')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPizzas(data);
        return data;
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
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{pizzaList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
