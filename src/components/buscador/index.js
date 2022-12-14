import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DashBoard from "../dashboard";
import HistoryModal from "./historial";

function Buscador() {
  const [validar, setValidar] = useState(false);
  const [buscadorB, setBuscador] = useState("");
  const [infoBuscada, setInfoBuscada] = useState([]);
  const [buscadorEnviar, setBuscadorEnviar] = useState("");
  const [abrirModalHistorial, setAbrirModalHistorial] = useState(false);

  const closeOpenDialog = (state) => {
    setAbrirModalHistorial(state);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post(
        `http://127.0.0.1:8000/getTweets/${buscadorEnviar}`,
        null,
        {
          headers: { "Access-Control-Allow-Origin": `*` },
        }
      );
      setInfoBuscada(response.data.message);
    }
    if (buscadorEnviar !== "") fetchData();
  }, [buscadorEnviar]);

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
              value={buscadorB}
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
            <Button
              style={{
                color: "#FFFFFF",
                textShadow: "0.1em 0.1em 0.1em black",
              }}
              onClick={() => {
                closeOpenDialog(true);
              }}
            >
              Historial
            </Button>
          </Grid>
        </Grid>
      </Box>
      <DashBoard buscador={buscadorEnviar} info={infoBuscada} />
      <HistoryModal open={abrirModalHistorial} onClose={() => closeOpenDialog(false)} searchedText={setBuscador} searchedToSend={setBuscadorEnviar} />
    </>
  );
}

export default Buscador;
