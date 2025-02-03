import { createContext } from "react";

const UserContext=createContext({
   loggedUser:"Default value",
});

export default UserContext;