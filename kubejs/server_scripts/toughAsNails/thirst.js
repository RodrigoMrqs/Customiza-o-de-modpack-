/**
 * ToughAsNails Thirst System Configuration
 * Defines drink items categorized by thirst level (1-5)
 */
const thirstDrinks = [
  // 1 thirst
  [
    'apocalypsenow:whisky',
    'croptopia:beer',
    'croptopia:wine',
    'croptopia:mead',
    'croptopia:rum'
  ],
  // 2 thirst
  [
    'meds_and_herbs:aloe_juice',
    'rusticdelight:syrup',
    'farmersdelight:milk_bottle',
    'croptopia:horchata',
    'croptopia:milk_bottle',
    'croptopia:soy_milk',
    'croptopia:chocolate_milkshake'
  ],
  // 3 thirst
  [
    'rusticdelight:chocolate_coffee',
    'rusticdelight:syrup_coffee',
    'rusticdelight:honey_coffee',
    'rusticdelight:milk_coffee',
    'apocalypsenow:contaminated_water',
    'farmersdelight:hot_cocoa',
    'croptopia:pumpkin_spice_latte',
    'croptopia:banana_smoothie',
    'croptopia:strawberry_smoothie',
    'croptopia:kale_smoothie',
    'croptopia:fruit_smoothie'
  ],
  // 4 thirst
  [
    'rusticdelight:coffee',
    'rusticdelight:dark_coffee',
    'farmersdelight:apple_cider',
    'croptopia:coffee',
    'croptopia:limeade'
  ],
  // 5 thirst
  [
    'apocalypsenow:grape_juice',
    'apocalypsenow:peach_juice',
    'apocalypsenow:apple_juice',
    'apocalypsenow:orange_juice',
    'apocalypsenow:grapejuicebox',
    'apocalypsenow:applejuicebox',
    'apocalypsenow:orangejuicebox',
    'apocalypsenow:water',
    'farmersdelight:melon_juice',
    'croptopia:tea',
    'croptopia:water_bottle',
    'croptopia:apple_juice',
    'croptopia:cranberry_juice',
    'croptopia:grape_juice',
    'croptopia:melon_juice',
    'croptopia:orange_juice',
    'croptopia:pineapple_juice',
    'croptopia:saguaro_juice',
    'croptopia:tomato_juice'
  ]
];

/**
 * Register drink items to their respective thirst level tags
 */
ServerEvents.tags('item', event => {
  thirstDrinks.forEach((drinks, index) => {
    const thirstLevel = index + 1;
    drinks.forEach(drink => {
      event.add(`toughasnails:thirst/${thirstLevel}_thirst_drinks`, drink);
    });
  });
});