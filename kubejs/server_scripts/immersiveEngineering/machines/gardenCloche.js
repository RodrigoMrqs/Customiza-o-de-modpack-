/**
 * Immersive Engineering - Garden Cloche Shaped Recipe
 * Creates the garden cloche farming machine
 */
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:cloche'),
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      E: 'immersiveengineering:treated_scaffold',
      B: 'immersiveengineering:light_bulb',
      A: 'immersiveengineering:slab_insulating_glass',
      D: 'mts:mtsofficialpack.irsensor',
      C: 'immersiveengineering:insulating_glass',
      F: 'immersiveengineering:radiator'
    }
  );
});