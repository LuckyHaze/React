
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
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const players = [
  {name: 'khj1', score: 30},
  {name: 'khj2', score: 40},
  {name: 'khj3', score: 50},
  {name: 'khj4', score: 60},
];

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={props.initialPlayers.length} />

      {/*Players List*/}
      { props.initialPlayers.map(item => <Player name={item.name} score={item.score} />) }
    </div>
  );
}

ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root'));
