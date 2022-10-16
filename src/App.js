import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnywherePizzaContext } from './context';
import axios from 'axios';

//pages
import Home from './pages/Home';
import PizzaPage from './pages/PizzaPage';
import SushiPage from './pages/SushiPage';

//components
import Header from './components/Header/Header';
import SideCart from './components/SideCart/SideCart';

function App() {

  const [pizza, setPizza] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [force, setForce] = useState(1);

  useEffect(() => {
    async function getProducts() {
      const productsResponce = await axios.get('https://631ae489dc236c0b1ee6bc11.mockapi.io/products');
      const pizzaResp = productsResponce.data[0].pizza;
      const sushiResp = productsResponce.data[1].sushi;

      setPizza(pizzaResp);
      setSushi(sushiResp);
    }
    getProducts();

    if(localStorage.getItem('cartItems') !== null) setCartItems(JSON.parse(localStorage.getItem('cartItems')));
  }, [])

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
    if(cartItems.find(cartObj => cartObj.id === item.id)) {
      const obj = cartItems.find(cartObj => cartObj.id === item.id);

      if(obj) {
        obj.counter += 1;
      }

      setForce(force + 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      setCartItems(prev => [...prev, item]);
    }
  }

  function onClickPlus(id) {
    const obj = cartItems.find(item => item.id === id);

    if(obj) {
      obj.counter += 1;
    }

    setForce(force + 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(obj); 
    }

  function onClickMinus(id) {
    const obj = cartItems.find(item => item.id === id);

    if(obj) {
      obj.counter > 1 ?
      obj.counter -= 1 :
      setCartItems(prev => prev.filter(item => item.id !== id));
    }

    setForce(force + 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
 
  // const products = [
  //   {"id": 1,
  //     "pizza": [
  //     {"id": 1,
  //      "imgUrl": "img/pizza1.png",
  //      "title": "Чікен Солодкий Чілі",
  //      "compound": "Курка, Цибуля, Перець Халапеньо, Сир Моцарелла, Томатный соус",
  //      "price": 300
  //     },
  //     {"id": 2,
  //      "imgUrl": "img/pizza2.png",
  //      "title": "Маргарита",
  //      "compound": "Курка, Цибуля, Перец Халапеньоб, Огірки мариновані",
  //      "price": 350
  //     },
  //     {"id": 3,
  //      "imgUrl": "img/pizza3.png",
  //      "title": "Чікен а-ля хрін",
  //      "compound": "Курка, Цибуля, Соус Карбонара",
  //      "price": 275
  //     },
  //     {"id": 4,
  //      "imgUrl": "img/pizza4.png",
  //      "title": "4 сезона",
  //      "compound": "Бекон, Шинка, Гриби, Курка, Цибуля, Маслини, Огірки мариновані",
  //      "price": 325
  //     },
  //     {"id": 5,
  //      "imgUrl": "img/pizza5.png",
  //      "title": "Каліфорнія",
  //      "compound": "Бекон, Шинка, Гриби, Курка, Цибуля, Маслини, Огірки мариновані",
  //      "price": 230
  //     },
  //     {"id": 6,
  //      "imgUrl": "img/pizza6.png",
  //      "title": "Чотири сири",
  //      "compound": "Бекон, Шинка, Гриби, Курка, Цибуля, Маслини, Огірки мариновані",
  //      "price": 275
  //     },
  //     {"id": 7,
  //      "imgUrl": "img/pizza7.png",
  //      "title": "Гостра Мексикано",
  //      "compound": "Бекон, Шинка, Гриби, Курка, Цибуля, Маслини, Огірки мариновані",
  //      "price": 310
  //     },
  //     {"id": 8,
  //      "imgUrl": "img/pizza8.png",
  //      "title": "Грибна",
  //      "compound": "Бекон, Шинка, Гриби, Курка, Цибуля, Маслини, Огірки мариновані",
  //      "price": 250
  //     }
  //     ]
  //   },
  //   {
  //     "id": 2,
  //     "sushi": [
  //       {"id": 9,
  //       "imgUrl": "img/sushi1.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 10,
  //       "imgUrl": "img/sushi2.jpg",
  //       "title": "Філадельфія крем-брюлле",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 11,
  //       "imgUrl": "img/sushi3.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 12,
  //       "imgUrl": "img/sushi4.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 13,
  //       "imgUrl": "img/sushi5.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 14,
  //       "imgUrl": "img/sushi6.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 15,
  //       "imgUrl": "img/sushi7.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       },
  //       {"id": 16,
  //       "imgUrl": "img/sushi8.jpg",
  //       "title": "Сашимі",
  //       "compound": "Семга, рис, сир креметто, соус унагы, креветка, авокадо",
  //       "price": 250
  //       }
  //     ]
  //   }
  // ];
  
  return (
    <AnywherePizzaContext.Provider value={
      {
        pizza,
        sushi,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        onCartAdded,
        onClickPlus,
        onClickMinus,
        getCartSummary
      } 
    }>
      <div className='app'>
        <Header />
        <SideCart />
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/pizza' element={ <PizzaPage /> }></Route>
          <Route path='/sushi' element={ <SushiPage /> }></Route>
        </Routes>
      </div>
    </AnywherePizzaContext.Provider>
  );
}

export default App;