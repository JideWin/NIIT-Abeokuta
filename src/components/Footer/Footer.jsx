import React from "react";
import classes from "../Footer/Footer.module.css";
import Logo from "../../Assets/footLogo.png";
import Facebook from "../../Assets/Facebook.png";
import Instagram from "../../Assets/Instagram.png";
import Twitter from "../../Assets/Twitter.png";
import Youtube from "../../Assets/Youtube.png";
import Linkedin from "../../Assets/Linkedin.png";
import { TiLocation } from "react-icons/ti";
import { IoCall } from "react-icons/io5";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer>
        <hr />
        <div className={classes.footWrap}>
          <div className={classes.footLeft}>
            <div className={classes.footLogo}>
              <img src={Logo} alt="Logo" />
            </div>
            <p>
              NIIT Agbara, Suite E, Agbara Estate shopping Mall, Beside Stanbic
              IBTC Beach Town, Agbara.
            </p>
            <p>
              {" "}
              <TiLocation /> Beach Town, Agbara
            </p>
            <p>
              {" "}
              <IoCall /> 08094355000, 08094355003
            </p>
            <p>www.niitagbara.com</p>
            <div className={classes.socials}>
              <div className={classes.media}>
                <img src={Facebook} alt="Facebook" />
              </div>
              <div className={classes.media}>
                <img src={Instagram} alt="Instagram" />
              </div>
              <div className={classes.media}>
                <img src={Twitter} alt="Twitter" />
              </div>
              <div className={classes.media}>
                <img src={Youtube} alt="Youtube" />
              </div>
              <div className={classes.media}>
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </div>
          </div>
          <div className={classes.footRight}>
            <div className={classes.info}>
              <h5>Menu</h5>
              <p>Home</p>
              <p>Courses</p>
              <p>Blog</p>
              <p>AboutUs</p>
              <p>ContactUs</p>
              <p>Terms & Policy</p>
            </div>
            <div className={classes.info}>
              <h5>Account</h5>
              <p>My Account</p>
              <p>Checkout</p>
              <p>My Cart</p>
              <p>My Catalog</p>
            </div>
            <div className={classes.info}>
              <h5>Stay Connected</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
          <div className={classes.subscribe}>
            <h5>Stay Updated </h5>
            <form>
              <input type="email" name="email" placeholder="Enter Your Email" />
              <button type="Submmit">
                {" "}
                <PiPaperPlaneTiltFill />{" "}
              </button>
            </form>
          </div>
        </div>
        <div className={classes.copyRight}>
          <hr />
          <p>Copyright © NIIT 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
