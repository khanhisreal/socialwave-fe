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

const validatePassword = (value) => {
  setPasswordCount(value);
  const specialChars = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;

  if (!/\d/.test(value)) {
    //doesn't contain numbers
    setPasswordIsValid({
      bool: false,
      status: "⚠️ Password must contain numbers",
    });
  } else if (/^\d+$/.test(value)) {
    //contains solely numbers
    setPasswordIsValid({
      bool: false,
      status: "⚠️ Password must contain letters",
    });
  } else if (!specialChars.test(value)) {
    //doesn't contain special characters
    setPasswordIsValid({
      bool: false,
      status: "⚠️ Password must contain special characters",
    });
  } else {
    setPasswordIsValid({
      bool: true,
      status: "✅ Password is valid",
    });
  }
};
