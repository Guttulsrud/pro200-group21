import React from 'react';
import { SearchIcon } from '../components/Icons/SearchIcon';
import { TicketIcon } from '../components/Icons/TicketIcon';
import { ProfileIcon } from '../components/Icons/ProfileIcon';

export const items = [
    {
        title: 'Ny reise',
        icon: <SearchIcon />,
        link: '/'
    },
    {
        title: 'Billett',
        icon: <TicketIcon />,
        link: '/ticket'
    },
    {
        title: 'Profil',
        icon: <ProfileIcon />,
        link: '/demopage'
    }
];