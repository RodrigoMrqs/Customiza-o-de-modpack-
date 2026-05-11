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
    poison.forEach((drinks, index) => {
        const poisonLevel = index * 25 + 25;
        drinks.forEach(drink => {
        event.add(`toughasnails:poison/${poisonLevel}_poison_drinks`, drink);
        });
    });
});