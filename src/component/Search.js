import React from "react";

export default class Search extends React.Component {
  state = {
    search: "Muhammad",
    type: 'all',
  }

  handleKey = (e) => {
    if(e.key === "Enter") {
      this.props.searchMovie(this.state.search)
    }
  }

  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovie(this.state.search, this.state.type)
    })
  }


  render() {
    return(
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
              id="email_inline" 
              placeholder="Search" 
              type="search" 
              className="validate" 
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
            />
            <button 
              className="btn search__btn" 
              onClick={() => this.props.SearchMovie(this.state.search, this.state.type)}>
                Search Movies
              </button>
          </div>
          <div>
            <label>
              <input 
                checked={this.state.type === 'all'} 
                onChange={this.handleFilter} 
                className="with-gap" 
                data-type="all" 
                type="radio" 
                name="type" 
              />
              <span>All</span>
            </label>
            <label>
              <input 
                checked={this.state.type === 'movie'} 
                onChange={this.handleFilter} 
                className="with-gap" 
                data-type="movie" 
                type="radio" 
                name="type" 
              />
              <span>Movies only</span>
            </label>
            <label>
              <input 
                checked={this.state.type === 'series'} 
                onChange={this.handleFilter} 
                className="with-gap" 
                data-type="series" 
                type="radio" 
                name="type" 
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}