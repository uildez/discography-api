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

import { DeleteTrack } from "../Buttons/DeleteTrack";
import { AddTrack } from "../Buttons/AddTrack";

export function TableSearch() {
  const { searchData, setTrack, handleDeleteTrack, handleDeleteAlbum } =
    useContext(AlbumContext);

  return (
    <>
      {searchData?.map((data) => {
        return (
          <>
            <Toolbar
              sx={{
                display: "flex",
                width: "auto",
                justify: "space-between",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  padding: "1rem 2.5rem",
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
                    marginRight: "2.5rem",
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
            <>
              <TableContainer
                component={Paper}
                sx={{
                  width: "auto",
                  padding: "1rem 3rem",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                  boxShadow: 0,
                }}
              >
                {data.tracks.length > 0 ? (
                  <Table>
                    <TableRow>
                      <TableCell>Nº</TableCell>
                      <TableCell align="right">Faixa</TableCell>
                      <TableCell align="right">Duração</TableCell>
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
                              {track.id}
                            </TableCell>
                            <TableCell align="right">{track.title}</TableCell>
                            <TableCell align="right">
                              {track.duration}
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
                  <>Sem faixas aqui</>
                )}
              </TableContainer>
              <div onClick={() => setTrack({ track: data.id })}>
                <AddTrack />
              </div>
            </>
            <div className="wrap">
              <AddTrack />
            </div>
          </>
        );
      })}
    </>
  );
}

//
