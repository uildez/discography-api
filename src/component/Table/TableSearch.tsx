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
  const {
    searchData,
    setTrack,
    handleDeleteTrack,
    handleDeleteAlbum,
    formatDuration,
  } = useContext(AlbumContext);

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
                padding: "1rem 4rem!important",
                ["@media (max-width:780px)"]: {
                  // eslint-disable-line no-useless-computed-key
                  padding: "1rem 2rem!important",
                },
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
            <>
              <TableContainer
                component={Paper}
                sx={{
                  width: "auto",
                  padding: "1rem 3rem",
                  overflow: "hidden",
                  backgroundColor: "transparent",
                  boxShadow: 0,
                  ["@media (max-width:780px)"]: {
                    // eslint-disable-line no-useless-computed-key
                    padding: "1rem",
                  },
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
                              {track.number}
                            </TableCell>
                            <TableCell align="right">{track.title}</TableCell>
                            <TableCell align="right">
                              {`${formatDuration({
                                duration: track.duration,
                              })}`}
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
          </>
        );
      })}
    </>
  );
}

//
