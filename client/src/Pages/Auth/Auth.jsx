import React, { useState } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import iconBlack from "./icon/iconBlack.png";
import { auth } from "../../Utility/firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <section className={classes.auth}>
      {/* logo */}
      <Link to="/">
        <img src={iconBlack} alt="App Logo" />
      </Link>

      <div className={classes.auth_container}>
        <h1>Sign In</h1>

        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className={classes.signin_btn}>
            Sign In
          </button>
        </form>

        <p>
          By signing up, you agree to the Amazon clone's
          <Link to="/terms">Terms of Use</Link> and
          <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <button type="submit" className={classes.signup_btn}>
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Auth;
