import React from 'react';

const ScreenOverlay = ({children}) => {
    return (
        <div className="screen-overlay d-flex justify-content-center align-items-center h-100 w-100">
            {children}
        </div>
    );
}

export default ScreenOverlay;