import { Component } from "react";
import InputSearch from "./components/InputSearch.jsx";
import SelectType from "./components/SelectType";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedType: "Movie",
      movieToSearch: ""
    };
  }

  componentDidMount() {
    this.callApi();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.movieToSearch) !==
      JSON.stringify(
        this.state.movieToSearch ||
          this.state.selectedType !== prevState.selectedType
      )
    ) {
      this.callApi();
    }
  }

  callApi = async () => {
    console.log("im calling API");
    const { movieToSearch, selectedType } = this.state;
    const APIKEY = `https://www.omdbapi.com/?s=${movieToSearch}&type=${selectedType}&apikey=13120929`;
    try {
      const req = await fetch(APIKEY);
      const data = await req.json();
      if (data.Search) {
        this.setState({ movies: data.Search });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  getInputValue = (movie) => {
    this.setState({ movieToSearch: movie });
  };

  getSelectType = (selectType) => {
    this.setState({ selectedType: selectType });
  };

  addToFavorites = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div>
        <header>
          <h1>Movies</h1>
          <InputSearch getMovie={this.getInputValue} />
          <SelectType getType={this.getSelectType} />
          <div className="row">
            <Movies
              listOfMovies={this.state.movies}
              addFavorite={this.addToFavorites}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
