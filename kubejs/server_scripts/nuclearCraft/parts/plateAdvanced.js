ServerEvents.recipes(event => {
event.custom({
  type: "create:mechanical_crafting",
  acceptMirrored: false,
  key: {
    A: {
      item: 'nuclearcraft:plate_basic'
    },
    B: {
      item: 'immersiveengineering:wirecoil_copper'
    },
    C: {
      item: 'nuclearcraft:tough_alloy_ingot'
    },
    D: {
      item: 'immersiveengineering:wirecoil_redstone'
    }
  },
  pattern:  [
                'ABA',
                'CDC',
                'ABA'
            ],
  result: {
    item: 'nuclearcraft:plate_advanced'
  }
})
});