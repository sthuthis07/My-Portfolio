import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h2>About me</h2>
        <div className="border"></div>
        <p className="about_me">
          I am a full stack developer. I am from Bangalore, India. Pursuing
          Computer Science and Engineering at Jyothy Institute of Technology. I
          love to code, if you are interested to contact me, head over to the
          contact page.
        </p>
        <p>
          To work with my technical abilities for the improvement of the
          organization. I also aim to work extra hard to achieve my target and
          give the best performance in the organization. I am eager to utilize
          my innovative abilities, skills for the accomplishment of the
          projects.
        </p>
        <br></br>
        <h3>Skills</h3>
        <div className="border"></div>
        <br />
        <div className="skills">
          <ul class="collection">
            <li
              class="collection-item avatar"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="https://img.icons8.com/bubbles/500/000000/code.png"
                alt=""
                class="circle"
                style={{ width: 80, height: 80 }}
              />
              <span class="title">Web Development</span>
              <p>
                HTML, CSS, JavaScript, NodeJS <br />
                MongoDB, ReactJS, Bootstrap
              </p>

              <i class="secondary-content material-icons">grade</i>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://img.icons8.com/clouds/100/000000/code.png"
                alt=""
                class="circle"
                style={{ width: 80, height: 80 }}
              />
              <span class="title">Programming Languages</span>
              <p>
                C, core Java
                <br />
                Python, MySQL
              </p>

              <i class="secondary-content material-icons">grade</i>
            </li>
            <li class="collection-item avatar">
              <img
                src="https://img.icons8.com/clouds/100/000000/smartphone-approve.png"
                alt=""
                class="circle"
                style={{ width: 80, height: 80 }}
              />
              <span class="title">Mobile Development</span>
              <p>
                Flutter <br />
                Java
              </p>

              <i class="secondary-content material-icons">grade</i>
            </li>
          </ul>
        </div>
        <div className="internships">
          <h3>Internships</h3>
          <div className="border"></div>
          <div className="row">
            <div className="col s12 m6">
              <div
                className="card blue-grey darken-1"
                style={{ margin: "0 0 0 20%" }}
              >
                <div className="card-content white-text">
                  <span className="card-title">SecurelyShare</span>
                  <div className="border"></div>
                  <p>
                    Worked as an intern with title of Front-End developer, in
                    SecurelyShare, Bangalore. <p>June 2022-August 2022</p>
                  </p>
                </div>
                <div class="card-action">
                  <a
                    href="https://www.securelyshare.com/"
                    className="link"
                    style={{ margin: 0 }}
                  >
                    SecurelyShare
                  </a>
                </div>
              </div>
            </div>

            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Tequed Labs</span>
                  <div className="border"></div>
                  <p>
                    Working as an intern with title of Full stack developer, in
                    Tequed Labs, Bangalore. <p>August 2022-Present</p>
                  </p>
                </div>
                <div className="card-action">
                  <a
                    href="https://www.tequedlabs.com/"
                    className="link"
                    style={{ margin: 0 }}
                  >
                    TequedLabs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
