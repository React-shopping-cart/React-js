import './App.css';
import {useState} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import cartList from './cartList';

  function App() {
    const[product, setProduct] = useState ([
      {
        url:'',
        name:'lambarghini',
        category:'shoes',
        seller:'AMZ seller Ghz',
        price:1999,
      },
      ])
    const[ShowCart, setShowCart] = useState (false);
    const handleShowCart = (value) => {
      setShowCart(value)
    }

    const[cart,setcart] = useState([]);
    const addToCart = (data) => {
      setcart([...cart,{...data,quantity : 1}]);
      console.log(cart)
      return (
        <div className="App">
        <Header count={cart.length} handleShowCart={handleShowCart}/>
      {
        ShowCart? <ProductList Product={Product} addToCart={addToCart}/>:
        <cartList cart={cart}
  }
</div>
);
} export default App;
