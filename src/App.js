import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Information from './Components/Information';
import Interest from './Components/Interest';

function App() {
  return (
    <div className="App">
      <Information/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  );
}

export default App;
