
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pelis from '../src/components/Pelis'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro frase="You can search information of your favourites movies!" frase2="We will wait for you!"/>
      <SearchBar/>
      <Pelis/>
      <Footer/>
    </div>
  );
}

export default App;
