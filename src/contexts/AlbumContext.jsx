import { createContext, useState } from 'react';
import { FormAlbum } from '../component/FormAlbum/FormAlbum';
import { FormTrack } from '../component/FormTrack/FormTrack';
import api from '../services/api'

export const AlbumContext = createContext();

export function AlbumContextProvider({ children }) {

    const [openFormModal, setOpenFormModal] = useState(false);
    const [openFormModalAlbum, setOpenFormModalAlbum] = useState(false);

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
    }
    // Search Bar End


    // Form Track Modal Start
    function handleAdd() {
        setOpenFormModal(true);
    }
    function handleClose() {
        setOpenFormModal(false);
    }
    // Form Track Modal End


    // Form Album Modal Start
    function handleAddAlbum() {
        setOpenFormModalAlbum(true);
    }
    function handleCloseAlbum() {
        setOpenFormModalAlbum(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const album = {
            data: {
                name: name,
                year: year
            }
        }

        api.post("album", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
            }, (error) => {
                console.log(error);
            });

        setOpenFormModal(false);
    }
    // Form Album Modal End



    return (
        <AlbumContext.Provider value={{
            handleAdd,
            handleClose,
            handleAddAlbum,
            handleCloseAlbum,

            handleSubmit,

            searchText,
            setSearchText,
            searchAlbum,
            searchData,
            setSearchData
        }}>
            {children}
            {openFormModal && <FormAlbum />}
            {openFormModalAlbum && <FormTrack />}
        </AlbumContext.Provider>
    )
}
