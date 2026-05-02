/**
 * Create Mod - Immersive Engineering Bricks Mixer Recipes
 * Produces specialized bricks for IE machinery through heated mixing
 */
ServerEvents.recipes(event => {
  /**
   * Creates a heated mixer recipe for producing IE bricks
   * @param {string} brick - The primary brick item (4x)
   * @param {string} block - The secondary block (4x)
   * @param {string} core - The core material (1x)
   * @param {string} result - The resulting brick item
   */
  const createBrickRecipe = (brick, block, core, result) => {
    event.remove({ output: result });
    event.custom({
      type: "create:mixing",
      heatRequirement: "heated",
      ingredients: [
        { item: brick },
        { item: brick },
        { item: brick },
        { item: brick },
        { item: block },
        { item: block },
        { item: block },
        { item: block },
        { item: core }
      ],
      results: [
        {
          count: 3,
          item: result
        }
      ]
    });
  };

  // Register brick recipes
  createBrickRecipe(
    'minecraft:nether_brick',
    'minecraft:bricks',
    'minecraft:magma_block',
    'immersiveengineering:blastbrick'
  );
  createBrickRecipe(
    'minecraft:brick',
    'minecraft:clay',
    'create:andesite_alloy',
    'immersiveengineering:cokebrick'
  );
});