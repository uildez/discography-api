import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'

import api from '../../services/api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { AddAlbum } from '../AddAlbum/AddAlbum'
import { Box, Typography } from '@mui/material';
import { AddTrack } from '../AddTrack/AddTrack';

export function TableAPI() {
  const [album, setAlbum] = useState([]);
  const { searchData } = useContext(AlbumContext);

  useEffect(() => {
    api.get("album").then(({ data }) => {
      setAlbum(data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <TableContainer component={Paper} sx={{ width: 'auto', padding: '1rem 3rem', overflow: 'hidden', backgroundColor: "transparent", boxShadow: 0 }}>
      <Table aria-label="simple table">
        {searchData.length > 0 ?
          <>
            {searchData?.map((data) => {
              return (
                <>
                  <TableContainer>
                    <Typography variant="h6" component="h2" key={data.id} sx={{ padding: '1rem', fontSize: "1rem", fontWeight: "bold", marginTop: '2rem' }}>
                      Albúm: {data.name}, {data.year}
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <DeleteIcon/>
                      </IconButton>
                    </Typography>
                  </TableContainer>

                  {data.tracks.length > 0 ?
                    <>
                      <TableRow>
                        <TableCell>Nº</TableCell>
                        <TableCell align="right">Faixa</TableCell>
                        <TableCell align="right">Duração</TableCell>
                        <TableCell align="right">Ações</TableCell>
                      </TableRow>
                      {data.tracks?.map((track) => (
                        <>
                          <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{track.id}</TableCell>
                            <TableCell align="right">{track.title}</TableCell>
                            <TableCell align="right">{track.duration}</TableCell>
                            <TableCell align="right">
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"><AddTrack /></TableCell>
                        </TableRow>
                      </TableBody>
                    </>
                    :
                    <>
                      <p>Sem Faixas Aqui</p>
                    </>
                  }
                </>
              );
            })}
            <AddAlbum />
          </> :
          <>
            {album?.map((data) => {
              return (
                <>
                  <TableContainer>
                    <Typography variant="h6" component="h2" key={data.id} sx={{ padding: '1rem', fontSize: "1rem", fontWeight: "bold", marginTop: '2rem' }}>
                      Albúm: {data.name}, {data.year}
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <DeleteIcon />
                      </IconButton>
                    </Typography>
                  </TableContainer>

                  {data.tracks.length > 0 ?
                    <>
                      <TableRow>
                        <TableCell>Nº</TableCell>
                        <TableCell align="right">Faixa</TableCell>
                        <TableCell align="right">Duração</TableCell>
                        <TableCell align="right">Ações</TableCell>
                      </TableRow>
                      {data.tracks?.map((track) => (
                        <>
                          <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{track.id}</TableCell>
                            <TableCell align="right">{track.title}</TableCell>
                            <TableCell align="right">{track.duration}</TableCell>
                            <TableCell align="right">
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <DeleteIcon />
                              </IconButton>
                              <IconButton color="primary" aria-label="upload picture" component="span">
                                <EditIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </>
                      ))}
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"><AddTrack /></TableCell>
                        </TableRow>
                      </TableBody>
                    </>
                    :
                    <>
                      <p>Sem Faixas Aqui</p>
                    </>
                  }
                </>
              );
            })}
            <AddAlbum />
          </>
        }
      </Table >
    </TableContainer >
  );

}



//         
