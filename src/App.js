
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pelis from '../src/components/Pelis'
import Header from './components/Header'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <Pelis/>
      <Footer/>
    </div>
  );
}

export default App;
