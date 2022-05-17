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

export function FormTrack() {
    const {
        handleAddAlbum,
        handleCloseAlbum,
    } = useContext(AlbumContext);

    const [album, setAlbum] = useState('');
    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    // function setFormValues(albumTrack, numberTrack, titleTrack, duractionTrack){
    //     setAlbum(album)
    //     setNumber(number)
    //     setTitle(title)
    //     setDuration(duration)
    // }
    
    function handleSubmitTrack() {
        event.preventDefault();

        const track = {
            album_id: album,
            number: parseInt(number),
            title: title,
            duration: parseInt(duration)
        };

        api.post("track", track)
    };
    
    return (
        <div>
            <Dialog open={handleAddAlbum} onClose={handleCloseAlbum} sx={{ style }}>
                <DialogTitle>Adicionar Nova Faixa</DialogTitle>
                <DialogContent>
                    <TextField fullWidth sx={{ mt: 2 }} value={album} onChange={(e) => { setAlbum(e.target.value); }} type="number" label="Número do Album" id="album_id" />
                    <TextField fullWidth sx={{ mt: 2 }} value={number} onChange={(e) => { setNumber(e.target.value); }} label="Nome da Faixa" id="number" />
                    <TextField fullWidth sx={{ mt: 2 }} value={title} onChange={(e) => { setTitle(e.target.value); }} label="Número da Faixa" id="title" />
                    <TextField fullWidth sx={{ mt: 2 }} value={duration} onChange={(e) => { setDuration(e.target.value); }} label="Duração" id="duration" /> {/* Mudar para ano */}
                </DialogContent>
                <DialogActions>
                    <Button form="my-form-id" variant="contained" endIcon={<CloseIcon />} onClick={handleCloseAlbum} />
                    <Button style={{ textTransform: 'none' }} type='submit' variant="contained" endIcon={<CheckIcon />} onClick={handleSubmitTrack}>
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
