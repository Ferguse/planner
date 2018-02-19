import React from 'react';
import './Modal.css';
import {userSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

const Modal_projects = props => (
  <div className="modal__form">
    <div className="modal__row">
      <div className="modal__left">
        <label htmlFor="title">Название проекта</label>
      </div>
      <div className="modal__right">
        <input id="title" type="text" onChange={props.updateInputValue} value={props.inputValue}/>
      </div>
    </div>
    <div className="modal__row">
      <div className="modal__left">
        <label htmlFor="users">Выберите сотрудника</label>
      </div>
      <div className="modal__right">
        <select id="users" name="users" value={props.userSelectValue}
                onChange={props.userChange}>
          {
            this.props.users.map((item, i) => (
              <option key={item + i} value={item.name}> {item.name} </option>
            ))
          }
        </select>
      </div>
    </div>
    <div className="modal__row">
      <div className="modal__left">
        <label htmlFor="percent">Установите нагрузку в %</label>
      </div>
      <div className="modal__right">
        <input id="percent" type="number" min="0" max="100" onChange={props.updateInputNumValue}
               value={props.inputNumValue}/>
      </div>
    </div>
    <div className="modal__row">
      <div className="modal__left">
        <label htmlFor="date">Выберите неделю</label>
      </div>
      <div className="modal__right">
        <select id="users" name="users" value={props.weeksValue}
                onChange={props.handleWeeksSelect}>
          {
            props.arrWeeks.map((item, i) => (
              <option key={item.title + i} value={item.value}> {item.title} </option>
            ))
          }
        </select>
      </div>
    </div>
  </div>
)

const selector = createSelector(
  userSelector,
  (users) => ({
    users
  })
);
export default connect(selector)(Modal_projects);
