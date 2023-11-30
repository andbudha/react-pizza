import './App.css';
import './scss/app.scss';
import './scss/_variables.scss';
import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaCard } from './components/PizzaCard/PizzaCard';
import pizzas from './assets/pizzas/pizzas.json';

function App() {
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
