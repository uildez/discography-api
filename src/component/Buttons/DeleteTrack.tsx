import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';

export function DeleteTrack() {
  const {handleDeleteTrack} = useContext(AlbumContext);

  return (  
    <Tooltip title="Deletar Faixa" arrow>
      <IconButton
        sx={{ color: "#fff",backgroundColor: "#101010", "&:hover": { backgroundColor: "#ff2418" } }}
        onClick={handleDeleteTrack}
      >
        <DeleteIcon/>
      </IconButton>
    </Tooltip>
  );
}