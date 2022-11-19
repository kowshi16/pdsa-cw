import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, Typography, styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const BoxWindow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "500px",
  height: "500px",
  backgroundColor: "#fff",
  boxShadow: "0px 5px 33px 0px rgba(0,0,0,0.25)",
  marginTop: "48px",
}));

const ShortestPath = () => {
  return (
    <Sidebar>
      <h1>Identify Shortest Path</h1>
      <Box display="flex">
        <BoxWindow></BoxWindow>
        <Box ml="36px" mt="48px">
          <h3>Predict shortest distance from city 6 to following cities</h3>
          <table className="table_minium">
            <tr>
              <th>City</th>
              <th>Distance</th>
            </tr>
            <tr>
              <td>0</td>
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
          </table>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default ShortestPath;
