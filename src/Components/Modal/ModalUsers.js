import React from 'react';
import './Modal.css';

const Modal_form = props => (
    <div className="modal__form">
        <div className="modal__row">
            <div className="modal__left">
                <label htmlFor="title">Имя пользователя</label>
            </div>
            <div className="modal__right">
                <input id="title" type="text" onChange={props.updateInputValue} value={props.inputValue}/>
            </div>
        </div>
        <div className="modal__row">
            <div className="modal__left">
                <label htmlFor="percent">Напишите цвет</label>
            </div>
            <div className="modal__right">
                <input id="percent" type="text" placeholder="Например green" onChange={props.updateColorValue} value={props.inputColorValue}/>
            </div>
        </div>
    </div>
)

export default Modal_form;
