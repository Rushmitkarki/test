import React from "react";
const Register = () => {
  return (
    <>
      <div className="container mt-2">
        <h1>Create an account</h1>
        <form className="w-50">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your first name"
          />
          <label className="mt-2">Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Last name"
          />
          <label className="mt-2">Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Email"
          />
          <label className="mt-2">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Password"
          />
          <button className="btn btn-dark mt-2 w-100">Create account</button>
        </form>
      </div>
    </>
  );
};
export default Register;

// Steap 1:m Make complete UI of Register page(Button , Field)
//  Step 2 : Input (Type ) -make a state
// step 3: onchanhge -set the value to the state
