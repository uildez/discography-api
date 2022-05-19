import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteTrack() {
  const {handleDeleteTrack} = useContext(AlbumContext);

  return (
    <Stack spacing={2}>
      <Button style={{textTransform: 'none', backgroundColor: "#000"}} variant="contained" endIcon={<DeleteIcon />} onClick={handleDeleteTrack}>
        Deletar Faixa
      </Button>
    </Stack>
  );
}