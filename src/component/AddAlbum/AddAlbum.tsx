import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import Stack from '@mui/material/Stack';

export function AddAlbum() {
  const {handleAdd,handleDeleteAlbum} = useContext(AlbumContext);

  return (
    <Stack spacing={2}>
      <Button style={{textTransform: 'none', backgroundColor: "#000"}} variant="contained" endIcon={<AddIcon />} onClick={handleAdd}>
        Adicionar novo Álbum
      </Button>
      <Button style={{textTransform: 'none', backgroundColor: "#000"}} variant="contained" endIcon={<DeleteIcon />} onClick={handleDeleteAlbum}>
        Deletar Álbum
      </Button>
    </Stack>
  );
}
