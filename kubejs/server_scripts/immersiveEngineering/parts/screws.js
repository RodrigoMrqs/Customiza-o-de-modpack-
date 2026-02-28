ServerEvents.recipes(event => {
    const Screws = (input, quantityi, quantityo) => {
    event.remove({output: 'mts:mtsofficialpack.screws' })
    event.shapeless(
      Item.of('mts:mtsofficialpack.screws', quantityo),
        [
        Item.of(input, quantityi),
        'immersiveengineering:wirecutter',
      ]
).damageIngredient('immersiveengineering:wirecutter')
}
Screws('minecraft:iron_ingot', 1, 3)
Screws('minecraft:iron_nugget', 4, 1)
});