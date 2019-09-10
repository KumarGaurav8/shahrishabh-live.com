import React, { PureComponent } from 'react';
import './Pokemon.css';


class Pokemon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { pokemon: {} };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ pokemon: data });
      })
      .catch(err => console.log(err));

  }
  render() {
    const { pokemon } = this.state;
    return (
      <div className="Pokemon">
        <div className="header">
          <div className="name">{pokemon.name}</div>
          <div className="id">{`ID: ${pokemon.id}`}</div>
        </div>
        {
          pokemon.sprites && (
            <div className="image" style={{ backgroundImage: "url(" + pokemon.sprites.front_default + ")" }} />
          )
        }
      </div>
    );
  }
}
export default Pokemon;
