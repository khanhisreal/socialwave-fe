import { useState } from "react";
import styles from "./AuthForm.module.css";
import api from "../../api/api";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [enteredValueSignIn, setEnteredValueSignIn] = useState({
    username: "",
    password: "",
  });
  const [usernameAvailable, setUsernameAvailable] = useState(null);

  function handleInputChangeSignIn(value, identifier) {
    setEnteredValueSignIn((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  const checkUsernameExists = async (username) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/track?username=${username}`,
      );
      const result = await response.json();
      setUsernameAvailable(result);
      return result;
    } catch (error) {
      console.error("Error checking username availability:", error);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isLogin) {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      // Ensure username availability before proceeding
      const isAvailable = await checkUsernameExists(data.username);
      if (!isAvailable) {
        alert("Username is already taken. Please choose another one.");
        return;
      }

      if (formData.get("bio") === "") {
        formData.set("bio", "no bio yet");
      }

      try {
        const response = await api.post(
          "http://localhost:8080/api/users/register",
          formData,
        );
        if (response.status === 200) {
          alert("Account created successfully!");
          setIsLogin(true);
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    } else {
      console.log("Logging in with:", enteredValueSignIn);
    }
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBackground}>
        <h1 className={styles.heading}>Welcome to SocialWave</h1>
        <p className={styles.description}>
          SocialWave is your go-to platform for connecting with friends, sharing
          your moments, and exploring new ideas.
        </p>
      </div>
      <div
        className={`${styles.authBox} ${isLogin ? styles.loginBox : styles.signupBox}`}
      >
        <div className={styles.wrapper}>
          <img
            src="/socialwave-logo.png"
            className={styles.authImage}
            alt="SocialWave Logo"
          />
          <h2>SocialWave</h2>
        </div>
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Name"
                className={styles.input}
                name="name"
                required
              />
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
                name="username"
                onBlur={(event) => checkUsernameExists(event.target.value)}
                required
              />
              {usernameAvailable !== null && (
                <p>
                  {usernameAvailable
                    ? "✅ Username is available"
                    : "❌ Username is taken"}
                </p>
              )}
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                name="password"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                name="email"
                required
              />
              <label htmlFor="avatar">Upload avatar (optional)</label>
              <input
                type="file"
                accept="image/*"
                className={styles.input}
                name="avatar"
              />
              <textarea
                placeholder="Bio (optional)"
                className={styles.textarea}
                name="bio"
              ></textarea>
            </>
          )}
          {isLogin && (
            <>
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
                onChange={(event) => {
                  handleInputChangeSignIn(event.target.value, "username");
                }}
                value={enteredValueSignIn.username}
                name="username"
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                onChange={(event) => {
                  handleInputChangeSignIn(event.target.value, "password");
                }}
                value={enteredValueSignIn.password}
                name="password"
              />
            </>
          )}
          <button type="submit" className={styles.button}>
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className={styles.switchBtn}
        >
          {isLogin ? "Create an account" : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
