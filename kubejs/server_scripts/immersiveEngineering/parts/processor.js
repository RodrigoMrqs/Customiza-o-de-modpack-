ServerEvents.recipes(event => {
    event.remove({output: 'mts:mtsofficialpack.processor'})
event.custom({
  type: "create:mechanical_crafting",
  acceptMirrored: false,
  key: {
    A: {
      item: 'mekanism:alloy_infused'
    },
    B: {
      item: 'immersiveengineering:wirecoil_copper'
    },
    C: {
      item: 'mts:mtsofficialpack.circuit'
    },
    D: {
      item: 'create:transmitter'
    },
    E: {
      item: 'immersiveengineering:slab_sheetmetal_iron'
    },
    F: {
      item: 'immersiveengineering:wirecoil_redstone'
    }
  },
  pattern:  [
        '  A',
        'BCB',
        'DEF'
            ],
  result: {
    item: 'mts:mtsofficialpack.processor'
  }
})
});