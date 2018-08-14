import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// styled
import Container from './styled/Container';
import Exit from './styled/Exit';

// icons
import cross from '../../assets/icons/cross.svg';

class Modal extends PureComponent {
  render() {
    return (
       <Container>
          <Exit onClick={this.props.onClose}>
            <img src={cross} alt='cancel icon'/>
          </Exit>
         {
           this.props.children
         }
       </Container>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
