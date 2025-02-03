import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import { ToastContainer } from "react-toastify";

function App() {
//   const[userName,setuserName]=useState();
//   useEffect(()=>{
//     const data={
//       name:""
//     }
//     setuserName(data.name);
//   },[]);
  return (
    <Provider store={AppStore}>
      {/* <UserContext.Provider value={{loggedUser:userName ,setuserName}}> */}
        <div className="top">
          
        <Header />
        <Outlet />
        <Footer/>
        <ToastContainer/>
      </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
}
export default App;
