import React, { useEffect } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, Typography, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import ShortestPathImg from "../assets/img/shortest-path.png";
import Swal from "sweetalert2";
import { findShortestPath, getDistances } from "../components/api/shortestPathAPI";

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
  const [enteredDistances, setEnteredDistances] = React.useState("");

  useEffect(() => {
    const getDistance = async () => {
      getDistances().then((res) => {
        setDistance(res.data);
      });
    };

    getDistance();
  }, []);

  console.log("distance >>>>>>>", distance);

  const graphItems = [
    [
      0,
      distance ? distance["zeroToOne"] : 0,
      0,
      0,
      0,
      0,
      distance ? distance["sixToZero"] : 0,
    ],
    [
      distance ? distance["zeroToOne"] : 0,
      0,
      distance ? distance["oneToTwo"] : 0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      distance ? distance["oneToTwo"] : 0,
      0,
      distance ? distance["twoToThree"] : 0,
      0,
      0,
      0,
    ],
    [
      0,
      0,
      distance ? distance["oneToTwo"] : 0,
      0,
      distance ? distance["threeToFour"] : 0,
      distance ? distance["threeToFive"] : 0,
      0,
    ],
    [
      0,
      0,
      0,
      distance ? distance["threeToFour"] : 0,
      0,
      0,
      distance ? distance["fourToSix"] : 0,
    ],
    [
      0,
      0,
      0,
      distance ? distance["threeToFive"] : 0,
      0,
      0,
      distance ? distance["fiveToSix"] : 0,
    ],
    [
      distance ? distance["sixToZero"] : 0,
      0,
      0,
      0,
      distance ? distance["fourToSix"] : 0,
      distance ? distance["fiveToSix"] : 0,
      0,
    ],
  ];

  const handleSubmit = () => {
    // Submit button click
    console.log(enteredDistances);

    const payload = {
      graph: graphItems
    };
    console.log("payload >>>>>>", payload);
    findShortestPath(payload)
    .then((res) => {
      res.data === "Congratulations! Your answer is correct!"
        ? Swal.fire({
            title: "Successful",
            text: res.data,
            icon: "success",
          }).then(function () {
            window.location.reload();
          })
        : Swal.fire({
            title: "Incorrect",
            text: res.data,
            icon: "error",
          });
    })
    .catch((error) => {
      Swal.fire({
        title: "Something went wrong",
        text: "Sorry an error occurred. Please try again.",
        icon: "warning",
      });
    });
  };

  const handleChange = (e) => {
    setEnteredDistances(e.target.value);
  };

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
              <td>0</td>
              <td>1</td>
              <td>{distance ? distance["zeroToOne"] : 0}</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>{distance ? distance["oneToTwo"] : 0}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>{distance ? distance["twoToThree"] : 0}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>{distance ? distance["threeToFour"] : 0}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>5</td>
              <td>{distance ? distance["threeToFive"] : 0}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>6</td>
              <td>{distance ? distance["fourToSix"] : 0}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>{distance ? distance["fiveToSix"] : 0}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>0</td>
              <td>{distance ? distance["sixToZero"] : 0}</td>
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
              onChange={handleChange}
              value={enteredDistances}
            />
            <Typography>6</Typography>
          </Box>
          <button
            className="btn"
            style={{ marginTop: "12px" }}
            type="reset"
            value={enteredDistances}
            onClick={() => setEnteredDistances("")}
          >
            Reset
          </button>
        </Box>
      </Box>
      <Box>
        <Box>
          <button
            className="btn"
            style={{ marginTop: "24px", marginRight: "12px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default ShortestPath;
