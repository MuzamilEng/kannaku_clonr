import React, { useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userType: "",
  login: (data) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, setToken] = React.useState("");

  const userIsLoggedIn = !!token;

  let type = "";
  useEffect(() => {
    type = localStorage.getItem("accountType");
  }, [userIsLoggedIn, token]);
  const [accountType, setAccountType] = React.useState(type);

  const loginHandler = (data) => {
    setToken(data.data.token);
    localStorage.setItem("token", data.data.token);
    setAccountType(data.data.userType);
    localStorage.setItem("accountType", data.data.userType);
    console.log(data.data.userType, "loginHandler");
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setAccountType("");
    localStorage.removeItem("accountType");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: userIsLoggedIn,
        userType: accountType,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
