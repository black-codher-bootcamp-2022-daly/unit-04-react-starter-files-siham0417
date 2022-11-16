import logo from './logo.svg';
import './App.css';

function Header(props) {
const { name, color, fruit, className} = props;

  return (
  <h1 className={className} > 
    {name} is {color} like a {fruit}
  </h1>
  );
}

function Footer({nickname}) {
  return (
  <div>
    <h1>goodbye {nickname}</h1>
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header ClassName="header-highlight" name="Seham" color="blue" fruit="blueberry" />
      <Header name="Tay" color="orange" fruit="orange" />
      <Header name="Miah" color="red" fruit="apple" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer nickname="Jimmy" />
    </div>
  );
}

export default App;
