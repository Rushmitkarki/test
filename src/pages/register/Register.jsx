// import React, { useState } from "react";

// const Register = () => {
//   // Make a usestate for 5 fields
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const [email, setemail] = useState("");
//   const [Password, setPassword] = useState("");

//   // use state for error message
//   const [firstNameError, setfirstNameError] = useState("");
//   const [lastNameError, setlastNameError] = useState("");
//   const [emailError, setemailError] = useState("");
//   const [PasswordError, setpasswordError] = useState("");
//   // Make a each function for changing the value

//   // Function for First Name
//   const handelFirstname = (e) => {
//     setfirstName(e.target.value);
//   };

//   const handelLastname = (e) => {
//     setlastName(e.target.value);
//   };

//   const handelemail = (e) => {
//     setemail(e.target.value);
//   };

//   const handelPassword = (e) => {
//     setPassword(e.target.value);
//   };

//   // Validation

//   var validate = () => {
//     var isValid = true;

//     // validate the first name
//     if (firstName.trim === "") {
//       setfirstNameError("First Name is required!!!");
//       isValid = false;
//     }

//     if (lastName.trim === "") {
//       setlastNameError("last Name is required!!!");
//       isValid = false;
//     }
//     if (email.trim === "") {
//       setemailError("Email is required!!!");
//       isValid = false;
//     }
//     if (Password.trim === "") {
//       setpasswordError("Password is required!!!");
//       isValid = false;
//     }
//     // if (confirmPassword.trim === "") {
//     //   setconfirmPasswordError("Confirm Password is required!!!");
//     //   isValid = false;
//     // }
//     return isValid;
//   };

//   //Submit button function
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // validate
//     var isValid = validate();
//     if (!isValid) {
//       return;
//     }

//     console.log(firstName, lastName, email, Password);
//   };

//   return (
//     <>
//       <div className="container mt-2">
//         <h1>Create an account</h1>
//         <form className="w-50">
//           <label>First Name : {firstName}</label>
//           <input
//             onChange={handelFirstname}
//             type="text"
//             className="form-control"
//             placeholder="Enter your first name"
//           />

//           {firstNameError && <p className="text-danger">{firstNameError}</p>}
//           <label className="mt-2">Last Name : {lastName}</label>
//           <input
//             onChange={handelLastname}
//             type="text"
//             className="form-control"
//             placeholder="Enter your Last name"
//           />
//           {lastNameError && <p className="text-danger">{lastNameError}</p>}
//           <label className="mt-2">Email : {email}</label>
//           <input
//             onChange={handelemail}
//             type="text"
//             className="form-control"
//             placeholder="Enter your Email"
//           />
//           {emailError && <p className="text-danger">{emailError}</p>}
//           <label className="mt-2">Password : {setPassword}</label>
//           <input
//             onChange={handelPassword}
//             type="text"
//             className="form-control"
//             placeholder="Enter your Password"
//           />
//           {PasswordError && <p className="text-danger">{PasswordError}</p>}
//           <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
//             Create account
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };
// export default Register;

// // Steap 1:m Make complete UI of Register page(Button , Field)
// //  Step 2 : Input (Type ) -make a state
// // step 3: onchanhge -set the value to the state
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUserApi } from "../../apis/api";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  var validate = () => {
    var isValid = true;

    // validate the first name
    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("EMail is required");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    }

    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and Confirm password doesn't match");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    var isValidated = validate();
    if (!isValidated) {
      return;
    }

    // console.log(firstName, lastName, email, password, confirmPassword);

    // sendging request to api from api.js

    // Making the json object
    // haveto  same form backend
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    registerUserApi(data).then((res) => {
      // Received data : success, message
      if (res.data.success == false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
      }
    });

    // const data = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   password: password,
    // };
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="text-center mb-4">Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              onChange={handleFirstName}
              required
            />
            {firstNameError && <p className="text-danger">{firstNameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              onChange={handleLastName}
              required
            />
            {lastNameError && <p className="text-danger">{lastNameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handlePassword}
              required
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleConfirmPassword}
              required
            />
            {confirmPasswordError && (
              <p className="text-danger">{confirmPasswordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
