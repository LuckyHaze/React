
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  )
}
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        khj
      </span>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
    </div>
  );
}
const App_score = () => {
  return (
    <div className="scoreboard">
      <Header title="My scoreboard" totalPlayers={2 + 10} />

      <Player />
    </div>
  );
}

ReactDOM.render(<App_score/>, document.getElementById('root'));

/*
const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Playrs:1</span>
    </header>
  );
}

ReactDOM.render(<Header/>, document.getElementById('root'));
*/

/*
function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Playrs:1</span>
    </header>
  );
}

ReactDOM.render(<Header/>, document.getElementById('root'));
*/