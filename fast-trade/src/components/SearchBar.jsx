import React from 'react';
import '../styles/SearchBar.css';
import Browse from "../icons/icons8-pesquisar-escuro.png"

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  handleClearClick = () => {
    this.setState({
      searchTerm: '',
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can add your search logic here, such as making an API request.
    // For now, let's just log the search term.
    console.log('Search term:', this.state.searchTerm);
  };

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          className="search-input"
        />
        {this.state.searchTerm && ( // Show the 'x' button only when there's text in the input field
          <button type="button" className="clear-button" onClick={this.handleClearClick}>
            X
          </button>
        )}
        <button type="submit" className="search-button">
          <img src={Browse} alt="Buscar" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
