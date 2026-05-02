/**
 * NuclearCraft - Actuator Mechanical Crafting Recipe
 * Creates the actuator component for nuclear machinery
 */
ServerEvents.recipes(event => {
  event.remove({ output: 'nuclearcraft:actuator' });
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      A: { item: 'immersiveengineering:stick_steel' },
      B: { item: 'immersiveengineering:plate_duroplast' },
      C: { item: 'create:mechanical_piston' },
      D: { item: 'immersiveengineering:wirecoil_steel' },
      E: { item: 'createbigcannons:recoil_spring' }
    },
    pattern: [
      '  A',
      'BC ',
      'DBE'
    ],
    result: {
      item: 'nuclearcraft:actuator'
    }
  });
});