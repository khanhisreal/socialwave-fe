import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";
import styles from "./AuthForm.module.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const AuthForm = ({
  handleName,
  handleUsername,
  handlePassword,
  fieldIsValid,
  fieldCount,
  setFieldCount,
  isFormValid,
}) => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") !== "signup";
  //anything that is returned from action function
  //- bad response in this case
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    console.log("received error");
    console.log(data);
  }, [data]);

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
        <Form method="post" className={styles.form}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className={`${styles.input} ${fieldIsValid.name.bool === false ? styles.invalidInput : undefined}`}
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
          )}
          {fieldCount.name !== "" && fieldIsValid.name.status}
          <input
            type="text"
            placeholder="Username"
            className={`${styles.input} ${!isLogin && fieldIsValid.username.bool === false ? styles.invalidInput : undefined}`}
            name="username"
            onChange={(event) => handleUsername(event.target.value, "username")}
            onBlur={() =>
              setFieldCount((prev) => ({
                ...prev,
                ["username"]: "",
              }))
            }
            required
            maxLength={45}
          />
          {!isLogin &&
            fieldCount.username !== "" &&
            fieldIsValid.username.status}
          <input
            type="password"
            placeholder="Password"
            className={`${styles.input} ${!isLogin && fieldIsValid.password.bool === false ? styles.invalidInput : undefined}`}
            name="password"
            required
            onChange={(event) => handlePassword(event.target.value, "password")}
            onBlur={() =>
              setFieldCount((prev) => ({
                ...prev,
                ["password"]: "",
              }))
            }
            minLength={8}
          />
          {!isLogin &&
            fieldCount.password !== "" &&
            fieldIsValid.password.status}
          {!isLogin && (
            <>
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
          {isLogin && data && (
            <p className={styles.error}>{data.response.data}</p>
          )}
          <button
            type="submit"
            className={styles.button}
            disabled={(!isFormValid && !isLogin) || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : isLogin ? "Sign In" : "Sign Up"}
          </button>
        </Form>
        <Link
          to={`?mode=${isLogin ? "signup" : "login"}`}
          className={styles.switchBtn}
        >
          {isLogin ? "Create an account" : "Already have an account? Log in"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  handleName: PropTypes.func.isRequired,
  handleUsername: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  fieldIsValid: PropTypes.shape({
    name: PropTypes.shape({
      bool: PropTypes.bool.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    username: PropTypes.shape({
      bool: PropTypes.bool.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    password: PropTypes.shape({
      bool: PropTypes.bool.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  fieldCount: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  setFieldCount: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
};
