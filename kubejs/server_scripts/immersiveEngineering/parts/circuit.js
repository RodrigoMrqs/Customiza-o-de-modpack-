/**
 * Immersive Engineering - MTS Circuit Mechanical Crafting Recipe
 * Creates advanced circuits for MTS machinery
 */
ServerEvents.recipes(event => {
  event.remove({ output: 'mts:mtsofficialpack.circuit' });
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      A: { item: 'create:electron_tube' },
      B: { item: 'createaddition:redstone_relay' },
      C: { item: 'createaddition:gold_spool' },
      D: { item: 'immersiveengineering:electron_tube' },
      E: { item: 'immersiveengineering:plate_duroplast' },
      F: { item: 'immersiveengineering:slab_sheetmetal_colored_green' }
    },
    pattern: [
      'A  ',
      'BCD',
      'EFE'
    ],
    result: {
      item: 'mts:mtsofficialpack.circuit'
    }
  });
});