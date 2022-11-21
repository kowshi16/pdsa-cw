import React, { useEffect } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, Typography, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import ShortestPathImg from "../assets/img/shortest-path.png";
import Swal from "sweetalert2";
import { getDistances } from "../components/api/shortestPathAPI";

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
  const [distance, setDistance] = React.useState(null);

  useEffect(() => {
    const getDistance = async () => {
      getDistances().then((res) => {
        setDistance(res.data);
      });
    }
    
    getDistance();
  }, []);

  console.log("distance >>>>>>>", distance);

  return (
    <Sidebar>
      <h1 style={{ textTransform: "uppercase" }}>Identify Shortest Path</h1>
      <Box display="flex">
        <BoxWindow>
          <img src={ShortestPathImg} alt="" style={{ width: "100%" }} />
        </BoxWindow>
        <Box ml="36px" mt="48px">
          <table className="table_minium">
            <tr>
              <th>From City</th>
              <th>To City</th>
              <th>Distance</th>
            </tr>
            <tr>
              <td>
                0
              </td>
              <td>
                1
              </td>
              <td>
              {distance ? distance["zeroToOne"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                1
              </td>
              <td>
                2
              </td>
              <td>
                {distance ? distance["oneToTwo"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                2
              </td>
              <td>
                3
              </td>
              <td>
                {distance ? distance["twoToThree"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                3
              </td>
              <td>
                4
              </td>
              <td>
                {distance ? distance["threeToFour"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                3
              </td>
              <td>
                5
              </td>
              <td>
                {distance ? distance["threeToFive"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                4
              </td>
              <td>
                6
              </td>
              <td>
                {distance ? distance["fourToSix"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                5
              </td>
              <td>
                6
              </td>
              <td>
                {distance ? distance["fiveToSix"] : 0}
              </td>
            </tr>
            <tr>
              <td>
                6
              </td>
              <td>
                0
              </td>
              <td>
                {distance ? distance["sixToZero"] : 0}
              </td>
            </tr>
          </table>
          <h3>Predict shortest distance from city 0 to city 6</h3>
          <Box display="flex" alignItems="center">
            <Typography>1</Typography>
            <TextField
              id="standard-basic"
              variant="outlined"
              placeholder="0,0,0,0,0"
              sx={{ margin: "0px 22px" }}
            />
            <Typography>6</Typography>
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
            Reset
          </button>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default ShortestPath;
