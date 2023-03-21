import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  preventLoad = event => {
    event.preventDefault();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form
          className={css.SearchForm}
          onSubmit={event => {
            event.preventDefault();
            this.props.onSubmit(this.state.value);
            this.setState({ value: '' });
          }}
        >
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
