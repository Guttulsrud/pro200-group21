function randTime() {
    return Math.floor(Math.random() * 11) + 4;
}

function randCap() {
    return Math.floor(Math.random() * 16) + 1;
}

const buses = [
    {
        name: 'Vyvian 521',
        eta: randTime(),
        cap: randCap()
    }, {
        name: 'Vylde 416',
        eta: randTime(),
        cap: randCap()
    }, {
        name: 'Vydar 832',
        eta: randTime(),
        cap: randCap()
    }, {
        name: 'Vybekke 190',
        eta: randTime(),
        cap: randCap()
    }, {
        name: 'Vylmer 387',
        eta: randTime(),
        cap: randCap()
    }, {
        name: 'Vyggo 187',
        eta: randTime(),
        cap: randCap()
    },
];

buses.sort((a, b) => (a.eta > b.eta) ? 1 : (a.eta === b.eta) ? ((a.cap < b.cap) ? 1 : -1) : -1)

export default buses;