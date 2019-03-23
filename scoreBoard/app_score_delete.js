
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  )
}

const Player = (props) => {
  console.log(props);
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    console.log(this);
    this.setState(
      {score: this.state.score + 1}
    );
  }

  decrementScore = () => {
    this.setState(
      {score: this.state.score - 1}
    );
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {name: '111', id: 1},
      {name: '222', id: 2},
      {name: '333', id: 3},
      {name: '444', id: 4},
      {name: '555', id: 5},
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  render() {


    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name}
                                                 key={item.id.toString()} removePlayer={this.handleRemovePlayer}
                                                 id={item.id} />)
        }
      </div>
    );

  }
}


ReactDOM.render(<App />, document.getElementById('root'))
