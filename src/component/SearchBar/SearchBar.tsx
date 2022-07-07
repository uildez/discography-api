import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.scss'


export function SearchBar() {
    const { setSearchText, searchAlbum } = useContext(AlbumContext);

    return (
        <div className="search-bar">
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, border: 1, boxShadow: 3 }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Digite sua pesquisa"
                    inputProps={{ 'aria-label': 'Digite sua pesquisa' }}
                    onChange={e => setSearchText(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={e => searchAlbum(e)}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}
