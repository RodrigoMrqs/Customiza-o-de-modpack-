const hydratation = [
    [], // 1 hydratation
    [], // 2 hydratation
    [], // 3 hydratation
    [], // 4 hydratation
    ['rusticdelight:coffee', ], // 5 hydratation
]

ServerEvents.tags('item', event => {
    for (let i = 0; i < hydratation.length; i++) {
        for (let j = 0; j < hydratation[i].length; j++) {
            event.add(`toughasnails:hydratation/${i * 10}_hydration_drinks`, hydratation[i][j])
        }
    }
})