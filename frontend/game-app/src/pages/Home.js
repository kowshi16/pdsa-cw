import React from "react";
import { Box, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const CenterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const Card = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "54px 64px",
  borderRadius: "12px",
}));

const Home = () => {
  const navigate = useNavigate();
  return (
    <CenterContainer>
      <Card>
        <h1>Welcome to Game Application</h1>
        <h2>Enter your name</h2>
        <TextField
          sx={{ width: "320px" }}
          id="outlined-basic"
          placeholder="Name"
          variant="outlined"
        />
        <br /> <br />
        <button
          className="btn"
          style={{ marginTop: "24px" }}
          onClick={() => navigate("/knapsack")}
        >
          Submit
        </button>
      </Card>
    </CenterContainer>
  );
};

export default Home;
