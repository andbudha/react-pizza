import './App.css';
import './scss/app.scss';
import './scss/_variables.scss';
import { Header } from './components/Header/Header.tsx';
import { Home } from './components/pages/Home/Home.tsx';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './components/pages/Cart/Cart.tsx';
import { ShowPizza } from './components/ShowPizza/ShowPizza.tsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<ShowPizza />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
