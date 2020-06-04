import React from 'react';

export const ChevronRightBig = (props) => {
    return (
        <React.Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z" fill={props.fill} /></svg>
        </React.Fragment>
    );

};
