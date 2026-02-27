const poison = [
    [], // 1 poison
    [], // 2 poison
    [], // 3 poison
    [], // 4 poison
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