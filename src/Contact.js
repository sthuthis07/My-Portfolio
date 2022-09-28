import React, { Component } from "react";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2>Contact me</h2>
        <div className="border"></div>
        <p>This is my contact. Got any questions?</p>
        <p style={{ marginBottom: "2rem" }}>
          You can email me to at&nbsp;
          <a href="mailto:sthuthi.cse@gmail.com? &subject=Mail from our Website&body=Dear Sthuthi S">
            sthuthi.cse@gmail.com
          </a>
          &nbsp;or you can click on the links below.
        </p>
        <div className="row" style={{ marginLeft: "250px" }}>
          <div className="col s12 m6">
            <div className="card " style={{ backgroundColor: "transparent" }}>
              <div className="card-content ">
                <div>
                  <div className="mb-4 contactForm">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={10}
                      cols={60}
                    ></textarea>
                    <br></br>
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                      disabled
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88653954404!2d77.49085367432157!3d12.953959987666336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1662534484848!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
        <br></br>

        <a
          href="https://twitter.com/sthuxs01"
          style={{
            textShadow: "0 1px 0 rgba(0,0,0,0.1",
            margin: "0rem 2rem 0 rem 0.5rem",
            textDecoration: "none",
            color: "#76ba99",
          }}
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size="2x"
            style={{ color: "#76ba99" }}
          />{" "}
          Twitter &nbsp;
        </a>
        <a
          href="www.linkedin.com/in/sthuthi-s"
          style={{
            textShadow: "0 1px 0 rgba(0,0,0,0.1",
            margin: "0rem 2rem 0 rem 2rem",
            textDecoration: "none",
            color: "#76ba99",
          }}
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            size="2x"
            style={{ color: "#76ba99" }}
          />{" "}
          LinkedIn &nbsp;
        </a>
        <a
          href="https://github.com/sthuthis07"
          style={{
            textShadow: "0 1px 0 rgba(0,0,0,0.1",
            margin: "0rem 2rem 0 rem 2rem",
            textDecoration: "none",
            color: "#76ba99",
          }}
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size="2x"
            style={{ color: "#76ba99" }}
          />{" "}
          GitHub &nbsp;
        </a>
      </div>
    );
  }
}
export default Contact;
