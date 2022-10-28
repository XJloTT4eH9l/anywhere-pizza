import { useContext } from 'react';
import {AnywherePizzaContext} from '../../context';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';


function SliderCards({ products, title }) {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      };
    return (
      <>
        <h2 className='cart__title'>{title}</h2>
        <Slider {...sliderSettings}>
          {products.map(product => {
            return (
              <SliderCard
                key={product.id}
                id={product.id}
                compound={product.compound}
                imgUrl={product.imgUrl}
                title={product.title}
                price={product.price}
              />
            )
          })}
        </Slider>
      </>
    )
}

function SliderCard({id, imgUrl, title, compound, price}) {
    const { onCartAdded } = useContext(AnywherePizzaContext);

    function onCart() {
        onCartAdded({id, title, imgUrl, compound, price, counter: 1});
    }

    return (
        <div className="slider-card">
            <div className='slider-card__top'>
              <img className='slider-card__img' src={imgUrl} alt ='title' />
            </div>
            <div className='slider-card__bottom'>
              <h3 className='slider-card__title'>{title}</h3>
              <button className="btn slider-card__btn" onClick={onCart}>{price} грн</button>
            </div>
        </div>
    )
}

function SliderNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{...style, display: 'block'}} onClick={onClick}>
        <img src='img/arrow-right.png' alt='next' />
    </div>
  )
}

function SliderPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{...style, display: 'block'}} onClick={onClick}>
        <img src='img/arrow-left.png' alt='prev' />
    </div>
  )
}

export default SliderCards;