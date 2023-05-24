import './App.css';

import Navbar from './Components/header/Navbar';
import Footer from './Components/Footer';
import Routing from './utilities/Routing';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routing/>
     <Footer/>
     
    
    </div>
  );
}

export default App;
