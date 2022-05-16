import React from "react";
import Movies from "../component/Movies";
import Loader from "../component/Loader";
import Search from "../component/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=3e647cf6&s=Muhammad")
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovie = (str , type = 'all') => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=3e647cf6&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    return(
      <div className="container content" >
        <Search searchMovie={this.searchMovie} />
        {this.state.loading ? <h3><Loader /></h3>: (<Movies movies={this.state.movies} />) }
      </div>
    )
  }
}