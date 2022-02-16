import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
// import Batch from "../screens/Batch.js";
import "./UserScreen.css";
// import UserDashboard from "./UserDashboard";
import ParallaxImg from "./ParallaxImg.js";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";

function UserScreen() {
  return (
    //   <div className="main_screen">
    //     <div className="parent-panel">
    //       <div className="left-panel">
    //         <UserDashboard />
    //       </div>
    //       <div className="right-panel">
    //         <div className="right_panel_text">
    //         <h1> Welcome to <span>i-Transform,</span></h1>
    //         <p>One stop all solutions..</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="parallax-1">
    // 	<h2>Nanital Trip</h2>
    // </div>

    // <div className="main_screen">
    <ParallaxProvider className="parentScreen">
      <ParallaxImg imgsrc={img2} height="500px">
        <div className="part1_text">
          <h2>The LMS</h2>
          <h1>built for sucess</h1>
          <p>
            Build a smarter organization with the training platform designed to
            help great teams grow
          </p>
        </div>
      </ParallaxImg>
      <div className="part1_footer_text">
        <div className="right_footer">
          <h2>Come for the training, stay for the experience</h2>
          <p>
            An intuitive interface means training feels right from the very
            first click. And with easy access on any device, learners jump in
            anytime, anywhere. Feel good introducing a tool that people actually
            use.
          </p>
        </div>
        <div className="left_footer_img">
          <img src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=" />
        </div>
      </div>

      <ParallaxImg imgsrc={img1} height="500px" opacity=".5"></ParallaxImg>
      <div className="part2_footer_text">
        <div className="right_footer_img">
          <img src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=" />
        </div>
        <div className="left_footer_text">
          <h2>Ready to go, right out of the box</h2>
          <p>
            Skip the months-long setup times that cause your training programs
            to just fizzle out. Create new courses with a few simple clicks, add
            users, and go live by the end of the day.
          </p>
        </div>
      </div>

      <ParallaxImg imgsrc={img3} height="500px" opacity=".5"></ParallaxImg>
      <div className="part1_footer_text">
        <div className="right_footer">
          <h2>Matches your style, speaks their language</h2>
          <p>
            Teams embrace training when it’s relevant. Personalize their
            experience to match your branding and localize to your users’
            languages for training that feels like it’s built just for them.
          </p>
        </div>
        <div className="left_footer_img">
          <img src="https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM=" />
        </div>
      </div>
      <ParallaxImg imgsrc={img4} height="500px" opacity=".5"></ParallaxImg>
    </ParallaxProvider>

    // </div>
  );
}

export default UserScreen;
