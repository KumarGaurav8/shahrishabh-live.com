import React, { PureComponent } from 'react';
import './App.css';
import Pokemon from './Pokemon';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pokemons: [], start: 0 };
    this.API = 'http://pokeapi.co/api/v2/pokemon/';
    this.size = 3;
  }
  componentDidMount() {
    fetch(this.API)
      .then(res => res.json())
      .then(data => {
        this.setState({ pokemons: data.results });
      })
      .catch(err => console.log(err));

  }
  createUserNode = () => {
    const userNodeList = this.state.pokemons.slice(this.state.start, this.state.start + this.size).map((pokemon) =>
      <Pokemon url={pokemon.url} key={pokemon.name} />
    );
    return userNodeList;
  }
  onPrevClick = () => {
    this.setState(prevSate => ({ start: (prevSate.start - this.size < 0 ? 0 : prevSate.start - this.size) }));
  }
  onNextClick = () => {
    const len = this.state.pokemons.length;
    this.setState(prevSate => ({ start: (prevSate.start + this.size + 1 > len ? prevSate.start : prevSate.start + this.size) }));
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <div className="container">{this.createUserNode()}</div>
        <div className="nav">
          <div className="btn" onClick={this.onPrevClick}>PREV</div>
          <div className="btn" onClick={this.onNextClick}>NEXT</div>
        </div>
      </div>
    );
  }
}
export default App;
