import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export function AddTrack() {
  const {handleAddAlbum} = useContext(AlbumContext);

  return (
    <Stack justifyContent="flex-end" direction="row" spacing={2}>
      <Button style={{textTransform: 'none'}} variant="contained" startIcon={<AddIcon />} onClick={handleAddAlbum}>
        Adicionar nova faixa
      </Button>
    </Stack>
  );
}