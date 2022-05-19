import React, { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumContext'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { AddAlbum } from '../AddAlbum/AddAlbum'
import { DeleteTrack } from '../DeleteTrack/DeleteTrack'
import { Typography } from '@mui/material';
import { AddTrack } from '../AddTrack/AddTrack';

export function TableAPI() {
  const { searchData, album } = useContext(AlbumContext);

  return (
    <>
      <TableContainer component={Paper} sx={{ width: 'auto', padding: '1rem 3rem', overflow: 'hidden', backgroundColor: "transparent", boxShadow: 0 }}>
        <Table aria-label="simple table">
          {searchData.length > 0 ?
            <>
              {searchData?.map((data) => {
                return (
                  <>
                    <TableContainer>
                      <Typography variant="h6" component="h2" key={data.id} sx={{ padding: '1rem', fontSize: "1rem", fontWeight: "bold", marginTop: '2rem' }}>
                        Albúm: {data.name}, {data.year} | ID: {data.id}

                      </Typography>
                    </TableContainer>

                    {data.tracks.length > 0 ?
                      <>
                        <TableRow>
                          <TableCell>Nº</TableCell>
                          <TableCell align="right">Faixa</TableCell>
                          <TableCell align="right">Duração</TableCell>
                        </TableRow>
                        {data.tracks?.map((track) => (
                          <>
                            <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell component="th" scope="row">{track.id}</TableCell>
                              <TableCell align="right">{track.title}</TableCell>
                              <TableCell align="right">{track.duration}</TableCell>
                            </TableRow>
                          </>
                        ))}
                        <TableBody>
                          <TableRow>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"><DeleteIcon /></TableCell>
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
              {album.map((data) => {
                return (
                  <>
                    <TableContainer>
                      <Typography variant="h6" component="h2" key={data.id} sx={{ padding: '1rem', fontSize: "1rem", fontWeight: "bold", marginTop: '2rem' }}>
                        Albúm: {data.name}, {data.year} | ID: {data.id}
                      </Typography>
                    </TableContainer>

                    {data.tracks.length > 0 ?
                      <>
                        <TableRow>
                          <TableCell>Nº</TableCell>
                          <TableCell align="right">Faixa</TableCell>
                          <TableCell align="right">Duração</TableCell>
                        </TableRow>
                        {data.tracks?.map((track) => (
                          <>
                            <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                              <TableCell component="th" scope="row">{track.id}</TableCell>
                              <TableCell align="right">{track.title}</TableCell>
                              <TableCell align="right">{track.duration}</TableCell>
                            </TableRow>
                          </>
                        ))}
                        <TableBody>
                          <TableRow>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"><DeleteTrack /></TableCell>
                            <TableCell align="right"><AddTrack /></TableCell>
                          </TableRow>
                        </TableBody>
                      </>
                      :
                      <>
                        <TableRow>
                          <TableCell>Nenhuma Faixa Disponível</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"><AddTrack /></TableCell>
                        </TableRow>
                      </>
                    }
                  </>
                );
              })}
            </>
          }
        </Table >
        <AddAlbum />
      </TableContainer >
    </>
  );

}



//
