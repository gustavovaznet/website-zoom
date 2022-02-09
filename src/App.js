//APP PAGE

//IMPORTING
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.scss';

//APP
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
