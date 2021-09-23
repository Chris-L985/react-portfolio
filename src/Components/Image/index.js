import React from 'react';

const Image = ({ link, ...rest }) => {
    if(link) {
        return (
            <a href={link} target="_blank" rel="noreferrer" alt="">
                <img {...rest} />
            </a>
        );
    }
    return <img {...rest} />;
};

export default Image;