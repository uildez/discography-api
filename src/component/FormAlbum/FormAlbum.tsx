import React, { useContext, useState } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

export function FormAlbum() {
    const {
        handleAdd,
        handleClose,
        handleSubmit,
        name, 
        year, 
        setName,
        setYear
    } = useContext(AlbumContext);

    return (
        <div>
            <Dialog open={handleAdd} onClose={handleClose} sx={{ style }}>
                <DialogTitle>Adicionar Novo Album</DialogTitle>
                <DialogContent>
                    <TextField fullWidth sx={{ mt: 2 }} value={name} onChange={(e) => setName(e.target.value)} label="Título do Album" id="name" />
                    <TextField fullWidth sx={{ mt: 2 }} value={year} onChange={(e) => setYear(e.target.value)} label="Ano" id="year" /> {/* Mudar para ano */}
                </DialogContent>
                <DialogActions>
                    <Button sx={{ textTransform: 'none', backgroundColor: "#000" }} variant="contained" endIcon={<CloseIcon />} onClick={handleClose}>
                        Cancelar    
                    </Button>
                    <Button sx={{ textTransform: 'none', backgroundColor: "#000" }} type='submit' variant="contained" endIcon={<CheckIcon />} onClick={handleSubmit}>
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}









