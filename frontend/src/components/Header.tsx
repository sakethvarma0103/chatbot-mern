import { AppBar } from "@mui/material"
import {Toolbar} from "@mui/material"
import Logo from "./shared/Logo"
import NavigationLink from "./shared/NavigationLink";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const auth=useAuth();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
        <Toolbar sx={{display:"flex"}}>
            <Logo />
            {auth?.isLoggedIn ?<>
            <NavigationLink bg="#00fffc" to="/chat" text="Go To Chat" textColor="black" onClick={auth.logout}/>
            <NavigationLink bg="#515387" to="/chat" text="Logout" textColor="white" onClick={auth.logout}/>
            </> :
            <>
            <NavigationLink bg="#00fffc" to="/login" text="Login" textColor="black" onClick={function (): Promise<void> {
                          throw new Error("Function not implemented.");
                      } } />
            <NavigationLink bg="#515387" to="/signup" text="Signup" textColor="white" onClick={function (): Promise<void> {
                          throw new Error("Function not implemented.");
                      } } />
            </>
            }
        </Toolbar>
    </AppBar>
  )
}

export default Header
