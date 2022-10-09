import { Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Home';

//components
import Header from './components/Header/Header';

function App() {
  const products = [
    {"id": 1,
      "pizza": [
      {"id": 1,
       "imgUrl": "img/pizza1.jpg",
       "title": "Чікен Солодкий Чілі",
       "compound": "Курка, Цибуля, Перець Халапеньо, Сир Моцарелла, Томатный соус",
       "price": 300
      },
      {"id": 2,
       "imgUrl": "img/pizza2.jpg",
       "title": "EASY PEASY огірковий мікс",
       "compound": "Курка, Цибуля, Перец Халапеньоб, Огірки мариновані",
       "price": 350
      },
      {"id": 3,
       "imgUrl": "img/pizza3.jpg",
       "title": "EASY PEASY чікен а-ля хрін",
       "compound": "Курка, Цибуля, Соус Карбонара",
       "price": 275
      },
      {"id": 4,
       "imgUrl": "img/pizza4.jpg",
       "title": "4 сезона",
       "compound": "Бекон, Шинка, Гриби, Курка, Цибуля, Маслини, Огірки мариновані",
       "price": 325
      },
      ]
    }
  ];
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
