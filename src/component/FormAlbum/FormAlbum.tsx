import React, { useContext, useState } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import api from '../../services/api';
import axios from 'axios';

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
    const [name, setName] = useState('');
    const [year, setYear] = useState('');

    const {
        handleAddAlbum,
        handleCloseAlbum
    } = useContext(AlbumContext);

    function handleSubmit(event) {
        event.preventDefault();

        const album = {
            name: name,
            year: year
        }

        api.post("album", album, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
            }, (error) => {
                console.log(error);
            });
        console.log(album)
        handleCloseAlbum;
    }
    


    return (
        <div>
            <Dialog open={handleAddAlbum} onClose={handleCloseAlbum} sx={{ style }}>
                <DialogTitle>Adicionar Nova Faixa</DialogTitle>
                <DialogContent>
                    <TextField fullWidth sx={{ mt: 2 }} value={name} onChange={(e) => { setName(e.target.value);}} label="Título do Album" id="name" />
                    <TextField fullWidth sx={{ mt: 2 }} value={year} onChange={(e) => { setYear(e.target.value);}} label="Ano" id="year" /> {/* Mudar para ano */}
                </DialogContent>
                <DialogActions>
                    <Button form="my-form-id" variant="contained" endIcon={<CloseIcon />} onClick={handleCloseAlbum} />
                    <Button style={{ textTransform: 'none' }} type='submit' variant="contained" endIcon={<CheckIcon />} onClick={handleSubmit}>
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}









