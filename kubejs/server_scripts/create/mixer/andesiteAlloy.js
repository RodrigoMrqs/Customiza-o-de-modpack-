/**
 * Create Mod - Andesite Alloy Mixer Recipe
 * Combines 4 ore ingots with 4 andesite blocks to produce andesite alloy
 */
ServerEvents.recipes(event => {
  /**
   * Creates a mixer recipe for andesite alloy production
   * @param {string} ore - The ore ingot to use (e.g., 'minecraft:iron_ingot')
   */
  const createMixerRecipe = (ore) => {
    event.custom({
      type: "create:mixing",
      heatRequirement: "none",
      ingredients: [
        { item: ore },
        { item: ore },
        { item: ore },
        { item: ore },
        { item: 'minecraft:andesite' },
        { item: 'minecraft:andesite' },
        { item: 'minecraft:andesite' },
        { item: 'minecraft:andesite' }
      ],
      results: [
        {
          count: 3,
          item: 'create:andesite_alloy'
        }
      ]
    });
  };

  // Register recipes for different ore types
  createMixerRecipe('minecraft:iron_ingot');
  createMixerRecipe('create:zinc_ingot');
});
