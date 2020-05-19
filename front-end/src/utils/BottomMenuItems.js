import React from 'react';
import { SearchIcon } from '../components/Icons/SearchIcon';
import { MapIcon } from '../components/Icons/MapIcon';
import { TicketIcon } from '../components/Icons/TicketIcon';
import { ProfileIcon } from '../components/Icons/ProfileIcon';

export const items = [
    {
        title: 'Ny reise',
        icon: <SearchIcon />,
        link: '/'
    },
    {
        title: 'Sanntidskart',
        icon: <MapIcon />,
        link: '/livemap'
    },
    {
        title: 'Bilett',
        icon: <TicketIcon />,
        link: '/ticket'
    },
    {
        title: 'Demo',
        icon: <ProfileIcon />,
        link: '/demopage'
    }
];