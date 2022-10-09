import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AnywherePizzaContext from './context';
import axios from 'axios';

//pages
import Home from './pages/Home';

//components
import Header from './components/Header/Header';

function App() {

  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const productsResponce = await axios.get('https://631ae489dc236c0b1ee6bc11.mockapi.io/products');
      const pizzaResp = productsResponce.data[0].pizza;
      console.log(pizzaResp);
      setPizza(pizzaResp);
      
    }
    getProducts();
  }, [])
 
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
  //   }
  // ];
  return (
    <AnywherePizzaContext.Provider value={ {pizza} }>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
        </Routes>
      </div>
    </AnywherePizzaContext.Provider>
  );
}

export default App;
