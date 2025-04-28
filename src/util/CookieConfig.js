const setCookie = (data, daysToLive) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  //encodeURIComponent: encode special characters in the cookie value
  const encodedValue = encodeURIComponent(data);

  document.cookie = `token=${encodedValue}; ${expires}; path=/`;
};

function deleteCookie(name) {
  setCookie(name, null);
}

// Get a cookie by name
function getCookie(name) {
  const cookieArray = document.cookie.split("; ");
  for (const cookie of cookieArray) {
    if (cookie.startsWith(name + "=")) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

export { setCookie, deleteCookie, getCookie };
