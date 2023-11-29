import './App.css';
import './scss/app.scss';
import './scss/_variables.scss';
import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaCard } from './components/PizzaCard/PizzaCard';

function App() {
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
            <div className="content__items">
              <PizzaCard pizzaname={'Margherita'} price={12} />
              <PizzaCard pizzaname={'Neapolitan'} price={12} />
              <PizzaCard pizzaname={'Sicilian'} price={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
