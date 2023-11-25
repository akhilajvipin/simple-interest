import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Carouselpage from './pages/Carouselpage';
import Home from './pages/Home';
import Toppage from './pages/Toppage';

function App() {
  return (
    <div>
     <Header/>
     <Toppage/>
     <Carouselpage/>
     <Home/>
     
     <Footer/>
    </div>
  );
}

export default App;
