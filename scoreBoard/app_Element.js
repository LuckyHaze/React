const title = React.createElement(
  'h1',
  {id: 'main-title', title: 'This is a title'},
  'My First React Element'
);

console.log(title);
console.log('test');

const desc = React.createElement(
  'p',
  null,
  'This is a ', React.createElement('strong', null, "Descpiption")
);

const header = React.createElement(
  'header',
  null,
  title, desc
);

ReactDOM.render(header, document.getElementById('root'));