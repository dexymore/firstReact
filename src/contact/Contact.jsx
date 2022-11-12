import React from "react";
import navbarStyles from "./contact.module.css";
function Contact() {
  let boot="py-5 container text-center"
  
  return (


    <div className={`${boot} ${navbarStyles.margs}`}>
      <div className="col-md-4 half">
        <h5 className="h1 ">contact me</h5>

        <form>
          <div>
            <input
              type="text"
              className="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="name"
            ></input>
          </div>

          <div>
            <input
              type="text"
              className="form-control"
              id=""
              aria-describedby="emailHelp"
              placeholder="phone number"
            ></input>
          </div>

          <div>
            <input
              type="email"
              className="form-control"
              id=""
              placeholder="email"
            ></input>
          </div>

          <div>
            <textarea
              className="form-control"
              id="txtarea"
              rows="4"
              placeholder="subject"
              maxlength="100"
            ></textarea>
          </div>
          <button type="submit" className=" bg-danger btn btn-danger">
            send massage
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
