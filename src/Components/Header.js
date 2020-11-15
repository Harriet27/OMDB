import React from 'react';

const SearchHeader = () => {
    return (
        <div style={styles.container}>
            O.M.Db
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '3rem 0rem',
        fontSize: '3.5rem',
    },
};

export default SearchHeader;
