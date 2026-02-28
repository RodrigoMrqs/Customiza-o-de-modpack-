ServerEvents.recipes(event => {
    event.remove({output: 'nuclearcraft:motor'})
event.custom({
  type: "create:mechanical_crafting",
  acceptMirrored: false,
  key: {
    C: {
      item: 'nuclearcraft:coil_copper'
    },
    G: {
      item: 'create:gantry_shaft'
    },
    T: {
      item: 'create:turntable'
    },
    S: {
      item: 'immersiveengineering:plate_steel'
    }
  },
  pattern:  [
    'SS ',
    'CTG',
    'SS '
    ],
  result: {
    item: 'nuclearcraft:motor'
  }
})
});