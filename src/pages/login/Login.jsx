import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  // make ausestate for each input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // make a error state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  var validate = () => {
    var isValid = true;

    // validate the first name

    if (email.trim() === "" || !email.includes("@")) {
      setEmailError("Email is empty or invalid");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    return isValid;
  };
  // make a function to handel thge form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    toast.success("Form Submitted Successfully");

    const data = {
      email: email,
      password: password,
    };

    console.log(data);
  };

  return (
    <div className="container">
      <div className="form-container ">
        <h2 className="text-center mb-4">Log in</h2>
        <form className="m-auto">
          <div className="form-group">
            <label htmlFor="email">Email Address: {email}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleEmail}
              required
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password : {password}</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handlePassword}
              required
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}

            <button
              type="submit"
              className="btn btn-danger btn-block w-50 mt-5"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
