import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import  { toast } from 'react-hot-toast';
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const auth=useAuth();
    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>)=>
        {
            e.preventDefault();
            const formData=new FormData(e.currentTarget);
            const email=formData.get("email") as string;
            const password=formData.get("password") as string;
            console.log(email,password);
            try {
              toast.loading("Signing In",{id:"login"}) ;
              await auth?.login(email,password);
              toast.success("Login Successful",{id:"login"});
              } catch (error) {
                toast.error("Login Failed",{id:"login"});
                console.log(error);
                }
            }
  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} ml={16} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="airobot.png" alt="Robot" style={{ width: "350px" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={{ xs: 2, md: 16 }} // Adjust margin-left for small (xs) and medium (md) screens
        mt={8}
      >
        <form
        onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
            maxWidth: "300px", // Adjust max-width for small screens
            width: "100%", // Ensure form takes full width on small screens
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput type="email" name="email" label="Email" />
            <CustomizedInput type="password" name="password" label="Password" />
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                width: "100%", // Adjust button width for responsiveness
                borderRadius: 2,
                bgcolor: "#00fffc",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
              endIcon={<IoIosLogIn />}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
  }

export default Login;
