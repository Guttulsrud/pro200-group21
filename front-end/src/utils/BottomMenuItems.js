import React from 'react';
import { SearchIcon } from '../components/Svg/SearchIcon';
import { MapIcon } from '../components/Svg/MapIcon';
import { TicketIcon } from '../components/Svg/TicketIcon';
import { ProfileIcon } from '../components/Svg/ProfileIcon';

export const items = [
    {
        title: 'Ny reise',
        icon: <SearchIcon />,
        link: '#'
    },
    {
        title: 'Sanntidskart',
        icon: <MapIcon />,
        link: '#'
    },
    {
        title: 'Bilett',
        icon: <TicketIcon />,
        link: '#'
    },
    {
        title: 'Profil',
        icon: <ProfileIcon />,
        link: '#'
    }
];