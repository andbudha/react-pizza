import './App.css';
import './scss/app.scss';
import './scss/_variables.scss';
import { Header } from './components/Header/Header';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './components/pages/Cart/Cart';
import { createContext, useState } from 'react';
export const AppContext = createContext();
function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <div className="wrapper">
        <AppContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
