
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pelis from '../src/components/Pelis'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro frase="You have the newest movies of the cinema with all its information" frase2="We will wait for you!"/>
      <Pelis/>
      <Footer/>
    </div>
  );
}

export default App;
