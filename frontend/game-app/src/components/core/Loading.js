import React from "react";
import Backdrop from "@mui/material/Backdrop";
import FadeLoader from "react-spinners/FadeLoader";

const Loading = ({ status }) => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: 10000 }}
        open={status}
        onClick={() => null}
      >
        <FadeLoader
          color={"#FFECB5"}
          loading={true}
          // cssOverride={override}
          size={100}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Backdrop>
    </>
  );
};

export default Loading;
