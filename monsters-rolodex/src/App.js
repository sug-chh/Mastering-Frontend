import React, { Component } from "react";
import { monsters } from "./monsters";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    this.setState({ monsters: monsters });
  }

  render() {
    const onInputChange = (event) => {
      this.setState({ searchField: event.target.value });
    };
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
        <SearchBox
          onInputChange={onInputChange}
          placeholder={`search monsters`}
        />
        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
