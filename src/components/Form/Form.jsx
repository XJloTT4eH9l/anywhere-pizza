import './Form.scss';
import { useState, useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

function Form() {
    const { getCartSummary, cartItems, setCartItems, setOrders, ordersId, setOrdersId, setOrderDone } = useContext(AnywherePizzaContext);

    const [delivery, setDelivery] = useState('Доставка');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState ('');

    const deliveryOptions = [
        {name: 'delivery', title: 'Доставка'},
        {name: 'pickup', title: 'Самовивіз'}
    ];

    function onClickOrder(e) {
        e.preventDefault();
        const order = {
            id: ordersId,
            name: name,
            tel: tel,
            addres: delivery === 'Доставка' ? street + ' ' + house : 'Самовивіз',
            email: email,
            summary: getCartSummary(),
            products: cartItems
        }
        setOrders(prev => [...prev, order]);
        setOrderDone(true);
        setOrdersId(ordersId + 1);
        setCartItems([]);
        setName('');
        setTel('');
        setEmail('');
        setStreet('');
        setHouse('');
    }

    return(
        <form className="form">
            <h2 className="form__heading">О вас</h2>
            <div className="form__block">
                <div className="form__item">
                    <label className="form__title" htmlFor="name">І'мя</label>
                    <input 
                        className="form__input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name" 
                        placeholder="І'мя" 
                        type="text"
                        required 
                    />
                </div>
                <div className="form__item">
                    <label className="form__title" htmlFor="phone">Телефон</label>
                    <input 
                        className="form__input"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        id="phone" 
                        placeholder="Телефон" 
                        type="number" 
                        required 
                    />
                </div>
                <div className="form__item">
                    <label className="form__title" htmlFor="mail">Пошта</label>
                    <input 
                        className="form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        id="mail" 
                        placeholder="Пошта" 
                        type="email" 
                        required 
                    />
                </div>
            </div>
            <div className='form__delivery'>
                <h2 className='form__heading'>{delivery}</h2>
                <div className='form__btns'>
                    {
                        deliveryOptions.map(item => {
                            const isActive = delivery === item.title;
                            return (
                                <button
                                    key={item.name}
                                    type='button' 
                                    className={isActive ? 'form__btn form__btn--active' : 'form__btn'}
                                    onClick={() => setDelivery(item.title)}
                                    >
                                    {item.title}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            {delivery === 'Доставка' ? (
                <div>
                    <div className='form__block'>
                        <div className='form__item'>
                            <label className="form__title" htmlFor="street">Адреса</label>
                            <input 
                            className="form__input"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)} 
                            id="street" 
                            placeholder="Вулиця" 
                            type="text" 
                            required 
                            />
                        </div>
                        <div className='form__item'>
                            <label className="form__title" htmlFor="house">Будинок</label>
                            <input 
                            className="form__input"
                            value={house}
                            onChange={(e) => setHouse(e.target.value)}
                            id="house" 
                            placeholder="Будинок" 
                            type="text" 
                            required 
                            />
                        </div>
                    </div>
                </div>
                ) : (
                <p className='form__info'>
                    Ваше замовлення можна буде забрати з нашого ресторану за адресою: 
                     <a href='https://www.google.com.ua/maps/place/ул.+Крещатик,+46А,+Киев,+02000/@50.443685,30.519284,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce561b389aa7:0x8b2c76f7b3d36bb0!8m2!3d50.443685!4d30.519284?hl=ru' className='form__link' target='blank'>Київ, вул.Хрещатик, 46а</a>
                </p>
            )}
            <div className='form__flex'>
                <span className='form__summary'>Разом: {getCartSummary()} грн</span>
                <button onClick={onClickOrder} className='btn' type='submit'>Оформити замовлення</button>
            </div>
        </form>
    )
}

export default Form;