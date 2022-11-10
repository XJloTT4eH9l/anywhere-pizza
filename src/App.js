import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnywherePizzaContext } from './context';
import axios from 'axios';

//pages
import Home from './pages/Home';
import PizzaPage from './pages/PizzaPage';
import SushiPage from './pages/SushiPage';
import DrinksPage from './pages/DrinksPage';
import SnacksPage from './pages/SnacksPage';
import SaucesPage from './pages/SaucesPage';
import DessertsPage from './pages/DessertsPage';
import ComboPage from './pages/ComboPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import AboutPage from './pages/AboutPage';

//components
import Header from './components/Header/Header';
import SideCart from './components/SideCart/SideCart';
import Footer from './components/Footer/Footer';
import CartAdded from './components/CartAdded/CartAdded';

function App() {
  //products
  const [pizza, setPizza] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [combo, setCombo] = useState([]);

  const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem('orders')) || []);
  const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')) || []);
  const [ordersId, setOrdersId] = useState(JSON.parse(window.localStorage.getItem('ordersId')) || 1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [force, setForce] = useState(1);
  const [displayNav, setDisplayNav] = useState(false);
  const [sortTitle, setSortTitle] = useState('title');
  const [navLinkActive, setNavLinkActive] = useState('');
  const [orderDone, setOrderDone] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const navLinks = [
    {name: 'Піца', href: '/anywhere-pizza/pizza', title: 'pizza', imgSrc:'img/pizza-icon.png'},
    {name: 'Суші', href: '/anywhere-pizza/sushi', title: 'sushi', imgSrc:'img/sushi-icon.png'},
    {name: 'Напої', href: '/anywhere-pizza/drinks', title: 'drinks', imgSrc:'img/drinks-icon.png'},
    {name: 'Закуски', href: '/anywhere-pizza/snacks', title: 'snacks', imgSrc:'img/snacks-icon.png'},
    {name: 'Десерти', href: '/anywhere-pizza/desserts', title: 'desserts', imgSrc:'img/desserts-icon.png'},
    {name: 'Соуси', href: '/anywhere-pizza/sauces', title: 'sauces', imgSrc:'img/sauces-icon.png'},
    {name: 'Комбо', href: '/anywhere-pizza/combo', title: 'combo', imgSrc:'img/combo-icon.png'},
    {name: 'Замовлення', href: '/anywhere-pizza/orders', title: 'orders', imgSrc: 'img/orders-icon.png'}
  ];

  //setProducts
  useEffect(() => {
    async function getProducts() {
      const productsResponce = await axios.get('https://631ae489dc236c0b1ee6bc11.mockapi.io/products');
      const pizzaResp = productsResponce.data[0].pizza;
      const sushiResp = productsResponce.data[1].sushi;
      const drinksResp = productsResponce.data[2].drinks;
      const snacksResp = productsResponce.data[3].snacks;
      const saucesResp = productsResponce.data[4].sauces;
      const dessertsResp = productsResponce.data[5].desserts;
      const comboResp = productsResponce.data[6].combo;

      setPizza(pizzaResp);
      setSushi(sushiResp);
      setDrinks(drinksResp);
      setSnacks(snacksResp);
      setSauces(saucesResp);
      setDesserts(dessertsResp);
      setCombo(comboResp);
    }
    getProducts();

    if(localStorage.getItem('cartItems') !== null) setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    if(localStorage.getItem('orders') !== null) setOrders(JSON.parse(localStorage.getItem('orders')));
    if(localStorage.getItem('ordersId') !== null) setOrdersId(JSON.parse(localStorage.getItem('ordersId')));
  }, [])

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders])

  useEffect(() => {
    localStorage.setItem('ordersId', JSON.stringify(ordersId));
  }, [ordersId])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    isCartOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow ='visible';
  }, [isCartOpen])

  function getCartSummary() {
    return cartItems.reduce((sum, item) => sum + item.price * item.counter, 0);
  }

  function onCartAdded(item) {
    setOrderDone(false);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
    const obj = cartItems.find(cartObj => cartObj.id === item.id);

    if(obj) {
      obj.counter += 1;
      setForce(force + 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      setCartItems(prev => [...prev, item]);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 1500);
    }
  }

  function onCartAddedPizza(item) {
    setOrderDone(false);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
    const obj = cartItems.find(cartObj => cartObj.id === item.id && cartObj.activeSize === item.activeSize && cartObj.type === item.type);

    if(obj) {
      obj.counter += 1;
      setForce(force + 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      setCartItems(prev => [...prev, item]);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 1500);
    }
  }

  function onClickPlus(item) {
    const objPizza = cartItems.find(cartObj => item.activeSize !== undefined && cartObj.id === item.id && cartObj.activeSize === item.activeSize && cartObj.type === item.type);
    const obj = cartItems.find(cartItem => cartItem.id === item.id);

    if(objPizza) {
      objPizza.counter += 1;
    } else {
      if(obj) {
        obj.counter += 1;
      }
    }

    setForce(force + 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  function onClickMinus(item) {
    const objPizza = cartItems.find(cartObj => item.activeSize !== undefined && cartObj.id === item.id && cartObj.activeSize === item.activeSize && cartObj.type === item.type);
    const obj = cartItems.find(cartObj => cartObj.id === item.id);

    if(objPizza) {
      objPizza.counter > 1 ? 
        objPizza.counter -= 1 : 
          setCartItems(prev => prev.filter(pizza => pizza.activeSize + pizza.id + pizza.type !== item.activeSize + item.id + item.type));
    } else {
      if(obj) {
        obj.counter > 1 ?
          obj.counter -= 1 :
            setCartItems(prev => prev.filter(cartObj => cartObj.title !== item.title));
      }
    }

    setForce(force + 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  function sortProducts(array) {
    const copy = array.slice();

    switch(sortTitle) {
      case 'title': 
        return copy.sort((a, b) => a.title > b.title ? 1 : -1);
      case 'price-low':
        return copy.sort((a, b) => a.price > b.price ? 1 : -1);
      case 'price-top':
        return copy.sort((a, b) => b.price > a.price ? 1 : -1);
      default: 
        return array;
    }

  }

  function sortProductsPizza(array) {
    const copy = array.slice();

    switch(sortTitle) {
      case 'title': 
        return copy.sort((a, b) => a.title > b.title ? 1 : -1);
      case 'price-low':
        return copy.sort((a, b) => a.prices[0] > b.prices[0] ? 1 : -1);
      case 'price-top':
        return copy.sort((a, b) => b.prices[0] > a.prices[0] ? 1 : -1);
      default: 
        return array;
    }

  }

  return (
    <AnywherePizzaContext.Provider value={
      {
        pizza,
        sushi,
        drinks,
        snacks,
        sauces,
        desserts,
        combo,
        orders,
        setOrders,
        ordersId, 
        setOrdersId,
        orderDone,
        setOrderDone,
        isCartOpen,
        setIsCartOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        cartItems,
        setCartItems,
        onCartAdded,
        onCartAddedPizza,
        onClickPlus,
        onClickMinus,
        getCartSummary,
        navLinks,
        displayNav,
        setDisplayNav,
        sortTitle,
        setSortTitle,
        sortProducts,
        sortProductsPizza,
        navLinkActive,
        setNavLinkActive,
        addedToCart,
      } 
    }>
      <div className='app'>
        <Header />
        <SideCart />
        <main className='main'>
          <CartAdded />
          <Routes>
            <Route path='/anywhere-pizza/' element={ <Home /> }></Route>
            <Route path='/anywhere-pizza/pizza' element={ <PizzaPage /> }></Route>
            <Route path='/anywhere-pizza/sushi' element={ <SushiPage /> }></Route>
            <Route path='/anywhere-pizza/drinks' element={ <DrinksPage /> }></Route>
            <Route path='/anywhere-pizza/snacks' element={ <SnacksPage /> }></Route>
            <Route path='/anywhere-pizza/sauces' element={ <SaucesPage /> }></Route>
            <Route path='/anywhere-pizza/desserts' element={ <DessertsPage /> }></Route>
            <Route path='/anywhere-pizza/combo' element={ <ComboPage /> }></Route>
            <Route path='/anywhere-pizza/cart' element={ <CartPage /> } ></Route>
            <Route path='/anywhere-pizza/orders' element={ <OrdersPage /> }></Route>
            <Route path='/anywhere-pizza/about' element={ <AboutPage /> }></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AnywherePizzaContext.Provider>
  );
}

export default App;