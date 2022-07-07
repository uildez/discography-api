import React, { useContext, useState } from "react";
import { AlbumContext } from "../../contexts/AlbumContext";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";

export function FormTrack() {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

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

  function setDurationTimer() {
    const min = parseInt(minutes) * 60;
    const timer = min + parseInt(seconds);
    setDuration(timer);
  }
  setDurationTimer();

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
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "1rem",
              marginBottom: "0rem",
            }}
            variant="h6"
          >
            Duração da faixa
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              label="Minutos"
              type="number"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">min</InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              label="Segundos"
              type="number"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">seg</InputAdornment>
                ),
              }}
            />
          </Box>
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
