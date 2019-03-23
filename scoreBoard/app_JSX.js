
const id = 'main-title';
const title1 = 'This is a title';
const childTitle = 'My First React Element';

const title = (
  <h1 id={id} title={title1}>{childTitle}</h1>
);

const desc = (
  <p className="main-desc">This is a <strong>Description</strong></p>
);

const header = (
  <header>
    {title}
    {desc}
  </header>
);

console.log(title);

ReactDOM.render(header, document.getElementById('root'));