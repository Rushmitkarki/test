import React, { useState } from "react";
const Register = () => {
  // Make a usestate for 5 fields
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");

  // use state for error message
  const [firstNameError, setfirstNameError] = useState("");
  const [lastNameError, setlastNameError] = useState("");
  const [emailError, setemailError] = useState("");
  const [PasswordError, setpasswordError] = useState("");
  // Make a each function for changing the value

  // Function for First Name
  const handelFirstname = (e) => {
    setfirstName(e.target.value);
  };

  const handelLastname = (e) => {
    setlastName(e.target.value);
  };

  const handelemail = (e) => {
    setemail(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  //Submit button function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, Password);
  };

  return (
    <>
      <div className="container mt-2">
        <h1>Create an account</h1>
        <form className="w-50">
          <label>First Name : {firstName}</label>
          <input
            onChange={handelFirstname}
            type="text"
            className="form-control"
            placeholder="Enter your first name"
          />
          <label className="mt-2">Last Name : {lastName}</label>
          <input
            onChange={handelLastname}
            type="text"
            className="form-control"
            placeholder="Enter your Last name"
          />
          <label className="mt-2">Email : {email}</label>
          <input
            onChange={handelemail}
            type="text"
            className="form-control"
            placeholder="Enter your Email"
          />
          <label className="mt-2">Password : {setPassword}</label>
          <input
            onChange={handelPassword}
            type="text"
            className="form-control"
            placeholder="Enter your Password"
          />
          <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
            Create account
          </button>
        </form>
      </div>
    </>
  );
};
export default Register;

// Steap 1:m Make complete UI of Register page(Button , Field)
//  Step 2 : Input (Type ) -make a state
// step 3: onchanhge -set the value to the state
