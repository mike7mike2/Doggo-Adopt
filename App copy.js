import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Header from './Header';

function App() {
  const asdf = "blah"
  console.log(asdf)
  
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

class App {
  constructor(props) {
    super(props)
  }

  asdf = "blah"
  render() {
    console.log(this.asdf)
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

console.log(new ().asdf)
export default App;