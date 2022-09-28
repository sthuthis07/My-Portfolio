import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Hello, I am Sthuthi.</h2>
        <div className="border"></div>
        <p>I am a Computer Science Engineering student.</p>

        <div>
          <p>
            I am a hardworking, detail oriented student, who's waiting for
            opportunities to present my talents.
          </p>
        </div>
        <p>You can find my previous projects on my GitHub.</p>
        <div className="border"></div>
        <div className="skills" style={{ backgroundColor: "transparent" }}>
          <h4>What I am good at!</h4>
          <ul className="collection" style={{ backgroundColor: "transparent" }}>
            <li
              className="collection-item avatar"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="https://img.icons8.com/bubbles/200/000000/procreate.png"
                alt=""
                className="circle"
                style={{ width: 80, height: 80 }}
              />
              <span className="title">Digital Art</span>
              <p>Procreate</p>

              <i className="secondary-content material-icons">grade</i>
            </li>
            <li
              className="collection-item avatar"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="https://img.icons8.com/bubbles/200/000000/paint-palette.png"
                alt=""
                class="circle"
                style={{ width: 80, height: 80 }}
              />
              <span className="title">Fine Art</span>
              <p>Sketching, Painting</p>

              <i className="secondary-content material-icons">grade</i>
            </li>
            <li className="collection-item avatar">
              <img
                src="https://img.icons8.com/bubbles/200/000000/body-positive-female.png"
                alt=""
                className="circle"
                style={{ width: 80, height: 80 }}
              />
              <span className="title">Cultural Activities</span>
              <p>Dancing</p>

              <i className="secondary-content material-icons">grade</i>
            </li>
          </ul>
        </div>
        <p>You can visit my About page to know more about me!</p>
        <p>
          If you find interesting and want to know more, you can get my contact
          details from my contact page!
        </p>
        <p>Have a great day!</p>
      </div>
    );
  }
}
export default Home;
