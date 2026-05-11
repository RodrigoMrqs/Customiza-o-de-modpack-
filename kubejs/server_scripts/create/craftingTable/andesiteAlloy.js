/**
 * Create Mod - Andesite Alloy Crafting Table Recipes
 * Creates andesite alloy using regular crafting table with different ore types
 */
ServerEvents.recipes(event => {
  event.remove({ output: 'create:andesite_alloy' });

  /**
   * Creates a shaped crafting recipe for andesite alloy
   * Combines andesite with an ore ingot to produce andesite alloy
   * @param {string} ore - The ore ingot to use (iron or zinc)
   */
  const createAndesiteAlloyRecipe = (ore) => {
    event.shaped(
      Item.of('create:andesite_alloy', 2),
      [
        'ARA',
        'RAR',
        'ARA'
      ],
      {
        A: 'minecraft:andesite',
        R: ore
      }
    );
  };

  // Register recipes for different ore types
  createAndesiteAlloyRecipe('minecraft:iron_ingot');
  createAndesiteAlloyRecipe('create:zinc_ingot');
});