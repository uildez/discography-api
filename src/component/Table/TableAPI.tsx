import React, { useContext } from "react";
import { AlbumContext } from "../../contexts/AlbumContext";

import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { AddAlbum } from "../Buttons/AddAlbum";
import { DeleteTrack } from "../Buttons/DeleteTrack";
import { AddTrack } from "../Buttons/AddTrack";
import { TableSearch } from "./TableSearch";

export function TableAPI() {
  const { searchData, album, handleDeleteTrack, handleDeleteAlbum, setTrack, formatDuration } =
    useContext(AlbumContext);

  return (
    <>
      {searchData.length > 0 ? (
        <>
          <TableSearch />
        </>
      ) : (
        <>
          {album.map((data) => {
            return (
              <>
                <Toolbar key={data.id}
                  sx={{
                    display: "flex",
                    width: "auto",
                    justify: "space-between",
                    padding: "1rem 4rem!important",
                    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
                      padding: "1rem 2rem!important"
                    }
                  }}
                >
                  <Typography
                    sx={{
                      width: "100%",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                  >
                    Albúm: {data.name}, {data.year}
                  </Typography>
                  <Tooltip title="Deletar Álbum" arrow>
                    <IconButton
                      sx={{
                        color: "#fff",
                        backgroundColor: "#101010",
                        "&:hover": { backgroundColor: "#ff2418" },
                      }}
                      onClick={() => handleDeleteAlbum({ album: data.id })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Toolbar>

                <TableContainer
                  component={Paper}
                  sx={{
                    width: "auto",
                    padding: "1rem 3rem",
                    overflow: "hidden",
                    backgroundColor: "transparent",
                    boxShadow: 0,
                    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
                      padding: "1rem"
                    }
                  }}
                >
                  {data.tracks.length > 0 ? (
                    <Table key={data.id}>
                      <TableRow>
                        <TableCell>Nº</TableCell>
                        <TableCell align="left">Faixa</TableCell>
                        <TableCell align="left">Duração</TableCell>
                        <TableCell align="right">Acões</TableCell>
                      </TableRow>
                      <>
                        {data.tracks?.map((track) => (
                          <>
                            <TableRow
                              key={data.id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {track.number}
                              </TableCell>
                              <TableCell align="left">{track.title}</TableCell>
                              <TableCell align="left">
                                {`${formatDuration({duration: track.duration})}`}
                              </TableCell>
                              <TableCell
                                align="right"
                                onClick={() =>
                                  handleDeleteTrack({ track: track.id })
                                }
                              >
                                <DeleteTrack />
                              </TableCell>
                            </TableRow>
                          </>
                        ))}
                      </>
                    </Table>
                  ) : (
                    <>
                      <TableRow>
                        <TableCell>Sem Faixas aqui</TableCell>
                      </TableRow>
                    </>
                  )}
                </TableContainer>
                <div className="addButton" onClick={() => setTrack({ track: data.id })}>
                  <AddTrack />
                </div>
              </>
            );
          })}
        </>
      )}
      <div className="wrap">
        <AddAlbum />
      </div>
    </>
  );
}
