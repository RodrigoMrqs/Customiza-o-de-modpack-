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

const allPoisonItems = poison.reduce((acc, arr) => acc.concat(arr), [])

ServerEvents.tags('item', event => {
    poison.forEach((drinks, index) => {
        const poisonLevel = index * 25 + 25;
        drinks.forEach(drink => {
            event.add(`toughasnails:poison/${poisonLevel}_poison_drinks`, drink);
        });
    });
});

ItemEvents.foodEaten(event => {
    if (allPoisonItems.includes(event.item.id)) {
        event.player.persistentData.putBoolean("tan_poisoned", true)
    }
})

PlayerEvents.tick(event => {
    const player = event.player

    if (player.server.tickCount % 20 !== 0) return

    const tanPoisoned = player.persistentData.getBoolean("tan_poisoned")

    if (tanPoisoned && !player.hasEffect("minecraft:nausea")) {
        player.persistentData.remove("tan_poisoned")
        return
    }

    if (tanPoisoned && player.hasEffect("minecraft:nausea")) {
        const effect = player.getEffect("minecraft:nausea")
        const duration = effect.duration
        const amplifier = effect.amplifier

        player.removeEffect("minecraft:nausea")
        player.potionEffects.add("meds_and_herbs:bacterial_infection", 24000, amplifier)
        player.persistentData.remove("tan_poisoned")
    }
})
