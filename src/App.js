import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Orders from './components/Orders/Orders';
import Customers from './components/Customers/customers';
import Products from './components/Products/Products';



function App() {


  return (

    <div className="App">
      <div class="AppGlass">
        <Sidebar />

        <Router>
          <Routes>
            <Route exact path="/" element={<MainDash />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/customers" element={<Customers/>}> </Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/analytics" element={<MainDash />}></Route>
          </Routes>
        </Router>

        <RightSide />
      </div>
    </div>
  );
}

export default App;
