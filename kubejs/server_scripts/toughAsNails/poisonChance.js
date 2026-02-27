const poison = [
    // 25 chance
    ['apocalypsenow:whisky', 'apocalypsenow:contaminated_water', 'apocalypsenow:vodka', 'croptopia:beer', 'croptopia:wine', 'croptopia:mead', 'croptopia:rum'],

    // 50 chance
    [],

    // 75 chance
    ['rusticdelight:cooking_oil'],

    // 100 chance
    [], 
]

ServerEvents.tags('item', event => {
    let poisonChance = 25

    for (let i = 0; i < poison.length; i++) {
        for (let j = 0; j < poison[i].length; j++) {
            event.add(`toughasnails:poison/${poisonChance}_poison_drinks`, poison[i][j])
        }
        
        poisonChance += 25
    }
})