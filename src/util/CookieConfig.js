const setCookie = (data, daysToLive) => {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  //encodeURIComponent: encode special characters in the cookie value
  const encodedValue = encodeURIComponent(JSON.stringify(data));

  document.cookie = `user=${encodedValue}; ${expires}; path=/`;
};

function deleteCookie(name) {
  setCookie(name, null);
}

function getCookie(name) {
  const cookieArray = document.cookie.split("; ");
  for (const cookie of cookieArray) {
    if (cookie.startsWith(name + "=")) {
      const rawValue = cookie.substring(name.length + 1);
      //decodeURIComponent: decode special characters in the cookie value
      return JSON.parse(decodeURIComponent(rawValue));
    }
  }
  return null;
}

export { setCookie, deleteCookie, getCookie };
