import React from "react";
import "./AboutPage.css";
// import movieReelImage from "../assets/best-valentines-movies-1675040306.jpg"; // Import your background image
import popcornImage from "../assets/popcorn-3.png"; // Import an image for the content section

const About = () => {
   return (
      <div className="about-container">
         <div className="hero">
            {/* <img src={movieReelImage} alt="Movie Reel" /> */}
            <div className="hero-text">
               <h1>About Us</h1>
            </div>
         </div>
         <div className="content">
            <p>
               Welcome to our movie selling website! We are passionate about
               bringing you the best movies and entertainment right to your
               doorstep.
            </p>
            <p>
               Our mission is to provide a wide selection of movies at
               affordable prices. Whether you're a movie enthusiast or just
               looking for a great way to unwind, we've got you covered.
            </p>
            <p>
               Our team is dedicated to curating the latest and greatest movies
               for your enjoyment. Feel free to explore our collection and don't
               hesitate to reach out if you have any questions or suggestions.
            </p>
            <div className="image-collage">
               <img src={popcornImage} alt="Popcorn" />
               {/* Add more images for the collage */}
            </div>
         </div>
         <div className="cta-section">
            <h2>Ready to Dive into the Movie Frenzy?</h2>
            <p>
               Explore our collection and find your next movie night favorite.
            </p>
            <a href="/" className="cta-button">
               Browse Movies
            </a>
         </div>
      </div>
   );
};

export default About;
