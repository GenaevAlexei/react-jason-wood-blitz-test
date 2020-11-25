import React from 'react';
import classes from './aboutme.module.css';
import jasonwood from './jasonwood.jpg';
import jasonwoodTablet from './jasonwoodTablet.jpg';
import jasonwoodDesktop from './jasonwoodDesktop.jpg';

function Aboutme (){
  return(
    <section className={classes.main}>
      <a name="aboutme"></a>
      <div className={classes.bottomMenu}>
        <ul className={classes.menu_list__bottom}>
          <li className={classes.menu_item}>
            <a href="#"> Home </a>
          </li>
          <li className={classes.menu_item}>
            <a href="#aboutme_text"> About me </a>
          </li>
          <li className={classes.menu_item}>
            <a href="#">Portfolio</a>
          </li>
          <li className={classes.menu_item}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={classes.about}>
        <div className={classes.picture_wrap}>
          <picture>
            <source media="(min-width: 768px) and (max-width: 1591px)"
                    srcSet={jasonwoodTablet}>
            </source>
            <source media="(min-width: 1592px)"
                    srcSet={jasonwoodDesktop}>
            </source>
            <img  src={jasonwood} alt=""></img>
          </picture>
        </div>
        <div className={classes.wrapper}>
          <a name="aboutme_text"></a>
          <h2 className={classes.title}>About me</h2>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Quam laboriosam tempore asperiores natus, neque repellat
              excepturi consequuntur, et dolorum odit deleniti voluptatem
              aliquam adipisci enim. Corporis.
          </p>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Quam laboriosam tempore asperiores natus.
          </p>
          <p className={classes.signature}>
            Jason Wood
          </p>
        </div>
      </div>
      <div className={classes.scroll_wrapper}>
        <p className={classes.scroll_text}>
          keep scrolling, there is still more to come.
        </p>
        <ul className={classes.arrows}>
          <li className={classes.arrow_item}></li>
          <li className={classes.arrow_item}></li>
        </ul>
      </div>
    </section>
  )
}

export default Aboutme;
