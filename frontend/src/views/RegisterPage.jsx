import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserError,
  selectUserLoading,
} from "../features/users/usersSelector";
import { userRegister } from "../features/users/usersThunk";
import { clearUserError } from "../features/users/usersSlice";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

const SigninPage = () => {
  // Inner State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Routing
  const navigate = useNavigate();

  // Redux State
  const dispatch = useDispatch();
  const error = useSelector(selectUserError);
  const loading = useSelector(selectUserLoading);
  const { hasError, errorMessage } = error;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("Passwords do not match!");
    } else {
      dispatch(userRegister({ name: name, email: email, password: password }))
        .unwrap()
        .then(() => {
          navigate("/dashboard", { replace: true });
        })
        .catch(() => {
          return;
        });
    }
  };

  return (
    <div className="mid-row">
      {loading && <LoadingBox />}
      {hasError && (
        <MessageBox message={errorMessage} action={clearUserError()} />
      )}
      <form className="login-form" onSubmit={submitHandler}>
        <h1>Create an account</h1>
        <div>
          <label htmlFor="name">Full Name</label> <br />
          <input
            type="text"
            id="name"
            placeholder={`e.g. "Jhon Orozco" `}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label> <br />
          <input
            type="email"
            id="email"
            placeholder={`e.g. "example@example.com" `}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            placeholder={`e.g. "password" `}
            minLength="8"
            maxLength="25"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="confirmPass">Confirm Password</label> <br />
          <input
            type="password"
            id="confirmPass"
            placeholder={`e.g. "password" `}
            minLength="8"
            maxLength="25"
            required
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
