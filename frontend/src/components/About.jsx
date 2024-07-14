import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
Welcome to Gourmet Delight, where exceptional cuisine meets impeccable service!
Gourmet Delight started as a small family-run restaurant and has grown into a 
renowned dining destination.Our passion for food drives us to source the freshest 
ingredients and craft dishes that are both delicious and visually stunning.
Our menu celebrates culinary diversity,At the heart of Gourmet Delight is our 
dedicated team. Our chefs, servers, and support staff work.
Thank you for choosing Gourmet Delight. We look forward to serving you!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;