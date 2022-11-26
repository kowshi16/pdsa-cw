import React from "react";
import { get } from "lodash";
import * as Yup from "yup";
import { Formik, FieldArray } from "formik";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

const DynamicTextFields = ({ getValue, isReset = false }) => {
  const handleSubmit = (data) => {
    getValue(data);
  };

  return (
    <Formik
      initialValues={{
        dataValues: get("", "dataValues", []),
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray
            name="dataValues"
            render={(arrayHelpers) => (
              <div style={{ width: "100%" }}>
                {values.dataValues && values.dataValues.length > 0 ? (
                  values.dataValues.map((places, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <TextField
                        sx={{ marginTop: "12px" }}
                        id="standard-basic"
                        placeholder="AB 3"
                        variant="outlined"
                        name={`dataValues.${index}`}
                        value={values.dataValues[index]}
                        onBlur={(e) => {
                          setFieldValue(`dataValues[${index}]`, e.target.value);
                        }}
                        onChange={(e) => {
                          setFieldValue(`dataValues[${index}]`, e.target.value);
                        }}
                      />

                      <Box
                        display="flex"
                        justifyContent="center"
                        mt="12px"
                        ml="12px"
                      >
                        <button
                          className="btn"
                          onClick={() => arrayHelpers.insert(index + 1, "")}
                          style={{ marginRight: "12px" }}
                        >
                          +
                        </button>
                        <button
                          className="btn"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Delete
                        </button>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <button
                    sty
                    className="btn"
                    onClick={() => arrayHelpers.push("")}
                  >
                    Add values
                  </button>
                )}
              </div>
            )}
          />
          <button className="btn" style={{ marginTop: "12px" }} type="submit">
            Submit
          </button>
          <button
            className="btn"
            style={{ marginTop: "12px" }}
            type="reset"
            onClick={() => setFieldValue("dataValues", [])}
          >
            Reset
          </button>
        </form>
      )}
    </Formik>
  );
};

export default DynamicTextFields;
