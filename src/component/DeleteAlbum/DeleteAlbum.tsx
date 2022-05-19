import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteAlbum() {
  const {handleDeleteAlbum} = useContext(AlbumContext);

  return (
    <Stack spacing={2}>
      <Button style={{textTransform: 'none'}} variant="contained" endIcon={<DeleteIcon />} onClick={handleDeleteAlbum}>
        Deletar Álbum
      </Button>
    </Stack>
  );
}