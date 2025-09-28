import React from "react";
import GifList from "./components/GifList";
import { GifSearch } from "./components/GifSearch";

const API_KEY = "AIzaSyBl7QyO5yfYpV9_AyrU5kTd02Az4UwiSCg";

const BASE_URL = "https://tenor.googleapis.com/v2/";

class App extends React.Component {
  state = {
    apiData: [],
    searchRequest: "sad",
  };

  getInfoFromApi = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}search?q=${this.state.searchRequest}&limit=10&key=${API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  searchRequest = (e) => {
    e.preventDefault();
    const text = (e.currentTarget.elements[0]?.value || "").trim();
    if (text === "") {
      console.log("Search input is empty");
      return;
    }
    this.setState({ searchRequest: text });
    e.currentTarget.reset();
  };
  async componentDidMount() {
    const data = await this.getInfoFromApi();
    this.setState({ apiData: data && data.results ? data.results : [] });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchRequest !== this.state.searchRequest) {
      console.log("search request changed!");
      const data = await this.getInfoFromApi();
      this.setState({ apiData: data && data.results ? data.results : [] });
    }
  }

  render() {
    console.log(this.state.searchRequest);
    return (
      <>
        <GifSearch submit={this.searchRequest} />
        <GifList api={this.state.apiData} />
      </>
    );
  }
}

export default App;
