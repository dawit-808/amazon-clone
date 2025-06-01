import React, { useContext, useState } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import iconBlack from "./icon/iconBlack.png";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);

  const authHandler = (e) => {
    e.preventDefault();
    const action = e.target.name;

    if (action === "signin") {
      signInWithEmailAndPassword(auth, email.trim(), password.trim())
        .then((userCredential) => {
          dispatch({
            type: Type.SET_USER,
            user: userCredential.user,
          });
          setEmail("");
          setPassword("");
          setError("");
        })
        .catch((err) => {
          setError(err.message);
        });
    } else if (action === "signup") {
      createUserWithEmailAndPassword(auth, email.trim(), password.trim())
        .then((userCredential) => {
          dispatch({
            type: Type.SET_USER,
            user: userCredential.user,
          });
          setEmail("");
          setPassword("");
          setError("");
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <section className={classes.auth}>
      <Link to="/">
        <img src={iconBlack} alt="App Logo" />
      </Link>

      <div className={classes.auth_container}>
        <h1>Sign In</h1>

        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={authHandler}
            type="submit"
            name="signin"
            className={classes.signin_btn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing up, you agree to the Amazon clone's{" "}
          <Link to="/terms">Terms of Use</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <button
          onClick={authHandler}
          type="button"
          name="signup"
          className={classes.signup_btn}
        >
          Sign Up
        </button>

        {error && <small className={classes.error}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
