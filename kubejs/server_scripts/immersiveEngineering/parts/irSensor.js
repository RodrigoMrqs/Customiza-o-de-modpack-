/**
 * MTS Official Pack - IR Sensor Mechanical Crafting Recipe
 * Creates infrared sensor component for vehicle systems
 */
ServerEvents.recipes(event => {
  event.remove({ output: 'mts:mtsofficialpack.irsensor' });
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      A: { item: 'securitycraft:lens' },
      B: { item: 'meds_and_herbs:glass_tube' },
      C: { item: 'mts:mtsofficialpack.headlight' },
      D: { item: 'mts:mtsofficialpack.circuit' },
      E: { item: 'immersiveengineering:wirecoil_redstone' },
      F: { item: 'mts:mtsofficialpack.metaltube' }
    },
    pattern: [
      'AB ',
      'CDE',
      ' EF'
    ],
    result: {
      item: 'mts:mtsofficialpack.irsensor'
    }
  });
});