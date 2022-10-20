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

//components
import Header from './components/Header/Header';
import SideCart from './components/SideCart/SideCart';

function App() {

  const [pizza, setPizza] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')));
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [force, setForce] = useState(1);
  const [displayNav, setDisplayNav] = useState(false);
  const [sortTitle, setSortTitle] = useState('title');
  const [navLinkActive, setNavLinkActive] = useState('');

  const navLinks = [
    {name: 'Піца', href: '/pizza', title: 'pizza', imgSrc:'img/pizza-icon.png'},
    {name: 'Суші', href: '/sushi', title: 'sushi', imgSrc:'img/sushi-icon.png'},
    {name: 'Напої', href: '/drinks', title: 'drinks', imgSrc:'img/drinks-icon.png'},
    {name: 'Закуски', href: '/snacks', title: 'snacks', imgSrc:'img/snacks-icon.png'},
    {name: 'Комбо', href: '/kombo', title: 'kombo', imgSrc:'img/combo-icon.png'},
    {name: 'Десерти', href: '/desserts', title: 'desserts', imgSrc:'img/desserts-icon.png'},
    {name: 'Соуси', href: '/sauces', title: 'sauces', imgSrc:'img/sauces-icon.png'}
  ];

  useEffect(() => {
    async function getProducts() {
      const productsResponce = await axios.get('https://631ae489dc236c0b1ee6bc11.mockapi.io/products');
      const pizzaResp = productsResponce.data[0].pizza;
      const sushiResp = productsResponce.data[1].sushi;
      const drinksResp = productsResponce.data[2].drinks;
      const snacksResp = productsResponce.data[3].snacks;
      const saucesResp = productsResponce.data[4].sauces;

      setPizza(pizzaResp);
      setSushi(sushiResp);
      setDrinks(drinksResp);
      setSnacks(snacksResp);
      setSauces(saucesResp);
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
  //   },
  //   {
  //     "id": 3,
  //     "drinks": [
  //       {"id": 17,
  //         "imgUrl": "img/pepsi-default.png",
  //         "title": "Pepsi",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 16
  //       },
  //       {"id": 18,
  //         "imgUrl": "img/coke.png",
  //         "title": "Coca-cola",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 18
  //       },
  //       {"id": 19,
  //         "imgUrl": "img/mirinda.png",
  //         "title": "Mirinda",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 15
  //       },
  //       {"id": 20,
  //         "imgUrl": "img/fanta.png",
  //         "title": "Fanta",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 18
  //       },
  //       {"id": 21,
  //         "imgUrl": "img/morshynska-still.png",
  //         "title": "Вода негазована Моршинська",
  //         "compound": "Об'єм: 0.5л",
  //         "price": 13
  //       },
  //       {"id": 22,
  //         "imgUrl": "img/morshynska-carbonated.png",
  //         "title": "Вода слабогазована Моршинська",
  //         "compound": "Об'єм: 0.5л",
  //         "price": 15
  //       }
  //     ]
  //   },
  //   {
  //     "id": 4,
  //     "snacks": [
  //       {"id": 23,
  //       "imgUrl": "img/potato-fries.png",
  //       "title": "Картопля фрі середня",
  //       "compound": "Вага: 90гр",
  //       "price": 50
  //       },
  //       {"id": 24,
  //       "imgUrl": "img/shaurma.png",
  //       "title": "Шаурма",
  //       "compound": "Вага: 300гр",
  //       "price": 75
  //       },
  //       {"id": 25,
  //       "imgUrl": "img/chiken-legs.png",
  //       "title": "Гострі ніжки",
  //       "compound": "Вага: 400гр",
  //       "price": 160
  //       },
  //       {"id": 26,
  //       "imgUrl": "img/chiken-wings.png",
  //       "title": "Смажені курячі крильця",
  //       "compound": "Вага: 350гр",
  //       "price": 180
  //       }
  //     ]
  //   },
  //   {
  //     "id": 5,
  //     "sauces": [
  //       {"id": 26,
  //        "imgUrl": "img/garlicky.png",
  //        "title": "Часниковтй соус",
  //        "compound": "Вага: 30гр",
  //        "price": 29
  //       },
  //       {"id": 27,
  //        "imgUrl": "img/ketchup.png",
  //        "title": "Кетчуп",
  //        "compound": "Вага: 30гр",
  //        "price": 29
  //       },
  //       {"id": 28,
  //        "imgUrl": "img/mayonnaise.png",
  //        "title": "Майонез",
  //        "compound": "Вага: 30гр",
  //        "price": 29
  //       },
  //       {"id": 29,
  //        "imgUrl": "img/mustard.png",
  //        "title": "Гірчиця",
  //        "compound": "Вага: 30гр",
  //        "price": 29
  //       }
  //     ]
  //   }
  // ];
  
  return (
    <AnywherePizzaContext.Provider value={
      {
        pizza,
        sushi,
        drinks,
        snacks,
        sauces,
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        onCartAdded,
        onClickPlus,
        onClickMinus,
        getCartSummary,
        navLinks,
        displayNav,
        setDisplayNav,
        sortTitle,
        setSortTitle,
        sortProducts,
        navLinkActive,
        setNavLinkActive
      } 
    }>
      <div className='app'>
        <Header />
        <SideCart />
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/pizza' element={ <PizzaPage /> }></Route>
          <Route path='/sushi' element={ <SushiPage /> }></Route>
          <Route path='/drinks' element={ <DrinksPage />}></Route>
          <Route path='/snacks' element={ <SnacksPage />}></Route>
          <Route path='/sauces' element={ <SaucesPage />}></Route>
        </Routes>
      </div>
    </AnywherePizzaContext.Provider>
  );
}

export default App;