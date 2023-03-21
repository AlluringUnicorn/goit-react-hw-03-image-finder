import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: null,
  };

  onFormSubmit = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}
