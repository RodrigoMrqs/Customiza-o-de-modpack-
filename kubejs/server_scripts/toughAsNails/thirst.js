const thirst = [
    [], // 1 thirst
    [], // 2 thirst
    [], // 3 thirst
    ['rusticdelight:coffee', ], // 4 thirst
    [], // 5 thirst
]

ServerEvents.tags('item', event => {
    for (let i = 0; i < thirst.length; i++) {
        for (let j = 0; j < thirst[i].length; j++) {
            event.add(`toughasnails:thirst/${i + 1}_thirst_drinks`, thirst[i][j])
        }
    }
})