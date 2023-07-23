import React, { useEffect, useState } from "react";
import { useContext } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userType: "",
  login: (data) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, setToken] = React.useState("");
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = ()=> {
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=> {
        setIsSidebarOpen(false)
    }

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
        openSidebar,
        closeSidebar,
        isSidebarOpen, 
        setIsSidebarOpen
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export const useGlobalContext =()=> {
return useContext(AuthContext)
}

export default AuthContext;

// const { createContext, useContext, useState } = require("react");


// const AppContext = createContext();
// export const AppProvider = (props)=> {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const openSidebar = ()=> {
//         setIsSidebarOpen(true)
//     }
//     const closeSidebar = ()=> {
//         setIsSidebarOpen(false)
//     }

//     return (
//         <AppContext.Provider value={{
//             openSidebar,
//             closeSidebar,
//             isSidebarOpen, 
//             setIsSidebarOpen
//         }}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export const useGlobalContext =()=> {
// return useContext(AppContext)
// }

// export default AppContext