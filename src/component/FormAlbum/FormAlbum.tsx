import React, { useContext, useState } from "react";
import { AlbumContext } from "../../contexts/AlbumContext";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import { Button, TextField, Dialog, DialogContent, Box } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export function FormAlbum() {
  const { handleClose, handleSubmit, name, year, setName, setYear } = useContext(AlbumContext);

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={true}
      onClose={handleClose}
      sx={{ style }}
    >
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Título do Album"
            id="name"
            required
          />
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            label="Ano"
            id="year"
            type="number"
            required
          />
          
          <Box
            sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 4 }}
          >
            <Button
              sx={{ textTransform: "none", backgroundColor: "#101010", "&:hover": {backgroundColor: "#ff2418"} }}
              variant="contained"
              endIcon={<CloseIcon />}
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              sx={{ textTransform: "none", backgroundColor: "#101010", "&:hover": {backgroundColor: "#00BC22"} }}
              type="submit"
              variant="contained"
              endIcon={<CheckIcon />}
            >
              Enviar
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}
