import './Form.scss';
import { useState, useContext, useEffect } from 'react';
import { AnywherePizzaContext } from '../../context';

function Form() {
    const { getCartSummary, cartItems, setCartItems, setOrders, ordersId, setOrdersId, setOrderDone } = useContext(AnywherePizzaContext);

    const [delivery, setDelivery] = useState('Доставка');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const [street, setStreet] = useState('');
    const [streetError, setStreetError] = useState('Поле "Вулиця" не може бути пустим');
    const [streetDirty, setStreetDirty] = useState(false);
    const [house, setHouse] = useState ('');
    const [houseError, setHouseError] = useState('Поле "Будинок" не може бути пустим');
    const [houseDirty, setHouseDirty] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(delivery === 'Самовивіз') {
            setFormValid(true)
        } else if(delivery === 'Доставка') {
            if(streetError || houseError) {
                setFormValid(false);
            }  else {
                setFormValid(true);
            }
        }
    }, [streetError, houseError, delivery])

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
            address: delivery === 'Доставка' ? street + ' ' + house : 'Самовивіз',
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
        window.scrollTo(0, 0)
    }

    function streetHandler(e) {
        setStreet(e.target.value);
        if(e.target.name === 'street') {
            if(e.target.value.length > 20) {
                setStreetError('Максимальна кількість символів - 20');
            } else if(e.target.value.length === 0) {
                setStreetError('Поле "Вулиця" не може бути пустим')
            } else {
                setStreetError('');
            }
        }
    }

    function houseHandler(e) {
        setHouse(e.target.value);
        if (e.target.name === 'house') {
            if(e.target.value > 1000) {
                setHouseError('Некоректний номер будинку')
            }else if(e.target.value.length === 0) {
                setHouseError('Поле "Будинок" не можу бути пустим')
            } else {
                setHouseError('');
            }
        }
    }

    function blurHandler(e) {
        if(e.target.name === 'street') {
            setStreetDirty(true);
        } else if (e.target.name === 'house') {
            setHouseDirty(true);
        }
    }

    return(
        <form className="form">
            <h2 className="form__heading">Про вас</h2>
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
                            <label className="form__title" htmlFor="street">
                                {(streetDirty && streetError) ? <span style={{color: 'red', marginBottom: '10px'}}>{streetError}</span> : 'Вулиця*'}
                            </label>
                            <input 
                            className={ streetError.length > 0 ? "form__input form__input--error" : 'form__input' }
                            name='street'
                            value={street}
                            onChange={(e) => streetHandler(e)} 
                            onBlur={(e) => blurHandler(e)}
                            id="street" 
                            placeholder="Вулиця" 
                            type="text" 
                            required 
                            />
                        </div>
                        <div className='form__item'>
                            <label className="form__title" htmlFor="house">
                                {(houseDirty && houseError) ? <span style={{color: 'red', marginBottom: '10px'}}>{houseError}</span> : 'Будинок*'}
                            </label>
                            <input 
                            className={ houseError.length > 0 ? "form__input form__input--error" : 'form__input' }
                            name='house'
                            value={house}
                            onChange={(e) => houseHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                            id="house" 
                            placeholder="Будинок" 
                            type="number" 
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
                <button 
                    onClick={onClickOrder} 
                    className={ formValid ? 'btn' : 'btn form__btn--disabled' }
                    disabled = {!formValid}
                    type='submit'
                >
                    Оформити замовлення
                </button>
            </div>
        </form>
    )
}

export default Form;