/**
 * Immersive Engineering - Mechanical Components Shaped Recipes
 * Creates iron and steel mechanical components from andesite alloy and steel
 */
ServerEvents.recipes(event => {
  /**
   * Creates mechanical component recipe
   * @param {string} material - The base material for the component
   * @param {string} resultItem - The resulting component item
   */
  const createMechanicalComponent = (material, resultItem) => {
    event.remove({ output: resultItem });
    event.shaped(
      Item.of(resultItem),
      [
        'CCC',
        'CSC',
        'CCC'
      ],
      {
        S: 'create:sturdy_sheet',
        C: material
      }
    );
  };

  // Register mechanical component recipes
  createMechanicalComponent(
    'create:andesite_alloy',
    'immersiveengineering:component_iron'
  );
  createMechanicalComponent(
    'immersiveengineering:plate_steel',
    'immersiveengineering:component_steel'
  );
});