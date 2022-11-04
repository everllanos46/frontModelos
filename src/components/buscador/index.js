import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DashBoard from "../dashboard";

function Buscador() {
  // const [validar, setValidar] = useState(false);
  // useEffect(async () => {
  //   if (!validar) {
  //     const response = await axios.post(
  //       `http://127.0.0.1:8000/getTweets/Valledupar`,
  //       null,
  //       {
  //         headers: { "Access-Control-Allow-Origin": `*` },
  //       }
  //     );
  //     setValidar(true);
  //   }
  // }, []);
  const [buscadorB, setBuscador] = useState("");
  const [buscadorEnviar, setBuscadorEnviar] = useState("");

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ backgroundColor: "#1DA1F2", width: "100%", height: "90px" }}
      >
        <Grid
          container
          style={{ marginLeft: "39%", width: "700px" }}
          spacing={1}
        >
          <Grid item style={{ marginTop: "3%" }}>
            <TextField
              id="outlined-basic"
              label="Tema interés"
              variant="outlined"
              size="small"
              onChange={(value) => {
                setBuscador(value.target.value);
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                },
              }}
              InputProps={{
                sx: {
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "1px solid white",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "1px solid white",
                    },
                  },
                },
              }}
            />
          </Grid>
          <Grid item style={{ marginTop: "3%" }}>
            <Button
              style={{
                color: "#FFFFFF",
                textShadow: "0.1em 0.1em 0.1em black",
              }}
              onClick={() => {
                setBuscadorEnviar(buscadorB);
              }}
            >
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <DashBoard buscador={buscadorEnviar} />
    </>
  );
}

export default Buscador;
