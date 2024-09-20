import React from "react";
import classes from "./Testimonies.module.css";
import Adesina from "../../Assets/Adesina.png";

const Testimonies = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h2>TESTIMONIES</h2>
        <div className={classes.testimonySlide}>
          <p>
            "Before coming to NIIT, I had only Microsoft Office and Graphic
            design skills. But after spending 12 months in NIIT, I have achieved
            a lot. With great joy, now I can proudly say I have acquired Java
            Programming and Web Development Skills."
          </p>
          <div className={classes.clientWrap}>
            <div className={classes.clientImage}>
              <img src={Adesina} alt="Adesina" />
            </div>
            <div className={classes.clientText}>
              <h5>Adesina Oluwayanmife Justified</h5>
              <p>SOFTWARE ENGINEER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
