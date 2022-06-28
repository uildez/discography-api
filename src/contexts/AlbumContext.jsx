import { createContext, useState, useEffect, FormEvent } from 'react';

import { FormAlbum } from '../component/FormAlbum/FormAlbum';
import { FormTrack } from '../component/FormTrack/FormTrack';
import api from '../services/api'

export const AlbumContext = createContext();

export function AlbumContextProvider({ children }) {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');

    const [track, setTrack] = useState('');
    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    const [openFormModal, setOpenFormModal] = useState(false);
    const [openFormModalAlbum, setOpenFormModalAlbum] = useState(false);

    const [album, setAlbum] = useState([]);
    const [dataAPI, setDataAPI] = useState({});

    useEffect(() => {
        api.get("album").then(({ data }) => {
            setAlbum((data.data));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // Search Bar
    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState({});


    // Search Bar Start
    function searchAlbum(e) {
        e.preventDefault()
        api.get("album?keyword=" + searchText + "&limit=10&page=1").then(function (response) {
            setSearchData(response.data.data);
            if (searchData.length > 0) {
                return
            }
            else {
                null
            }
        }).catch(function (error) {
            console.log(error)
        })
        const searchData = JSON.parse(searchData)
    }



    
    // Form Track Modal Start
    function handleAddTrack(e) {
        e.preventDefault()
        setOpenFormModal(true);
    }
    
    function handleCloseTrack() {
        setOpenFormModal(false);
    }

    function handleSubmitTrack(event) {
        event.preventDefault();
        const trackNumber = track.track
        console.log(trackNumber)

        const newTrack = {
            album_id: trackNumber,
            number: parseInt(number),
            title: title,
            duration: parseInt(duration)
        };

        api.post("track", newTrack, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
            }, (error) => {
                console.log(error);
            });

        handleCloseTrack;
    };



    // Form Album Modal Start
    function handleAdd() {
        setOpenFormModalAlbum(true);
    }

    function handleClose() {
        setOpenFormModalAlbum(false);
    }

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
        handleClose;
    }


    // Delete Album
    function handleDeleteAlbum(album) {
        var id = album.album;
        api.delete("album/" + `${id}`)
    }

    // Delete Track
    function handleDeleteTrack(track) {
        var id = track.track;
        api.delete("track/" + `${id}`)
    }

    return (
        <AlbumContext.Provider value={{
            handleAdd,
            handleClose,
            handleAddTrack,
            handleCloseTrack,
            album,
            setAlbum,


            name,
            setName,
            year,
            setYear,

            track,
            number,
            title,
            duration,

            setTrack,
            setNumber,
            setTitle,
            setDuration,

            handleSubmit,
            handleSubmitTrack,

            searchText,
            setSearchText,
            searchAlbum,
            searchData,
            setSearchData,
            dataAPI,
            setDataAPI,

            handleDeleteAlbum,
            handleDeleteTrack,
        }}>
            {children}
            {openFormModalAlbum && <FormAlbum />}
            {openFormModal && <FormTrack />}
        </AlbumContext.Provider>
    )
}
