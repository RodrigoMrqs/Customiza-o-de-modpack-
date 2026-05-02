/**
 * MTS Official Pack - Screws Shapeless Recipes
 * Creates screws from iron ingots and nuggets using a wirecutter
 */
ServerEvents.recipes(event => {
  /**
   * Creates shapeless recipe for screw production
   * @param {string} input - Input item (iron ingot or nugget)
   * @param {number} inputCount - Quantity of input needed
   * @param {number} outputCount - Quantity of screws produced
   */
  const createScrewRecipe = (input, inputCount, outputCount) => {
    event.remove({ output: 'mts:mtsofficialpack.screws' });
    event.shapeless(
      Item.of('mts:mtsofficialpack.screws', outputCount),
      [
        Item.of(input, inputCount),
        'immersiveengineering:wirecutter'
      ]
    ).damageIngredient('immersiveengineering:wirecutter');
  };

  // Register screw recipes
  createScrewRecipe('minecraft:iron_ingot', 1, 3);
  createScrewRecipe('minecraft:iron_nugget', 4, 1);
});