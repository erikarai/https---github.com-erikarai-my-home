import "./Signup.css";

import React from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

export default function Signup() {
  var userdata = {};

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  var [response, setResponse] = useState();

  var [isloading, setIsloading] = useState(false);

  function handleEmail(event) {
    userdata.email = event.target.value;
  }

  function handleName(event) {
    userdata.name = event.target.value;
  }

  function handlePassword(event) {
    userdata.password = event.target.value;
  }

  function handleRole(event) {
    userdata.role = event.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // You can add your login logic here, for example, send a request to your server

    console.log("Email:", email);

    console.log("Password:", password);

    alert("User Registered!!!");

    navigate("/login");
  };

  function signup() {
    console.log("userdata", userdata);

    axios({
      method: "post",

      url: "localhost:8081/hackathon/users/register",

      data: userdata,
    }).then(
      function (response) {
        console.log("response from sigup api", response.data.message);

        if (response.data.message == "User Registered") {
          setResponse("Please Check your Inbox for Account Verification");
        } else {
          setResponse(response.data.message);
        }
      },
      function (error) {
        console.log("error from signup api", error);
      }
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create An Account</h3>

          <div className="text-center">
            Already registered?{" "}
            <Link to="/login">
              <span className="link-primary">Sign In</span>
            </Link>
          </div>

          {response && (
            <div className="form-group mt-3">
              <label className="alert alert-danger form-control">
                {response}
              </label>
            </div>
          )}

          <div className="form-group mt-3">
            <label>Full Name</label>

            <input
              onChange={handleName}
              type="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>

            <input
              onChange={handleEmail}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>

            <input
              onChange={handlePassword}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>

          {/* <div className="form-group mt-3">

 

              <label>Password</label>

 

              <input

 

                onChange={handlePassword}

 

                type="password"

 

                className="form-control mt-1"

 

                placeholder="Password"

 

              />

              <select class="form-select" aria-label="Default select example">

              <option selected>Select your Role</option>

              <option value="1">Participant</option>

              <option value="2">Team Member</option>

             <option value="3">Panelist</option>

             <option value="4">Judge</option>

             </select>

 

            </div> */}

          <div className="d-grid gap-2 mt-3">
            {isloading == false && (
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Create Account
              </button>
            )}

            {isloading == true && (
              <button disabled type="button" className="btn btn-primary">
                Please Wait ...
              </button>
            )}
          </div>

          <p className="text-center mt-2">
            Forgot{" "}
            <Link to="/pass">
              <a href="#">password?</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
