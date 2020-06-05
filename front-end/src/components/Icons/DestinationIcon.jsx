import React from 'react';

export const DestinationIcon = () => {
    return (
        <div id="map-marker">
            <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path fill="#383e42" d="M64,60.8c-8.78,0-15.89-7.16-15.89-16s7.12-16,15.89-16s15.89,7.16,15.89,16S72.78,60.8,64,60.8 M64,0
			    C39.42,0,19.5,20.06,19.5,44.8C19.5,78.4,64,128,64,128s44.5-49.6,44.5-83.2C108.5,20.06,88.58,0,64,0z"/>
                <ellipse fill="#383e42" cx="64" cy="45" rx="24" ry="22" />
                <path fill="#cceae4" d="M71.08,25.2l-1.28-6.4H41v54.4h6.4V50.8h17.92l1.28,6.4H89v-32H71.08z" />
            </svg>
        </div>
    );

};