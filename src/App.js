import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  searching = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const monsters = await res.json();
    this.setState({
      monsters,
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (filterdMosters.length === 0) {
      return (
        <div className="App">
          <h1>Monsters RolodBox</h1>
          <SearchBox placeholder="search monsters" searching={this.searching} />
          <h3 className="white-text">Sorry, not eixist...</h3>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Monsters RolodBox</h1>
        <SearchBox placeholder="search monsters" searching={this.searching} />
        <CardList monsters={filterdMosters} />
      </div>
    );
  }
}
