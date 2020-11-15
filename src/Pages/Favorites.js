import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorite, removeFavorite } from '../Redux/Actions/MovieAction';
import { Button } from 'semantic-ui-react';
import { Modal, Header } from '../Components';
import Swal from 'sweetalert2';

const FavoritesListTest = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'My Favorites';
        dispatch(getFavorite());
    }, [dispatch]);

    const favoriteList = useSelector((state) => state.movie.favoriteList);

    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFavorite(id));
                Swal.fire(
                    'Removed!',
                    'Movie has been removed from favorites.',
                    'success',
                );
                window.location.reload();
            }
        }).catch((error) => {
            console.log(error);
        })
    };

    const renderFavorite = () => {
        return favoriteList.map((val,index) => {
            return (
                <div key={index}>
                    <Modal
                        poster={val.Poster}
                        title={val.Title}
                        year={val.Year}
                        released={val.Released}
                        director={val.Director}
                        actors={val.Actors}
                        plot={val.Plot}
                        awards={val.Awards}
                    />
                    <div style={styles.removeBtn}>
                        <Button color='red' onClick={() => handleRemove(val.id)}>
                            Remove
                        </Button>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <Header />
            <div style={styles.container}>
                <div style={styles.navigation}>
                    <a href='/' style={{textDecoration:'none'}}>
                        <div style={styles.navs1}>
                            Search
                        </div>
                    </a>
                    <a href='/favorites' style={{textDecoration:'none'}}>
                        <div style={styles.navs2}>
                            My Favorites
                        </div>
                    </a>
                </div>
                <div style={styles.searchArea}>
                    {renderFavorite()}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        borderRadius: '1rem',
        boxShadow: '0 0 0.5rem #CFCFCF',
        height: '30rem',
        padding: '2rem',
        margin: '0rem 20rem',
    },
    navigation: {
        display: 'flex',
        justifyContent: 'center',
    },
    navs1: {
        fontSize: '1.25rem',
        marginRight: '1rem',
        padding: '0.5rem 1.25rem',
        border: '0.15rem solid #033E66',
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        color: '#033E66',
    },
    navs2: {
        fontSize: '1.25rem',
        padding: '0.5rem 1.25rem',
        border: '0.15rem solid #033E66',
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        backgroundColor: '#033E66',
        color: 'white',
    },
    searchArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    searchFn: {
        display: 'flex',
        justifyContent: 'center',
    },
    removeBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-1rem',
    },
};

export default FavoritesListTest;
