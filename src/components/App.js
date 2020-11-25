import React from 'react';
import classes from './app.module.css';
import Header from './header/header';
import Aboutme from './aboutme/aboutme';

function App (){
  return(
    <div className={classes.wrapper}>
     <Header />
     <Aboutme />
    </div>
  )
}

export default App;
