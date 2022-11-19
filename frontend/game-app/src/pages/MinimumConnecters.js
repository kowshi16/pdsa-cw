import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, styled } from "@mui/material";
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

const MinimumConnecters = () => {
  return (
    <Sidebar>
      <h1>Identify minimum connecters</h1>
      <Box display="flex">
        <BoxWindow></BoxWindow>
        <Box ml="36px" mt="48px">
          <h3>Let find the minimum connectors starting from city 8</h3>
          <table className="table_minium">
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Distance</th>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="9"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
                  variant="standard"
                />
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="9"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
                  variant="standard"
                />
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="9"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
                  variant="standard"
                />
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="9"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
                  variant="standard"
                />
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="9"
                  variant="standard"
                />
              </td>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
                  variant="standard"
                />
              </td>
              <td>0</td>
            </tr>
          </table>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default MinimumConnecters;
