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

    function getRemainder() {
        const remain = products.length - 5;
        if(remain === 1) {
            return 'Товар'
        } else if(remain <= 4) {
            return 'Товари' 
        } else if(remain <= 20) {
            return 'Товарів'
        } else if(+String(remain).split(''[1] === 1)) {
            return 'Товар'
        } else if(+String(remain).split('')[1] <= 4) {
            return 'Товари'
        } else {
            return 'Товарів'
        }
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
                        <p className="orders-item__text orders-item__text--summ">{summary} грн</p>
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
                <div className='orders-item__preview'>
                    <div className='orders-item__imgs'>
                        {products
                        .filter((item, index) => index < 5)
                        .map((item) => {
                            return <img key={item.id} className='orders-item__preview-img' src={item.imgUrl} alt={item.title} />
                        })}
                    </div>
                    {products.length > 5 && <span className='orders-item__remainder'>Та ще {products.length - 5} {getRemainder()}</span>}
                </div>
            </div>
            <div className={orderOpen ? 'orders-item__content orders-item__content--active' : 'orders-item__content'}>
                <div className='orders-item__products'>
                    {products.map(item => {
                        return (
                            <div className='orders-item__content-product' key={item.id}>
                                <div className='orders-item__content-left'>
                                    <img src={item.imgUrl} alt={item.title} />
                                    <div className='orders-item__info'>
                                        <h3 className='orders-item__title'>{item.title}</h3>
                                        {item.activeSize && <p className='orders-item__size'>{item.activeSize} см</p>}
                                        {item.type && <p className='orders-item__size'>{item.type}</p>}
                                    </div>
                                </div>
                                <div className='orders-item__content-right'>
                                    <div className='orders-item__count'>{item.counter}</div>
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