import React, { useState, useEffect } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HistoryModal = ({ open, onClose, searchedText, searchedToSend }) => {
  const [infoBuscada, setInfoBuscada] = useState([]);

  const columns = [
    { id: "code", label: "Code", width: 150 },
    { id: "name", label: "Name", width: 150 },
    {
      id: "actions",
      label: "Acciones",
      width: 150,
    },
  ];

  useEffect(() => {
    async function getHistory() {
      const response = await axios.get(
        `http://127.0.0.1:8000/historial`,
        null,
        {
          headers: { "Access-Control-Allow-Origin": `*` },
        }
      );
      setInfoBuscada(response.data);
    }
    if (open) getHistory();
  }, [open]);

  const loadHistoryItem = (item) => {
    searchedText(item);
    searchedToSend(item);
    onClose();
  }

  return (
    <>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Historial</DialogTitle>
        <DialogContent>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ width: column.width }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {infoBuscada.length > 0 &&
                  infoBuscada.map((row) => (
                    <TableRow
                      key={row.code}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.code}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        {" "}
                        <Tooltip title="Cargar">
                          <IconButton
                            onClick={() => loadHistoryItem(row.name)}
                            aria-label="delete"
                            size="large"
                          >
                            <ArrowBackIcon fontSize="inherit" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HistoryModal;
