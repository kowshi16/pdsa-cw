import React, { useEffect } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import DynamicTextFields from "../components/DynamicTextFields";
import Swal from "sweetalert2";
import MinimumConnectorImg from "../assets/img/minimum-connector.jpg";
import { findMinimumConnector, getDistances } from "../components/api/minimumConnectorAPI";
import Loading from "../components/core/Loading";

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
  const [distance, setDistance] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(true);
  const [isReset, setIsReset] = React.useState(false);
  let edgeWeightItems = [];

  useEffect(() => {
    const getDistance = async () => {
      getDistances().then((res) => {
        setDistance(res.data);
      });

      setisLoading(false);
    };

    getDistance();
  }, []);

  const graphItems = [
    [
      0,
      distance ? distance["atoB"] : 0,
      distance ? distance["atoD"] : 0,
      0,
      distance ? distance["atoE"] : 0,
      0,
      0,
    ],
    [
      distance ? distance["atoB"] : 0,
      distance ? distance["btoC"] : 0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      0,
      distance ? distance["btoC"] : 0,
      0,
      0,
      0,
      0,
      distance ? distance["ctoG"] : 0,
    ],
    [
      distance ? distance["atoD"] : 0,
      0,
      0,
      0,
      0,
      distance ? distance["dtoF"] : 0,
      0,
    ],
    [
      distance ? distance["atoE"] : 0,
      0,
      0,
      0,
      0,
      0,
      distance ? distance["etoG"] : 0,
    ],
    [
      0,
      0,
      0,
      distance ? distance["dtoF"] : 0,
      0,
      0,
      distance ? distance["ftoG"] : 0,
    ],
    [
      0,
      0,
      distance ? distance["ctoG"] : 0,
      0,
      distance ? distance["etoG"] : 0,
      distance ? distance["ftoG"] : 0,
      0,
    ],
  ];

  console.log("distance >>>>>>>", distance);

  console.log("graph >>>>", graphItems);

  const handleSubmit = () => {
    const payload = {
      graph: graphItems
    };
    console.log("payload >>>>>>", payload);
    findMinimumConnector(payload)
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

  return (
    <>
      <Loading status={isLoading} />
      <Sidebar>
        <h1 style={{ textTransform: "uppercase" }}>
          Identify minimum connecters
        </h1>
        <Box display="flex">
          <BoxWindow>
            <img src={MinimumConnectorImg} alt="" style={{ width: "100%" }} />
          </BoxWindow>
          <Box ml="36px" mt="48px">
            <table className="table_minium">
              <tr>
                <th>From City</th>
                <th>To City</th>
                <th>Distance</th>
              </tr>
              <tr>
                <td>A</td>
                <td>B</td>
                <td>{distance ? distance["atoB"] : 0}</td>
              </tr>
              <tr>
                <td>A</td>
                <td>D</td>
                <td>{distance ? distance["atoD"] : 0}</td>
              </tr>
              <tr>
                <td>A</td>
                <td>E</td>
                <td>{distance ? distance["atoE"] : 0}</td>
              </tr>
              <tr>
                <td>B</td>
                <td>C</td>
                <td>{distance ? distance["btoC"] : 0}</td>
              </tr>
              <tr>
                <td>C</td>
                <td>G</td>
                <td>{distance ? distance["ctoG"] : 0}</td>
              </tr>
              <tr>
                <td>D</td>
                <td>F</td>
                <td>{distance ? distance["dtoF"] : 0}</td>
              </tr>
              <tr>
                <td>E</td>
                <td>G</td>
                <td>{distance ? distance["etoG"] : 0}</td>
              </tr>
              <tr>
                <td>F</td>
                <td>G</td>
                <td>{distance ? distance["ftoG"] : 0}</td>
              </tr>
            </table>
            <h3>Let find the minimum connectors starting from city A</h3>
            <Typography>Eg:- AB 3</Typography>
            <Box>
              <DynamicTextFields isReset={isReset} getValue={handleSubmit} />
            </Box>
          </Box>
        </Box>
      </Sidebar>
    </>
  );
};

export default MinimumConnecters;
