import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  forgotPasswordApi,
  loginUserApi,
  resetPasswordApi,
} from "../../api/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSentOtp, setIsSentOtp] = useState(false);

  var validate = () => {
    var isValid = true;

    // validate the email

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

  const handleReset = (e) => {
    e.preventDefault();
    if (resetPassword !== confirmPassword) {
      toast.warning("Password does not match");
      return;
    }

    console.log({
      phone: phone,
      otp: otp,
      password: resetPassword,
    });
    resetPasswordApi({ phone: phone, otp: otp, password: resetPassword })
      .then(() => {
        toast.success("Password reset successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const sentOtp = (e) => {
    e.preventDefault();
    if (phone.trim() === "") {
      toast.warning("Please enter phone number");
      return;
    }

    forgotPasswordApi({ phone: phone })
      .then((res) => {
        toast.success(res.data.message);
        // set isSentOtp to true
        setIsSentOtp(true);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          console.log(err);
          toast.error("Something went wrong");
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    loginUserApi(data).then((res) => {
      if (!res.data.success) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        // success-bool, message-string, user-object, token-string
        localStorage.setItem("token", res.data.token);

        const convertedUserData = JSON.stringify(res.data.user);
        localStorage.setItem("user", convertedUserData);

        // set authorization header

        if (res.data.user.isAdmin) {
          window.location.href = "/admin/dashboard";
        } else {
          window.location.href = "/";
        }
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="form-container ">
          <h2 className="text-center mb-4">Log in</h2>
          <form className="m-auto">
            <div className="form-group mb-5">
              <label htmlFor="email">Email Address : {email}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: {password}</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p className="text-danger">{passwordError}</p>}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-danger btn-block w-50 mt-5"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              {/* Reset password */}
            </div>
          </form>
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <form>
                  <label htmlFor="exampleInputPhone1" className="form-label">
                    Phone No.
                  </label>
                  <div className="row">
                    <div className="col-8">
                      <input
                        type="tel"
                        className="form-control"
                        id="exampleInputPhone1"
                        disabled={isSentOtp}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-4">
                      <button
                        type="button"
                        className="btn btn-primary"
                        disabled={isSentOtp}
                        onClick={sentOtp}
                      >
                        Get OTP
                      </button>
                    </div>
                  </div>
                  <div id="emailHelp" className="form-text">
                    {/* Otp sent to {phone} */}
                  </div>
                </form>
                {/* Write otp */}
                <>
                  <form hidden={!isSentOtp}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        OTP
                      </label>
                      <input
                        type="number"
                        className="form-control w-50 "
                        id="exampleInputPassword1"
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control w-50 "
                        id="exampleInputPassword1"
                        onChange={(e) => setResetPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control w-50 "
                        id="exampleInputPassword1"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleReset}
                    >
                      Reset Password
                    </button>
                  </form>
                </>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
