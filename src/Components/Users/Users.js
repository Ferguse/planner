import React, {Component} from 'react';
import './Users.css';
import User from '../User/User';
import Modal from '../Modal/Modal';
import ModalUsers from '../Modal/ModalUsers'
import {userSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Неизвестный пользователь',
      inputColorValue: '',
      isOpen: false
    };
  }

  onClose = () => {
    if (this.state.inputValue) {
      this.props.onAddUser({
        id: new Date().getTime(),
        name: this.state.inputValue,
        color: this.state.inputColorValue
      })
    }
    this.toggleModal()
  }

  toggleModal = () => {
    this.setState({
      inputValue: '',
      isOpen: !this.state.isOpen
    });
  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  updateColorValue = e => {
    this.setState({
      inputColorValue: e.target.value
    });
  }

  render() {
    console.log(this.props.users);
    return (
      <section className="main">
        <div className="main__content">
          {
            this.props.users.map(item => {
              return <User key={item.get('id')} user={item}/>
            })
          }
        </div>
        <div className="add">
          <button className="add__btn" onClick={this.toggleModal}>
            Новый участник
          </button>

          <Modal show={this.state.isOpen}
                 toggleModal={this.toggleModal}
                 onClose={this.onClose}>
            <ModalUsers updateInputValue={this.updateInputValue}
                        inputValue={this.state.inputValue}
                        inputColorValue={this.state.inputColorValue}
                        updateColorValue={this.updateColorValue}/>

          </Modal>
        </div>
      </section>
    );
  }
}

const selector = createSelector(
  userSelector,
  (users) => ({
    users
  })
);
export default connect(selector)(Users);
