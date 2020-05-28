import React from 'react';
import { Div } from '../../elements/divs/Div';

export const AddIcon = () => {
    return (
        <Div m={"auto"} height={20} width={20}>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                height='20'
                viewBox='0 0 24 24'
                width='20'
            >
                <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' fill='#fff' />
                <path d='M0 0h24v24H0z' fill='none' />
            </svg>
        </Div>
    );
};