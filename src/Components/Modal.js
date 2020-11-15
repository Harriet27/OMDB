import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import { addFavorite } from '../Redux/Actions/MovieAction';
 
const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '1.5rem',
        padding: '2rem',
    },
};
 
const ModalTest = (props) => {
    const dispatch = useDispatch();

    const [modalIsOpen,setIsOpen] = useState(false);

    const movieList = useSelector((state) => state.movie.movieList);

    let subtitle;
    function afterOpenModal () {
        subtitle.style.color = '#000';
    };

    function openModal () {
        setIsOpen(true);
    };

    function closeModal () {
        setIsOpen(false);
    };

    let Title = '';
    let Year = '';
    let Rated
    let Released = '';
    let Runtime = '';
    let Genre = '';
    let Director = '';
    let Writer = '';
    let Actors = '';
    let Plot = '';
    let Language = '';
    let Country = '';
    let Awards = '';
    let Poster = '';
    movieList.map((val, index) => {
        return (
            <div key={index}>
                {Title = val.Title}
                {Year = val.Year}
                {Rated = val.Rated}
                {Released = val.Released}
                {Runtime = val.Runtime}
                {Genre = val.Genre}
                {Director = val.Director}
                {Writer = val.Writer}
                {Actors = val.Actors}
                {Plot = val.Plot}
                {Language = val.Language}
                {Country = val.LCountry}
                {Awards = val.Awards}
                {Poster = val.Poster}
            </div>
        );
    });
    let data = {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
    };

    function handleAddFav () {
        dispatch(addFavorite(data));
        Swal.fire(
            'Success!',
            'Movie added to Favorites',
            'success',
        );
    };

    return (
        <div>
            <div onClick={openModal} style={styles.openModal}>
                ~ {props.title} ~
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>
                    Movie: {props.title}
                </h2>
                <div style={styles.content}>
                    <img src={props.poster} alt='movie poster' style={{height:'25rem'}} />
                    <div style={styles.detail}>
                        <div style={styles.movieDetail}>
                            <b>Title: {props.title}</b>
                        </div>
                        <div style={styles.movieDetail}>
                            <b>Year: </b>{props.year}
                        </div>
                        <div style={styles.movieDetail}>
                            <b>Released: </b>{props.released}
                        </div>
                        <div style={styles.movieDetail}>
                            <b>Director: </b>{props.director}
                        </div>
                        <div style={styles.movieDetail}>
                            <b>Actors: </b>{props.actors}
                        </div>
                        <div style={styles.movieDetail}>
                            <b>Plot: </b>{props.plot}
                        </div>
                        <div style={styles.movieDetail}>
                            <b>Awards: </b>{props.awards}
                        </div>
                    </div>
                </div>
                <div style={styles.btnGroup}>
                    <Button color='primary' onClick={handleAddFav} style={styles.addBtn}>
                        Add to Favorite
                    </Button>
                    <Button outline color='danger' onClick={closeModal} style={styles.closeBtn}>
                        Close
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

const styles = {
    content: {
        display: 'flex',
    },
    openModal: {
        borderRadius: '0.75rem',
        cursor: 'pointer',
        margin: '1.25rem 0rem',
        fontSize: '1.25rem',
        fontWeight: '600',
        padding: '0.5rem 15rem',
        boxShadow: '0 0 0.35rem #CFCFCF',
    },
    detail: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0rem 2rem',
        width: '20rem',
    },
    movieDetail: {
        margin: '0.5rem 0rem',
        fontSize: '1.15rem',
    },
    btnGroup: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    closeBtn: {
        margin: '1rem',
        marginBottom: '0rem',
    },
    addBtn: {
        margin: '1rem',
        marginBottom: '0rem',
    },
};

export default ModalTest;
