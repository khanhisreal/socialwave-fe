import { useState } from "react";
import styles from "./Authentication.module.css";
import AuthForm from "./AuthForm";
import api from "../../api/api";
import { redirect } from "react-router-dom";

export default function AuthenticationPage() {
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

  const handleName = (value, field) => {
    setFieldCount((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (value.trim() === "") {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: { bool: true, status: "" }, // neutral state
      }));
      return;
    }

    const namePattern = /^[A-Za-z\s]+$/;

    if (/\d/.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Name cannot contain numbers",
        },
      }));
    } else if (!namePattern.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Name can only contain letters and spaces",
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

    if (value.trim() === "") {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: { bool: true, status: "" }, // neutral state
      }));
      return;
    }

    const specialChars = /^[\w.]+$/;

    if (!specialChars.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Invalid username",
        },
      }));
      return;
    }

    try {
      const isAvailable = await checkUsernameExists(value);

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
      const response = await api.get(
        `http://localhost:8080/api/users/track?username=${username}`,
      );

      return response.data; // Expecting a boolean
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

    if (value.trim() === "") {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: { bool: true, status: "" }, // neutral state
      }));
      return;
    }

    const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"|,.<>/?~]/;

    if (!/\d/.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Password must contain numbers",
        },
      }));
    } else if (/^\d+$/.test(value)) {
      setFieldIsValid((prev) => ({
        ...prev,
        [field]: {
          bool: false,
          status: "⚠️ Password must contain letters",
        },
      }));
    } else if (!specialChars.test(value)) {
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

  // Check if all fields are valid
  const isFormValid =
    fieldCount.name.trim() !== "" &&
    fieldCount.username.trim() !== "" &&
    fieldCount.password.trim() !== "" &&
    fieldIsValid.name.bool &&
    fieldIsValid.username.bool &&
    fieldIsValid.password.bool;

  return (
    <div className={styles.container}>
      <AuthForm
        handleName={handleName}
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        fieldIsValid={fieldIsValid}
        setFieldIsValid={setFieldIsValid}
        fieldCount={fieldCount}
        setFieldCount={setFieldCount}
        isFormValid={isFormValid}
      />
    </div>
  );
}

//action(): gets triggered when the <Form/> is submitted
//request: contains the form data
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    return new Response({ message: "Unsupported route." }, { status: 500 });
  }

  const data = await request.formData();
  //The backend waits to have a form-data, not JSON so don't call Object.fromEntries

  try {
    const response = await api.post(
      "http://localhost:8080/api/users/" + mode,
      data,
    );

    console.log(response);

    if (mode === "signup") {
      return redirect(`?mode=${"login"}`);
    }

    //soon: manage token
    return redirect("/newsfeed");
  } catch (error) {
    //this return data to the AuthForm
    return error;
  }
}
