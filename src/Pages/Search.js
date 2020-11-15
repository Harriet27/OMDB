import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovie } from '../Redux/Actions/MovieAction';
import { Input, Button } from 'semantic-ui-react';
import { Modal, Header } from '../Components';

const Movies = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const movieList = useSelector((state) => state.movie.movieList);

    const handleChange = (e) => {
        setTitle({
            ...title,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearch = (e) => {
        dispatch(searchMovie(title));
        e.preventDefault();
    };

    useEffect(() => {
        document.title = 'Search Movie';
    }, []);

    const renderResult = () => {
        return movieList.map((val,index) => {
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
                    <div style={styles.searchFn}>
                        <Input icon='search' type='text' placeholder='Search movie' name='Title' onChange={handleChange} />
                        <Button secondary onClick={handleSearch} style={styles.searchBtn}>
                            Search
                        </Button>
                    </div>
                    {renderResult()}
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
        backgroundColor: '#033E66',
        color: 'white',
    },
    navs2: {
        fontSize: '1.25rem',
        padding: '0.5rem 1.25rem',
        border: '0.15rem solid #033E66',
        borderRadius: '0.5rem',
        marginBottom: '1rem',
        color: '#033E66',
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
    searchBtn: {
        marginLeft: '0.5rem',
    },
};

export default Movies;
