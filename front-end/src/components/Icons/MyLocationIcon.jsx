import React from 'react';

export const MyLocationIcon = (props) => {
    return (
        <React.Fragment>
            <div onClick={props.showCurrentLocation} id='my-location'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                >
                    <path d='M0 0h24v24H0V0z' fill='none'/>
                    <path d='M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z'/>
                </svg>
            </div>
        </React.Fragment>
    );
};
