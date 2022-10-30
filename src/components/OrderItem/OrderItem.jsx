import './OrderItem.scss';
import { AnywherePizzaContext } from '../../context';
import { useState, useContext } from 'react';

function OrderItem(props) {
    const { id, summary, address, products } = props;
    const [orderOpen, setOrderOpen] = useState(false);
    const { setCartItems, setIsCartOpen } = useContext(AnywherePizzaContext);

    function openOrder() {
        setOrderOpen(!orderOpen);
    }

    function repeatOrder() {
        setCartItems(products);
        setIsCartOpen(true);
    }

    return (
        <div className="orders-item">
            <div className="orders-item__top">
                <div className='orders-item__fields'>
                    <div className="orders-item__field">
                        <h2 className="orders-item__heading">Замовлення</h2>
                        <p className="orders-item__text">#{id}</p>
                    </div>
                    <div className="orders-item__field">
                        <h2 className="orders-item__heading">Сумма замовлення</h2>
                        <p className="orders-item__text">{summary} грн</p>
                    </div>
                    <button className='orders-item__accordion-btn' onClick={openOrder}>
                        <img 
                            className={orderOpen ? 'orders-item__arrow orders-item__arrow--active' : 'orders-item__arrow'}
                            src='img/accordion-arrow.png' 
                            alt='open-order' 
                        />
                    </button>
                </div>
            </div>
            <div className='orders-item__bottom'>
                <p className='orders-item__text'>Адреса: {address}</p>
                <div className='orders-item__imgs'>
                    {products.map(item => {
                        return <img key={item.id} className='orders-item__preview-img' src={item.imgUrl} alt={item.title} />
                    })}
                </div>
            </div>
            <div className={orderOpen ? 'orders-item__content orders-item__content--active' : 'orders-item__content'}>
                <div className='orders-item__products'>
                    {products.map(item => {
                        return (
                            <div className='orders-item__content-product' key={item.id}>
                                <div className='orders-item__content-left'>
                                    <img src={item.imgUrl} alt={item.title} />
                                    <h3 className='orders-item__title'>{item.title}</h3>
                                </div>
                                <div className='orders-item__content-right'>
                                    <div className='orders-item__count'>{item.counter} товар</div>
                                    <span className='orders-item__price'>{item.price} грн</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <span onClick={repeatOrder} className='orders-item__repeat-order'>Повторити замовлення</span>
            </div>
        </div>
    )
}

export default OrderItem;