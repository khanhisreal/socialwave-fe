import { useState } from "react";
import styles from "./AuthForm.module.css";
import api from "../../api/api";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fieldIsValid, setFieldIsValid] = useState({
    name: { bool: true, status: "" },
    username: { bool: true, status: "" },
    password: { bool: true, status: "" },
  });
  const [fieldCount, setFieldCount] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [enteredValueSignIn, setEnteredValueSignIn] = useState({
    username: "",
    password: "",
  });

  function handleInputChangeSignIn(value, identifier) {
    setEnteredValueSignIn((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  const handleName = (value, field) => {
    setFieldCount((prev) => ({
      ...prev,
      [field]: value,
    }));

    const specialChars = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

    if (specialChars.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Name cannot contain special characters",
        },
      }));
    } else {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: true,
          status: "✅ Name is valid",
        },
      }));
    }
  };

  const handleUsername = async (value, field) => {
    setFieldCount((prev) => ({
      ...prev,
      [field]: value,
    }));

    const specialChars = /^[\w.]+$/;

    // Check for special characters first
    if (!specialChars.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Invalid username",
        },
      }));
      return; // Exit early if the username is invalid
    }

    try {
      // Perform the username check only if the value is valid
      const isAvailable = await checkUsernameExists(value);

      // Update state only after the check is done
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: isAvailable,
          status: isAvailable
            ? "✅ Username is available"
            : "⚠️ Username is taken",
        },
      }));
    } catch (error) {
      console.error("Error checking username availability:", error);
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Error checking username availability",
        },
      }));
    }
  };

  const checkUsernameExists = async (username) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/track?username=${username}`,
      );
      const result = await response.json();
      return result; // Expecting a boolean
    } catch (error) {
      console.error("Error checking username availability:", error);
      return false; // Default to unavailable in case of an error
    }
  };

  const handlePassword = (value, field) => {
    setFieldCount((prev) => ({
      ...prev,
      [field]: value,
    }));

    const specialChars = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

    if (!/\d/.test(value)) {
      //doesn't contain numbers
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Password must contain numbers",
        },
      }));
    } else if (/^\d+$/.test(value)) {
      //contains solely numbers
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Password must contain letters",
        },
      }));
    } else if (!specialChars.test(value)) {
      //doesn't contain special characters
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Password must contain special characters",
        },
      }));
    } else {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: true,
          status: "✅ Password is valid",
        },
      }));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // Check if any field is invalid
    if (
      !fieldIsValid.name.bool ||
      !fieldIsValid.username.bool ||
      !fieldIsValid.password.bool
    ) {
      let errorMessage = "";

      // Build error message based on invalid fields
      if (!fieldIsValid.name.bool)
        errorMessage += fieldIsValid.name.status + "\n";
      if (!fieldIsValid.username.bool)
        errorMessage += fieldIsValid.username.status + "\n";
      if (!fieldIsValid.password.bool)
        errorMessage += fieldIsValid.password.status + "\n";

      // Alert the user with the status of invalid fields
      alert(errorMessage);
      return;
    }

    if (!isLogin) {
      const formData = new FormData(event.target);

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
                onChange={(event) => handleName(event.target.value, "name")}
                onBlur={() =>
                  setFieldCount((prev) => ({
                    ...prev,
                    ["name"]: "",
                  }))
                }
                required
                maxLength={55}
              />
              {fieldCount.name !== "" && fieldIsValid.name.status}
              <input
                type="text"
                placeholder="Username"
                className={styles.input}
                name="username"
                onChange={(event) =>
                  handleUsername(event.target.value, "username")
                }
                onBlur={() =>
                  setFieldCount((prev) => ({
                    ...prev,
                    ["username"]: "",
                  }))
                }
                required
                maxLength={45}
              />
              {fieldCount.username !== "" && fieldIsValid.username.status}
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                name="password"
                required
                onChange={(event) =>
                  handlePassword(event.target.value, "password")
                }
                onBlur={() =>
                  setFieldCount((prev) => ({
                    ...prev,
                    ["password"]: "",
                  }))
                }
                minLength={8}
              />
              {fieldCount.password !== "" && fieldIsValid.password.status}
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                name="email"
                required
                maxLength={255}
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
                maxLength={130}
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
