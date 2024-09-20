import React from "react";
import classes from "./Courses.module.css";
import Python from "../../Assets/Python.png";
import Digital from "../../Assets/Digital.png";
import Web from "../../Assets/Web.png"

const Courses = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.topCourses}>
          <h3>POPULAR PROGRAMMES</h3>
          <p>Elevate your skills with our most in-demand programmes</p>
          <div className={classes.lines}>
            <hr />
          </div>
          <div className={classes.btn}>
            <button>SHORT TERM COURSE</button>
            <button>LONG TERM COURSE</button>
          </div>
        </div>
        <div className={classes.cards}>
            <div className={classes.card}>
                <div className={classes.cardImage}>
                    <img src={Python} alt="Learn python programming" />
                </div>
                <div className={classes.cardText}>
                    {/* <p>PYTHON PROGRAMMING</p> */}
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImage}>
                    <img src={Digital} alt="Learn digital marketing" />
                </div>
                <div className={classes.cardText}>
                    {/* <p>DIGITAL MARKETING</p> */}
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.cardImage}>
                    <img src={Web} alt="Learn web design" />
                </div>
                <div className={classes.cardText}>
                    {/* <p>WEB DESIGN</p> */}
                </div>
            </div>
        </div>
        <div className={classes.button}>
           <button>EXPLORE MORE</button>
        </div>  
      </div>
    </div>
  );
};

export default Courses;
