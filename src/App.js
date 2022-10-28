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

//components
import Header from './components/Header/Header';
import SideCart from './components/SideCart/SideCart';
import Footer from './components/Footer/Footer';

function App() {
  //products
  const [pizza, setPizza] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [combo, setCombo] = useState([]);

  const [cartItems, setCartItems] = useState(JSON.parse(window.localStorage.getItem('cartItems')));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    {name: 'Десерти', href: '/desserts', title: 'desserts', imgSrc:'img/desserts-icon.png'},
    {name: 'Соуси', href: '/sauces', title: 'sauces', imgSrc:'img/sauces-icon.png'},
    {name: 'Комбо', href: '/combo', title: 'combo', imgSrc:'img/combo-icon.png'}
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
  //      "imgUrl": "img/pizza1.jpg",
  //      "title": "Маргарита",
  //      "compound": "Томатний соус, велика порція моцарели, томати",
  //      "price": 300
  //     },
  //     {"id": 2,
  //      "imgUrl": "img/pizza2.jpg",
  //      "title": "Дон бекон",
  //      "compound": "Болоньєзе соус, сир, велика порція бекону, томати",
  //      "price": 350
  //     },
  //     {"id": 3,
  //      "imgUrl": "img/pizza3.jpg",
  //      "title": "Техас",
  //      "compound": "Барбекю соус, моцарела, мисливські ковбаски, кукурудза, цибуля, печериці",
  //      "price": 275
  //     },
  //     {"id": 4,
  //      "imgUrl": "img/pizza4.jpg",
  //      "title": "Алькопчино",
  //      "compound": "Болоньєзе соус, сир, салямі, мисливські ковбаски, огірок солоний, томати",
  //      "price": 325
  //     },
  //     {"id": 5,
  //      "imgUrl": "img/pizza5.jpg",
  //      "title": "Мюнхенська",
  //      "compound": "Томатний соус, сир моцарела, мисливські ковбаски, шинка, томати, печериці",
  //      "price": 230
  //     },
  //     {"id": 6,
  //      "imgUrl": "img/pizza6.jpg",
  //      "title": "Карбонара",
  //      "compound": "Вершковий соус, сир моцарела, сирчедер, бекон, сир пармезан, червона цибуля, томати",
  //      "price": 275
  //     },
  //     {"id": 7,
  //      "imgUrl": "img/pizza7.jpg",
  //      "title": "4 сири",
  //      "compound": "Вершковий соус, сир чедер, сир моцарела, сир дор блю, сир пармезан",
  //      "price": 310
  //     },
  //     {"id": 8,
  //      "imgUrl": "img/pizza8.jpg",
  //      "title": "Морська",
  //      "compound": "Вершковий соус, сир, мідії, кальмари, маслини, лимон",
  //      "price": 250
  //     },
  //     {"id": 9,
  //      "imgUrl": "img/pizza9.jpg",
  //      "title": "Бургер піца",
  //      "compound": "Томатний соус, бургер соус, сир, руккола, шинка, пеппероні, копчена курка, болгарський перець, цибуля",
  //      "price": 280
  //     },
  //     {"id": 10,
  //      "imgUrl": "img/pizza10.jpg",
  //      "title": "4 Сезони",
  //      "compound": "4 піци в 1й: Вершкова, 4 Сири, Копчена, Бургер піца",
  //      "price": 235
  //     },
  //     {"id": 11,
  //      "imgUrl": "img/pizza11.jpg",
  //      "title": "Вершкова",
  //      "compound": "Вершковий соус, сир, копчена курка, салямі",
  //      "price": 220
  //     },
  //     {"id": 12,
  //      "imgUrl": "img/pizza12.jpg",
  //      "title": "Пеппероні",
  //      "compound": "Томатний соус, сир, ковбаски пеппероні",
  //      "price": 180
  //     },
  //     {"id": 13,
  //      "imgUrl": "img/pizza13.jpg",
  //      "title": "Гавайська",
  //      "compound": "Томатний соус, сир, шинка, куряче філе, ананаси, кукурудза",
  //      "price": 200
  //     }
  //     ]
  //   },
  //   {
  //     "id": 2,
  //     "sushi": [
  //       {"id": 14,
  //       "imgUrl": "img/sushi1.webp",
  //       "title": "Аскава",
  //       "compound": "лосось, сир, огірок, кунжут, ікра лосося 300гр",
  //       "price": 225
  //       },
  //       {"id": 15,
  //       "imgUrl": "img/sushi2.webp",
  //       "title": "Вугорь під сонцем",
  //       "compound": "вугорь, сир, огірок, тобіка, унагі 300гр",
  //       "price": 240
  //       },
  //       {"id": 16,
  //       "imgUrl": "img/sushi3.webp",
  //       "title": "Каліфорнія вугор",
  //       "compound": "Каліфорнія вугор (вугор, авокадо, огірок, тобіко) 300гр",
  //       "price": 258
  //       },
  //       {"id": 17,
  //       "imgUrl": "img/sushi4.webp",
  //       "title": "Зелений дракон",
  //       "compound": "вугор, авокадо, сир, спайсі соус, огірок, унагі, кунжут 300гр",
  //       "price": 350
  //       },
  //       {"id": 18,
  //       "imgUrl": "img/sushi5.webp",
  //       "title": "Золотий гребінець",
  //       "compound": "гребінець, креветка в темпура, авокадо, сир, тобіко, спайс 300гр",
  //       "price": 300
  //       },
  //       {"id": 19,
  //       "imgUrl": "img/sushi6.webp",
  //       "title": "Спайсі",
  //       "compound": "сир, огірок, лосось, унагі, спайсі соус, кунжут 250гр",
  //       "price": 250
  //       },
  //       {"id": 20,
  //       "imgUrl": "img/sushi7.webp",
  //       "title": "Токіо рол",
  //       "compound": "омлет томаго, вугор, вершковий крем сир, огірок, хіяші, білий кунжут",
  //       "price": 275
  //       },
  //       {"id": 21,
  //       "imgUrl": "img/sushi8.webp",
  //       "title": "Філа Лосось Гриль",
  //       "compound": "лосось обпеченний відкритим вогнем, сир, огірок, тобіко, унаги, кунжут",
  //       "price": 280
  //       }
  //     ]
  //   },
  //   {
  //     "id": 3,
  //     "drinks": [
  //       {"id": 22,
  //         "imgUrl": "img/bonaqua.jpg",
  //         "title": "Вода негазована Bonaqua",
  //         "compound": "Об'єм: 0.5л",
  //         "price": 13
  //       },
  //       {"id": 23,
  //         "imgUrl": "img/coke.jpg",
  //         "title": "Coca-cola",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 18
  //       },
  //       {"id": 24,
  //         "imgUrl": "img/sprite.jpg",
  //         "title": "Sprite",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 18
  //       },
  //       {"id": 25,
  //         "imgUrl": "img/fanta.jpg",
  //         "title": "Fanta",
  //         "compound": "Об'єм: 0.33л",
  //         "price": 18
  //       },
  //       {"id": 26,
  //         "imgUrl": "img/rich-orange.jpg",
  //         "title": "Сік Rich апельсин",
  //         "compound": "Об'єм: 1л",
  //         "price": 49
  //       },
  //       {"id": 27,
  //         "imgUrl": "img/rich-apple.jpg",
  //         "title": "Сік Rich яблоко",
  //         "compound": "Об'єм: 1л",
  //         "price": 49
  //       }
  //     ]
  //   },
  //   {
  //     "id": 4,
  //     "snacks": [
  //       {"id": 28,
  //       "imgUrl": "img/potato-fries.png",
  //       "title": "Картопля фрі середня",
  //       "compound": "Вага: 90г",
  //       "price": 50
  //       },
  //       {"id": 29,
  //       "imgUrl": "img/shaurma.png",
  //       "title": "Шаурма",
  //       "compound": "Вага: 300г",
  //       "price": 75
  //       },
  //       {"id": 30,
  //       "imgUrl": "img/chiken-legs.png",
  //       "title": "Гострі ніжки",
  //       "compound": "Вага: 400г",
  //       "price": 160
  //       },
  //       {"id": 31,
  //       "imgUrl": "img/chiken-wings.png",
  //       "title": "Смажені курячі крильця",
  //       "compound": "Вага: 350г",
  //       "price": 180
  //       },
  //       {"id": 32,
  //       "imgUrl": "img/squid-rings.jpg",
  //       "title": "Кільця кальмара в клярі",
  //       "compound": "Вага: 100г",
  //       "price": 99
  //       },
  //       {"id": 33,
  //       "imgUrl": "img/cheese sticks.jpg",
  //       "title": "Cирні палички",
  //       "compound": "6 штук",
  //       "price": 59
  //       },
  //       {"id": 34,
  //       "imgUrl": "img/nagets.jpg",
  //       "title": "Нагетси",
  //       "compound": "6 штук",
  //       "price": 59
  //       }
  //     ]
  //   },
  //   {
  //     "id": 5,
  //     "sauces": [
  //       {"id": 35,
  //        "imgUrl": "img/mustard.jpg",
  //        "title": "Гірчиця",
  //        "compound": "Вага: 30г",
  //        "price": 29
  //       },
  //       {"id": 36,
  //        "imgUrl": "img/ketchup.jpg",
  //        "title": "Кетчуп",
  //        "compound": "Вага: 30г",
  //        "price": 29
  //       },
  //       {"id": 37,
  //        "imgUrl": "img/mayonez.jpg",
  //        "title": "Майонез",
  //        "compound": "Вага: 30г",
  //        "price": 29
  //       },
  //       {"id": 38,
  //        "imgUrl": "img/cheeze-sauce.jpg",
  //        "title": "Сирний соус",
  //        "compound": "Вага: 30г",
  //        "price": 29
  //       },
  //       {"id": 39,
  //        "imgUrl": "img/cari.jpg",
  //        "title": "Соус карі",
  //        "compound": "Вага: 30г",
  //        "price": 29
  //       }
  //     ]
  //   },
  //   {
  //     "id": 6,
  //     "desserts": [
  //       {"id": 40,
  //        "imgUrl": "img/desserts1.png",
  //        "title": "Печиво «Сантимелі» з корицею",
  //        "compound": "Кількість: 4 шт (100г)",
  //        "price": 125
  //       },
  //       {"id": 41,
  //        "imgUrl": "img/desserts2.png",
  //        "title": "Рогалики",
  //        "compound": "Кількість: 3 шт (85г)",
  //        "price": 130
  //       },
  //       {"id": 42,
  //        "imgUrl": "img/desserts3.png",
  //        "title": "Сирники",
  //        "compound": "Кількість: 3 шт (120г)",
  //        "price": 140
  //       },
  //       {"id": 43,
  //        "imgUrl": "img/keks.jpg",
  //        "title": "Лава кейк",
  //        "compound": "Кількість: 1 шт (96г)",
  //        "price": 90
  //       },
  //       {"id": 44,
  //        "imgUrl": "img/desserts4.jpg",
  //        "title": "Вишневі роли",
  //        "compound": "Кількість: 7 шт (276г)",
  //        "price": 110
  //       },
  //       {"id": 45,
  //        "imgUrl": "img/mafin.jpg",
  //        "title": "Мафін кокосовий",
  //        "compound": "Кількість: 1 шт (80г)",
  //        "price": 60
  //       },
  //       {"id": 46,
  //        "imgUrl": "img/desserts5.jpg",
  //        "title": "Абрикосові роли",
  //        "compound": "Кількість: 7 шт (276г)",
  //        "price": 110
  //       }
  //     ]
  //   },
  //   {"id": 7,
  //    "combo": [
  //       {"id": 47,
  //         "imgUrl": "img/combo1.jpg",
  //         "title": "Фіче бокс 1",
  //         "compound": "Пеппероні, картопля фрі, нагетси, 1л Coca-Cola, 2 соуси",
  //         "price": 294
  //       },
  //       {"id": 48,
  //         "imgUrl": "img/combo2.jpg",
  //         "title": "Фіче бокс 2",
  //         "compound": "Пеппероні, нагетси, крильця в паніровці, 1л Coca-Cola, 2 соуси",
  //         "price": 344
  //       },
  //       {"id": 49,
  //         "imgUrl": "img/combo3.jpg",
  //         "title": "Міні вечірка 2 піци та напій",
  //         "compound": "4 сезони, бургер піца, 1л Coca-Cola",
  //         "price": 324
  //       },
  //       {"id": 50,
  //         "imgUrl": "img/combo4.jpg",
  //         "title": "Мала вечірка 3 піци та напій",
  //         "compound": "Гавайська, Бургер піца, вершкова піца, 2л Coca-Cola",
  //         "price": 479
  //       },
  //       {"id": 51,
  //         "imgUrl": "img/combo5.jpg",
  //         "title": "Велика вечірка 4 піци та напій",
  //         "compound": "Гавайська, Бургер піца, вершкова піца, морська піца, 2л Coca-Cola",
  //         "price": 629
  //       }
  //    ]
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
        desserts,
        combo,
        isCartOpen,
        setIsCartOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
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
        <main className='main'>
          <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='/pizza' element={ <PizzaPage /> }></Route>
            <Route path='/sushi' element={ <SushiPage /> }></Route>
            <Route path='/drinks' element={ <DrinksPage /> }></Route>
            <Route path='/snacks' element={ <SnacksPage /> }></Route>
            <Route path='/sauces' element={ <SaucesPage /> }></Route>
            <Route path='/desserts' element={ <DessertsPage /> }></Route>
            <Route path='/combo' element={ <ComboPage /> }></Route>
            <Route path='/cart' element={ <CartPage /> }></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </AnywherePizzaContext.Provider>
  );
}

export default App;