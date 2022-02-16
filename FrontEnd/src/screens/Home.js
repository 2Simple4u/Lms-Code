import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="parent_Home">
      <div className="home_banner">
        <img
          src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="banner"
        />
        <div className="home_banner_text">
          <h1>
           i-Transform,
          </h1>
          <p>
            One stop all solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
