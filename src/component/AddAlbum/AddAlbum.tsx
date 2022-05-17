import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export function AddAlbum() {
  const {handleAdd} = useContext(AlbumContext);

  return (
    <Stack direction="row" spacing={2}>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Deletar
      </Button> */}
      <Button style={{textTransform: 'none'}} variant="contained" endIcon={<AddIcon />} onClick={handleAdd}>
        Adicionar novo Álbum
      </Button>
    </Stack>
  );
}