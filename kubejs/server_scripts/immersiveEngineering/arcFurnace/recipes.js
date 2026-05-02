/**
 * Immersive Engineering - Arc Furnace Recipes
 * High-temperature smelting for alloy production
 */
ServerEvents.recipes(event => {
  /**
   * Creates an arc furnace recipe
   * @param {string} primaryTag - Primary input ingredient tag
   * @param {string} additiveTag - Additive ingredient tag
   * @param {string} resultTag - Result ingredient tag
   * @param {number} primaryCount - Quantity of primary ingredient
   * @param {number} additiveCount - Quantity of additive
   * @param {number} resultCount - Quantity of result
   * @param {number} energy - Energy cost in EU
   * @param {string} outputToRemove - Original recipe output to remove
   */
  const createArcRecipe = (
    primaryTag,
    additiveTag,
    resultTag,
    primaryCount,
    additiveCount,
    resultCount,
    energy,
    outputToRemove
  ) => {
    event.remove({ output: outputToRemove });
    event.custom({
      type: "immersiveengineering:arc_furnace",
      additives: [
        {
          base_ingredient: { tag: additiveTag },
          count: additiveCount
        }
      ],
      energy: energy,
      input: {
        base_ingredient: { tag: primaryTag },
        count: primaryCount
      },
      results: [
        {
          base_ingredient: { tag: resultTag },
          count: resultCount
        }
      ],
      slag: { tag: "forge:slag" },
      time: 100
    });
  };

  // Brass production (copper + zinc)
  createArcRecipe(
    'forge:ingots/copper',
    'forge:ingots/zinc',
    'forge:ingots/brass',
    1,
    1,
    1,
    16400,
    'create:brass_ingot'
  );

  // Electrum production (gold + silver)
  createArcRecipe(
    'forge:ingots/gold',
    'forge:ingots/silver',
    'forge:ingots/electrum',
    1,
    1,
    1,
    16400,
    'immersiveengineering:ingot_electrum'
  );

  // Electrum from dusts
  createArcRecipe(
    'forge:dusts/gold',
    'forge:dusts/silver',
    'forge:ingots/electrum',
    1,
    1,
    1,
    16400,
    'immersiveengineering:ingot_electrum'
  );

  // Weak steel production (iron + coal coke)
  createArcRecipe(
    'forge:ingots/iron',
    'forge:coal_coke',
    'forge:ingots/weak_steel',
    1,
    1,
    1,
    16400,
    'minecraft:air'
  );
});