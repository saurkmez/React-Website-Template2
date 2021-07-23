import React from "react";

function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="contactcontainer">
          <div className="input">
            <h1>CONTACT</h1>
            <p>Have a question or want to work together?</p>

            <input type="text" name="" id="" placeholder="Name" />

            <input type="text" name="" id="" placeholder="Enter E-Mail" />

            <div className="inputmessage">
              <input type="text" name="" id="" placeholder="Your Message" />
            </div>
            <button className="buttonsubmit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
