import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Grocery from './components/Grocery';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import Cart from './components/Cart';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


function App() {
  return (
 <Provider store={appStore}>
   <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
 </Provider>
      

  );
}

export default App;

