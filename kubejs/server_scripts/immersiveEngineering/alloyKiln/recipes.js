/**
 * Immersive Engineering - Alloy Kiln Recipes
 * Combines two materials to create alloys in the alloy kiln
 */
ServerEvents.recipes(event => {
  /**
   * Creates an alloy kiln recipe
   * @param {string} primaryTag - First ingredient tag
   * @param {string} secondaryTag - Second ingredient tag
   * @param {string} resultTag - Result ingredient tag
   * @param {number} primaryCount - Quantity of primary ingredient
   * @param {number} secondaryCount - Quantity of secondary ingredient
   * @param {number} resultCount - Quantity of result
   * @param {number} time - Recipe time in ticks
   * @param {string} outputToRemove - Original recipe output to remove
   */
  const createAlloyRecipe = (
    primaryTag,
    secondaryTag,
    resultTag,
    primaryCount,
    secondaryCount,
    resultCount,
    time,
    outputToRemove
  ) => {
    event.remove({ output: outputToRemove });
    event.custom({
      type: "immersiveengineering:alloy",
      input0: {
        base_ingredient: { tag: primaryTag },
        count: primaryCount
      },
      input1: {
        base_ingredient: { tag: secondaryTag },
        count: secondaryCount
      },
      result: {
        base_ingredient: { tag: resultTag },
        count: resultCount
      },
      time: time
    });
  };

  // Register electrum recipes (gold + silver)
  createAlloyRecipe(
    'forge:ingots/gold',
    'forge:ingots/silver',
    'forge:ingots/electrum',
    2,
    2,
    1,
    200,
    'immersiveengineering:ingot_electrum'
  );
  createAlloyRecipe(
    'forge:dusts/gold',
    'forge:dusts/silver',
    'forge:ingots/electrum',
    2,
    2,
    1,
    200,
    'immersiveengineering:ingot_electrum'
  );
});