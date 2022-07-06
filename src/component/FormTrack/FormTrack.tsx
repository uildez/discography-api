import React, { useContext } from "react";
import { AlbumContext } from "../../contexts/AlbumContext";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import { Button, TextField, Dialog, DialogContent, Box, InputAdornment } from "@mui/material";
import { Circle } from "phosphor-react";

export function FormTrack() {
  const {
    handleCloseTrack,
    number,
    title,
    duration,
    setNumber,
    setTitle,
    setDuration,
    handleSubmitTrack,
  } = useContext(AlbumContext);

  return (
    <Dialog fullWidth maxWidth="md" open={true} onClose={handleCloseTrack}>
      <DialogContent>
        <form onSubmit={handleSubmitTrack}>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            label="Número da Faixa"
            id="number"
            type="number"
            required
          />
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Nome da Faixa"
            id="title"
            required
          />
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            label="Duração"
            id="duration"
            type="number"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  min
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 4 }}
          >
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#101010",
                "&:hover": { backgroundColor: "#ff2418" },
              }}
              variant="contained"
              endIcon={<CloseIcon />}
              onClick={handleCloseTrack}
            >
              Cancelar
            </Button>
            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#101010",
                "&:hover": { backgroundColor: "#00BC22" },
              }}
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
