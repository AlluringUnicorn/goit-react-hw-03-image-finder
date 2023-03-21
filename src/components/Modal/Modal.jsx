import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onEscPress);
  }

  render() {
    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onEscPress: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}
