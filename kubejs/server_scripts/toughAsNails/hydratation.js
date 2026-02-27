const hydratation = [
    // 10 hydratation
    [],

    // 20 hydratation
    ['farmersdelight:hot_cocoa', 'croptopia:horchata'],

    // 30 hydratation
    ['farmersdelight:apple_cider', 'farmersdelight:milk_bottle', 'croptopia:pumpkin_spice_latte', 'croptopia:milk_bottle', 'croptopia:soy_milk'],

    // 40 hydratation
    ['rusticdelight:syrup', 'croptopia:chocolate_milkshake'],

    // 50 hydratation
    ['rusticdelight:chocolate_coffee', 'rusticdelight:syrup_coffee', 'meds_and_herbs:aloe_juice', 'rusticdelight:honey_coffee', 'rusticdelight:milk_coffee', 'apocalypsenow:contaminated_water'],

    // 60 hydratation
    ['rusticdelight:coffee', 'rusticdelight:dark_coffee', 'croptopia:banana_smoothie', 'croptopia:strawberry_smoothie', 'croptopia:coffee', 'croptopia:limeade', 'croptopia:kale_smoothie', 'croptopia:fruit_smoothie'],

    // 70 hydratation
    ['apocalypsenow:grape_juice', 'apocalypsenow:peach_juice','apocalypsenow:apple_juice', 'apocalypsenow:orange_juice', 'apocalypsenow:grapejuicebox', 'apocalypsenow:applejuicebox', 'apocalypsenow:orangejuicebox', 'farmersdelight:melon_juice', 'croptopia:apple_juice', 'croptopia:cranberry_juice', 'croptopia:grape_juice', 'croptopia:melon_juice', 'croptopia:orange_juice', 'croptopia:pineapple_juice', 'croptopia:saguaro_juice', 'croptopia:tomato_juice'],

    // 80 hydratation
    ['apocalypsenow:water', 'croptopia:tea', 'croptopia:water_bottle']
]

ServerEvents.tags('item', event => {
    for (let i = 0; i < hydratation.length; i++) {
        for (let j = 0; j < hydratation[i].length; j++) {
            event.add(`toughasnails:hydratation/${(i + 1) * 10}_hydration_drinks`, hydratation[i][j])
        }
    }
})
