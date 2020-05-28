import React from 'react';
import { Div } from '../../elements/divs/Div';

export const SubIcon = (props) => {
    return (
        <Div m={"auto"} height={20} width={20}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 0 24 24'
                width='20'
            >
                <path d='M19 13H5v-2h14v2z' fill={props.inactive ? '003a70' : '#fff'} />
                <path d='M0 0h24v24H0z' fill='none' />
            </svg>
        </Div>
    );
};