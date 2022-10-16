import './Notification.scss';
import { useContext } from "react";
import { AnywherePizzaContext } from "../../context";

function Notification({ title, deskr, imgSrc }) {
    const { setIsCartOpen } = useContext(AnywherePizzaContext);

    function closeCart() {
        setIsCartOpen(false);
    }
    return (
        <div className='notification'>
            <img className='notification__img' src={imgSrc} alt='asd'/>
            <h3 className='notification__title'>{title}</h3>
            <p className='notification__deskr'>{deskr}</p>
            <button className='notification__btn' onClick={closeCart}>Повернутись до каталогу</button>
        </div>
    )  
}

export default Notification;