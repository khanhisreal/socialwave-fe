import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

//custom hook to use the UserContext
export function useUser() {
  return useContext(UserContext);
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
