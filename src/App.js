import './App.css';
import './scss/app.scss';
import './scss/_variables.scss';
import { Header } from './components/Header/Header';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <NotFound />
      </div>
    </div>
  );
}

export default App;
