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
              Welcome to The Global Rasoi, where Indian taste meets global flavor.
We’re a modern dining space inspired by the rich, bold, and vibrant flavors of India — blended with a world of international cuisine.

Every dish is crafted using fresh ingredients, premium spices, and creative techniques, offering you a perfect mix of authentic Indian taste and modern global style.
Whether you crave a spicy curry, a creamy pasta, or a grilled special, each bite is designed to surprise your taste buds and make you feel at home.

At Global Rasoi, food isn’t just about eating — it’s about experiencing flavors that connect people, cultures, and stories.
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