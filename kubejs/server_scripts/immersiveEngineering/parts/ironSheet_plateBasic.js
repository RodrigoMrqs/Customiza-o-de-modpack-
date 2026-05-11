/**
 * Immersive Engineering - Sheet Metal & Nuclear Plate Shaped Recipes
 * Creates sheet metal and nuclear plates using hammer tool
 */
ServerEvents.recipes(event => {
  // Replace all iron plates with iron sheets in recipes
  event.replaceInput(
    { input: 'immersiveengineering:plate_iron' },
    'immersiveengineering:plate_iron',
    'create:iron_sheet'
  );

  /**
   * Creates sheet metal and plate recipe using a hammer
   * @param {string} material - The primary material
   * @param {string} secondary - The secondary material
   * @param {string} resultItem - The resulting item
   * @param {number} resultCount - Quantity of result
   */
  const createSheetMetalRecipe = (material, secondary, resultItem, resultCount) => {
    event.remove({ output: resultItem });
    event.shaped(
      Item.of(resultItem, resultCount),
      [
        'SIS',
        'IHI',
        'SIS'
      ],
      {
        S: material,
        I: secondary,
        H: 'immersiveengineering:hammer'
      }
    ).damageIngredient('immersiveengineering:hammer');
  };

  // Register sheet metal recipes
  createSheetMetalRecipe(
    'mts:mtsofficialpack.screws',
    'create:iron_sheet',
    'immersiveengineering:sheetmetal_iron',
    4
  );
  createSheetMetalRecipe(
    'immersiveengineering:dust_hop_graphite',
    'immersiveengineering:plate_lead',
    'nuclearcraft:plate_basic',
    2
  );
});