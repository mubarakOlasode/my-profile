import React from "react";
import chopify from "./Asset/chopify.mp4";
import countdown from "./Asset/countdown.mp4";
import javaWeather from "./Asset/javaWeather.mp4";

import "./WebPage.css";
const MyProfile = ({ onshow }) => {
  return (
    <div className="container1">
      <h1 className="h1">My Profile</h1>
      <div className="div1">
        <div className="paragraph-container">
          <p>
            I am a highly motivated individual with a solid educational
            foundation and a comprehensive skill set in the field of Computer
            Programming. I earned both a National Diploma and Higher National
            Diploma in Business Administration from the esteemed Yaba College of
            Technology.
          </p>
          <p>
            My transition into the realm of Computer Programming reflects my
            dedication to continuous learning and professional growth.
            Commencing my programming journey, I diligently undertook various
            courses on Udemy, covering fundamental programming concepts, HTML,
            Node.js, and Postgres.
          </p>
          <p>
            Seeking a more structured and in-depth education, I successfully
            gained admission to the prestigious Georgian@ILAC College in
            Toronto, Canada. Here, I pursued a rigorous curriculum in computer
            programming, expanding my proficiency in languages including Java,
            .NET, PHP, and Python. Leveraging cloud computing services such as
            Microsoft Azure, Google Cloud, and Firebase, I demonstrated my
            ability to develop and deploy projects that reside seamlessly in the
            cloud.
          </p>
          <p>
            Moreover, I actively participated in the META-Coursera partnership
            programming course, engaging in various FrontEnd technology courses,
            assignments, and projects. This experience not only broadened my
            knowledge but also honed my practical skills in applying programming
            concepts to real-world scenarios.
          </p>
          <p>
            My educational and experiential background reflects a commitment to
            excellence, adaptability to emerging technologies, and a passion for
            delivering innovative solutions in the dynamic field of Computer
            Programming. I am eager to contribute my skills and knowledge to
            collaborative and challenging projects, aiming to make a meaningful
            impact in the technology sector.
          </p>
        </div>
      </div>
      <div className="video-section">
        <h2>Projects</h2>
        <ul className="video-list">
          <li>
            <aside>
              <p>Chopify</p>
              <video width="400" height="400" controls>
                <source src={chopify} type="video/mp4" />
              </video>
            </aside>
          </li>
          <li>
            <aside>
              <p>countdown Timer</p>
              <video width="400" height="400" controls>
                <source src={countdown} type="video/mp4" />
              </video>
            </aside>
          </li>
          <li>
            <aside>
              <p>Weather App</p>
              <video width="400" height="400" controls>
                <source src={javaWeather} type="video/mp4" />
              </video>
            </aside>
          </li>
        </ul>
      </div>
      <button type="button" onClick={onshow} className="homeBtn">
        Back to Home
      </button>
    </div>
  );
};

export default MyProfile;
