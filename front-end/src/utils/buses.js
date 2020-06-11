function randTime() {
    return Math.floor(Math.random() * 11) + 4;
}

function randCap() {
    return Math.floor(Math.random() * 16) + 1;
}

function randLoc() {
    return Math.floor(Math.random() * streets.length);
}

const streets = ['Biermannsgate', 'Rådhusgata', 'Tollbugata', 'Karlstadgata', 'Sporveisgata', 'Majorstuveien',
    'Bogstadveien', 'Olaf Schcous vei', 'Dælenenggata', 'Suhms gate', 'Pilestredet',
    'Akersbakken', 'Tidemands gate', 'St. Edmunds vei', 'Blokkaveien', 'Skogveien',
    'Trondheimsveien', 'Østensjøveien', 'Vogts gate', 'Colletts gate', 'Stortingsgata',
    'Ruseløkkveien', 'Frognerveien', 'Bygdøy allé', 'Toftes Gate'];

const buses = [
    {
        name: 'Vyvian 521',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vylde 416',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vydar 832',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vybekke 190',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vylmer 387',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vyggo 187',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vyktor 313',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vyktoria 745',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    }, {
        name: 'Vyljar 618',
        eta: randTime(),
        cap: randCap(),
        currentLoc: streets[randLoc()]
    },
];

buses.sort((a, b) => (a.eta > b.eta) ? 1 : (a.eta === b.eta) ? ((a.cap < b.cap) ? 1 : -1) : -1);

export default buses;