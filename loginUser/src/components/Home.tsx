import { createContext, Dispatch, useReducer, useState } from "react";
import userReducer,{Action} from "./userReducer";
import UserNameAvatar from "./UserNameAvatar";
import Update from "./Updata";
import Login from "./Login";
import { UserType } from "../models/userType";


const initialUser : UserType = {
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
};

export const UserContext =createContext<{
    user: UserType,
    userDispatch: Dispatch<Action>;
  }>({
    user:initialUser,
    userDispatch: () => null
});

const Home=()=>{

    const [logIn, setLogIn] = useState(false);

    const logInHome = (f:boolean) => {
        setLogIn(f)
    }

    const [user, userDispatch] = useReducer(userReducer,initialUser);

      return (<>
        <UserContext.Provider value={{ user, userDispatch }}>

            {logIn === false && <Login logIn={logInHome}></Login>}
            {logIn && <UserNameAvatar></UserNameAvatar>}
            {logIn && <Update logIn={logInHome}></Update>}
        </UserContext.Provider>
    </>)
    
}

export default Home