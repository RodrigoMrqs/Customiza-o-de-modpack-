/**
 * NuclearCraft - Copper Coil Mechanical Crafting Recipe
 * Creates copper coil components for nuclear machinery
 */
ServerEvents.recipes(event => {
  event.remove({ output: 'nuclearcraft:coil_copper' });
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      C: { item: 'create:shaft' },
      A: { item: 'immersiveengineering:wirecoil_copper' },
      B: { item: 'immersiveengineering:stick_iron' }
    },
    pattern: [
      ' A ',
      'BCB',
      ' A '
    ],
    result: {
      item: 'nuclearcraft:coil_copper'
    }
  });
});