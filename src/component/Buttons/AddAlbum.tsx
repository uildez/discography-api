import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import Stack from '@mui/material/Stack';

export function AddAlbum() {
  const {handleAdd} = useContext(AlbumContext);

  return (
    <Stack spacing={2}>
      <Button style={{textTransform: 'none', backgroundColor: "#101010"}} variant="contained" endIcon={<AddIcon />} onClick={handleAdd}>
        Adicionar novo Álbum
      </Button>
    </Stack>
  );
}
