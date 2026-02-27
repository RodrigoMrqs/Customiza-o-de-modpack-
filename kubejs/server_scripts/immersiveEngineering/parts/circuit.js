ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mts:mtsofficialpack.circuit'),
            [
                'A  ',
                'BCD',
                'EFE'
            ],
            {
                A: 'create:electron_tube',
                C: 'createaddition:gold_spool',
                E: 'immersiveengineering:plate_duroplast',
                B: 'createaddition:redstone_relay',
                D: 'immersiveengineering:electron_tube',
                F: 'immersiveengineering:slab_sheetmetal_colored_green'
            }
    )
});