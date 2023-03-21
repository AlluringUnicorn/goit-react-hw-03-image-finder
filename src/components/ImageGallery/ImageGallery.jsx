import { Button } from 'components/Button/Button';
import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

import css from './ImageGallery.module.css';

const baseUrl = 'https://pixabay.com/api';
const apiKey = '33430670-3151596af5f0d850f5d459d27';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {

      this.setState({ isLoading: true });

      fetch(
        `${baseUrl}/?q=${this.props.searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => {
          this.setState({ images: images.hits });
        }).finally(()=> this.setState({isLoading: false}));
    }
  }

  onLoadMore = loadMoreImages => {
    this.setState((prevState, props) => ({
      images: [...prevState.images, ...loadMoreImages],
    }));
  };

  render() {
    const { images } = this.state;

    if (this.state.isLoading) {
      return <Loader />;
    } else
      return (
        <>
          <ul className={css.ImageGallery}>
            {images &&
              images.map(image => (
                <ImageGalleryItem image={image} key={image.id} />
              ))}
          </ul>
          {images && (
            <Button
              searchQuery={this.props.searchQuery}
              onLoadMore={this.onLoadMore}
            />
          )}
        </>
      );
  }
}
