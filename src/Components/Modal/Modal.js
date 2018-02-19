import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
    render() {

        if(!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="modal">
                    <div className="modal__close" onClick={this.props.toggleModal}>
                        X
                    </div>
                    {this.props.children}
                    <div className="modal__footer">
                        <button className="modal__btn" onClick={this.props.onClose}>
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;
