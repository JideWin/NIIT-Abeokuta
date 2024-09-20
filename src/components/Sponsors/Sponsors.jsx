import React from "react";
import classes from "./Sponsors.module.css";
import country from "../../Assets/country.png";
import learners from "../../Assets/learners.png";
import schools from "../../Assets/schools.png";
import faculty from "../../Assets/faculty.png";
import certification from "../../Assets/certification.png";
import teeside from "../../Assets/teeside.png";
import HDFC from "../../Assets/HDFC.png"
import Finoculus from "../../Assets/Finoculus.png"
import sentienz from "../../Assets/sentienz.png"
import HDB from "../../Assets/HDB.png"
import ITSS from "../../Assets/IT-Solution-Services.png"
import NSG from "../../Assets/Neptune-Software-Group.png"

const Sponsors = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sponsor}>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={country} alt="icon" />
          </div>
          <div className={classes.iconText}>
            <h5>PRESENT IN 40 COUNTRIES WORLDWIDE</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={learners} alt="" />
          </div>
          <div className={classes.iconText}>
            <h5>IMPACTED OVER 35 MILLION LEARNERS</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={schools} alt="" />
          </div>
          <div className={classes.iconText}>
            <h5>IMPACTED 17,000 SCHOOLS WORLDWIDE</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={faculty} alt="" />
          </div>
          <div className={classes.iconText}>
            <h5>EXPERIENCED FACULTY</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={certification} alt="" />
          </div>
          <div className={classes.iconText}>
            <h5>INTERNATIONAL CERTIFICATION MAPPED COURSES</h5>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconImage}>
            <img src={teeside} alt="" />
          </div>
          <div className={classes.iconText}>
            <h5>TIE-UP WITH TEESIDE UNIVERSITY</h5>
          </div>
        </div>
      </div>
      <div className={classes.sponsor1}>
        <div className={classes.iconImage}>
          <img src={HDFC} alt="" />
        </div>
        <div className={classes.iconImage}>
          <img src={Finoculus} alt="" />
        </div>
        <div className={classes.iconImage}>
          <img src={sentienz} alt="" />
        </div>
        <div className={classes.iconImage}>
          <img src={HDB} alt="" />
        </div>
        <div className={classes.iconImage}>
          <img src={ITSS} alt="" />
        </div>
        <div className={classes.iconImage}>
          <img src={NSG} alt="" />
        </div>
      </div>
      <p>Disclaimer: The aforementioned companies have no obligation to recruit NIIT students each year</p>
    </div>
  );
};

export default Sponsors;
