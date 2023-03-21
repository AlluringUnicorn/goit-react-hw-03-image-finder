import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}));
  }

  onEscPress = (event) => {
    if (event.code === 'Escape') {
      this.setState({ showModal: false });
    }
  }

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={css.ImageGalleryItem_image}
        />
        {showModal && (
          <Modal onClick={this.toggleModal} onEscPress={this.onEscPress}>
            <img src={image.largeImageURL} alt={image.tags} width="800px" />
          </Modal>
        )}
      </li>
    );
  }
}
