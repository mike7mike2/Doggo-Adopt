import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;