import { Avatar, Box} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./Home";
import { pink } from "@mui/material/colors";

const UserNameAvatar = () => {

    const context = useContext(UserContext);

    return(
        <>
  
        <Box
            sx={{
                position: "absolute",
                top: 16,
                left: 16,
                display: "flex",
                alignItems: "center",
                gap: 1,
            }}
        >
            <Avatar sx={{ bgcolor: pink[500], width: 56, height: 56 ,fontSize: 30}}>
                {context.user.firstName[0]}
            </Avatar >
            <span style={{ fontSize: "1.2rem", fontWeight: "bold",fontFamily: "'Roboto', sans-serif" }}>
                {context.user.firstName+" " + context.user.lastName}
            </span>
       
        </Box>
        </>
    );
}

export default UserNameAvatar