
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products';
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
