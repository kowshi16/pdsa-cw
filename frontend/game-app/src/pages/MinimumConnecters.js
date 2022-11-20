import React, { useEffect } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import DynamicTextFields from "../components/DynamicTextFields";
import Swal from "sweetalert2";
import MinimumConnectorImg from "../assets/img/minimum-connector.jpg";
import { getDistances } from "../components/api/minimumConnectorAPI";

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
  const [distance, setDistance] = React.useState();

  useEffect(() => {
    getDistances()
      .then((res) => setDistance(res.data))
      .catch((e) => console.log(e));
  }, []);

  console.log("distances >>>>>>>", distance);


  return (
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
              <td>
                A
              </td>
              <td>
                B
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                A
              </td>
              <td>
                D
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                A
              </td>
              <td>
                E
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                B
              </td>
              <td>
                C
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                C
              </td>
              <td>
                G
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                D
              </td>
              <td>
                F
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                E
              </td>
              <td>
                G
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                F
              </td>
              <td>
                G
              </td>
              <td>0</td>
            </tr>
          </table>
          <h3>Let find the minimum connectors starting from city 8</h3>
          <Box>
            <DynamicTextFields getValue={(val) => console.log(val)} />
          </Box>
        </Box>
      </Box>
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
    </Sidebar>
  );
};

export default MinimumConnecters;
