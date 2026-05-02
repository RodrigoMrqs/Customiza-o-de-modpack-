/**
 * NuclearCraft - Chassis Mechanical Crafting Recipe
 * Creates the chassis frame for nuclear machinery
 */
ServerEvents.recipes(event => {
  event.remove({ output: 'nuclearcraft:chassis' });
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      A: { item: 'immersiveengineering:plate_steel' },
      B: { item: 'immersiveengineering:plate_lead' },
      C: { item: 'mts:mtsofficialpack.processor' }
    },
    pattern: [
      'ABA',
      'BCB',
      'ABA'
    ],
    result: {
      item: 'nuclearcraft:chassis'
    }
  });
});