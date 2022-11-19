import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, Typography, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import ShortestImg from "../assets/img/shoetest_path.jpeg";
import Swal from "sweetalert2";

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
      <h1 style={{ textTransform: "uppercase" }}>Identify Shortest Path</h1>
      <Box display="flex">
        <BoxWindow>
          <img src={ShortestImg} alt="" style={{ width: "100%" }} />
        </BoxWindow>
        <Box ml="36px" mt="48px">
          <table className="table_minium">
            <tr>
              <th>From city</th>
              <th>To city</th>
              <th>Distance</th>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
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
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
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
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
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
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
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
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="standard-basic"
                  placeholder="0"
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
              <td>
                <TextField id="standard-basic" variant="standard" />
              </td>
            </tr>
          </table>
          <h3>Predict shortest distance from city 6 to following cities</h3>
          <Box display="flex" alignItems="center">
            <Typography>1</Typography>
            <TextField
              id="standard-basic"
              variant="outlined"
              placeholder="0,0,0,0,0"
              sx={{ margin: "0px 22px" }}
            />
            <Typography>1</Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <button
            className="btn"
            style={{ marginTop: "24px", marginRight: "12px" }}
            onClick={() => {
              Swal.fire({
                title: "Submit",
                text: "Successfully submitted",
                icon: "success",
              });
            }}
          >
            Submit
          </button>
          <button
            className="btn"
            style={{ marginTop: "24px" }}
            onClick={() => {
              Swal.fire({
                title: "Reset",
                text: "Successfully reset",
                icon: "success",
              });
            }}
          >
            reset
          </button>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default ShortestPath;
