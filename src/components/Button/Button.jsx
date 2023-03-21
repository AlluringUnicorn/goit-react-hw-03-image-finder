import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const baseUrl = 'https://pixabay.com/api';
const apiKey = '33430670-3151596af5f0d850f5d459d27';

export class Button extends Component {
  state = {
    page: 1,
    isLoading: false,
  };
    
  componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            this.setState({ page: 1 });
        }
    }

  loadMore = () => {
    this.setState({ isLoading: true });

    fetch(
      `${baseUrl}/?q=${this.props.searchQuery}&page=${this.state.page + 1
      }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(images => {
        this.props.onLoadMore(images.hits);
      }).finally(() => this.setState({ isLoading: false }));

    this.setState((prevState, props) => ({
      page: prevState.page + 1,
    }));
  };

  render() {

    if (this.state.isLoading) {
      return <Loader />;
    } else return (
      <button className={css.Button} onClick={this.loadMore}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
}
