import React from 'react';

const BackToHome = () => {
    return (
        <div className="button">
            <a title="Return home" className="btn btn-outline-primary text-uppercase" href={ process.env.PUBLIC_URL + "/" }>Return home</a>
        </div>
    );
};

export default BackToHome;
