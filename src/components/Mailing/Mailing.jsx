import './Maililng.scss';
import { useState, useEffect } from 'react';

function Mailing() {
    const [mail, setMail] = useState('');
    const [mailDirty, setMailDirty] = useState(false);
    const [mailError, setMailError] = useState('E-mail не може бути пустим')
    const [modalOpen, setModalOpen] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [formDone, setFormDone] = useState(false);

    function openModal(e) {
        e.preventDefault();
        setModalOpen(true);
        setFormDone(true);
        setTimeout( () => setModalOpen(false), 1500);
    }

    function emailHandler(e) {
        setMail(e.target.value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!re.test(e.target.value)) {
            setMailError('Некоректна адреса');
        } else {
            setMailError('');
        }
    }

    function blurHandle(e) {
        if(e.target.name === 'mail') {
            setMailDirty(true);
        }
    }

    useEffect(() => {
        if(mailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [mailError])

    return (
        <div className='mailing'>
            <div className="mailing__content">
                <h2 className='mailing__title'>Любиш піцу або суші?</h2>
                <h2 className='mailing__title mailing__title--primary'>Вигідні пропозиції?</h2>
                <p className='mailing__text'>Будь першим, хто дізнається про наші новинки та спеціальні пропозиції</p>
            </div>
            <form className='mailing__form'>
                {formDone ? (
                    <h3>Ви вже підписались на новини</h3>
                ) : (
                    <>
                        {(mailDirty && mailError) && <div style={{color: 'red', marginBottom: '10px'}}>{mailError}</div>}
                    <input 
                        name='mail'
                        className={ mailError.length > 0 ? 'mailing__input mailing__input--error' : 'mailing__input' }
                        value={mail} 
                        placeholder='e-mail' 
                        onChange={(e) => emailHandler(e)} 
                        onBlur={e => blurHandle(e)}
                    />
                    <button 
                        className={ formValid ? 'mailing__btn' : 'mailing__btn mailing__btn--disabled' } 
                        type='submit' 
                        onClick={openModal} 
                        disabled={!formValid}
                    >
                        Підписатись
                    </button>
                    </>
                )}
               
            </form>
            <div className={modalOpen ? 'mailing__modal mailing__modal--active' : 'mailing__modal'}>
                <div className='mailing__top'>
                    <p className='mailing__message'>Ваша почта: <span>{mail}</span> <br /> зареєстрована для розсилки</p>
                </div>
            </div>
        </div>
    )
}

export default Mailing;