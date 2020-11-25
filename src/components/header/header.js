import React, { useState } from 'react';
import classes from './header.module.css';

function Header (){
  const [current, setCurrent] = useState(
    {
      menuClass: classes.menu_hidden,
    }
  );

  function handlerMenu(){
    if(current.menuClass === classes.menu_hidden){
      setCurrent({menuClass: classes.menu_show,});
    }else{
      setCurrent({menuClass: classes.menu_hidden,});
    }
  };

  return (
    <section className={classes.header}>
      <div className={classes.menu}>
        <span className={classes.menu_title}
              onClick={handlerMenu}>
          menu
        </span>
        <ul className={`${classes.menu_list} ${current.menuClass}`}>
          <li className={classes.menu_item}>
            <a href="#"> Home </a>
          </li>
          <li className={classes.menu_item}>
            <a href="#aboutme"> About me </a>
          </li>
          <li className={classes.menu_item}>
            <a href="#">Portfolio</a>
          </li>
          <li className={classes.menu_item}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={classes.scroll_wrapper}>
        <p className={classes.scroll_text}>
          Scroll down to see more
        </p>
        <a href="#aboutme">
          <ul className={classes.arrows}>
            <li className={classes.arrow_item}></li>
            <li className={classes.arrow_item}></li>
          </ul>
        </a>
      </div>
    </section>
  )
}

export default Header;
