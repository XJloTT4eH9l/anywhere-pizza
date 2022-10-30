import './Notification.scss';

function Notification({ title, deskr, imgSrc, children }) {

    return (
        <div className='notification'>
            <img className='notification__img' src={imgSrc} alt={title}/>
            <h3 className='notification__title'>{title}</h3>
            <p className='notification__deskr'>{deskr}</p>
            { children }
        </div>
    )  
}

export default Notification;