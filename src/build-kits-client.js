
const buildKits = [
    {
        id: 'asdf124',
        name: 'X01',
        price: 1299,
        details: [
            {label: 'fork', value: 'Fox regular'},
            {label: 'rear derailleur', value: 'SRAM regular'}
        ]
    },
    {
        id: '34576fdgh',
        name: 'XX1 AXS Reserve',
        price: 2021,
        details: [
            {label: 'fork', value: 'Fox fancy'},
            {label: 'rear derailleur', value: 'SRAM fancy'}
        ]
    }
]

export const getBuildKits = async () => {
    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve(buildKits);
        }, 2000);
    })
}