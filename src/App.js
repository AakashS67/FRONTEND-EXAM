import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { Routes,Route } from 'react-router';
import Product from './Product';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
   
    
    </div>
  );
}

export default App;
