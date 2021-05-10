import React from 'react';
import './css/App.css';
import Header from './header';
import Upload from './upload';
import Footer from './footer';
import Componet from './componet';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Upload/>
      <Componet/>
      <Footer/>
    </div>
  );
}

export default App;
