import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

export function AddTrack() {
  const {handleAddTrack} = useContext(AlbumContext);

  return (
    <Stack justifyContent="flex-end" direction="row" sx={{mr:8, mb:10}}>
      <Button style={{textTransform: 'none', backgroundColor: "#101010"}} variant="contained" startIcon={<AddIcon />} onClick={handleAddTrack}>
        Adicionar nova faixa
      </Button>
    </Stack>
  );
}