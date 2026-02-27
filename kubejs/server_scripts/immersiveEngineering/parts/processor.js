ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mts:mtsofficialpack.processor'),
            [
                '  A',
                'BCB',
                'DEF'
            ],
            {
                C: 'mts:mtsofficialpack.circuit',
                 A: 'infinitybuttons:red_emergency_button',
                E: 'immersiveengineering:slab_sheetmetal_iron',
                F: 'immersiveengineering:wirecoil_redstone',
                B: 'immersiveengineering:wirecoil_copper',
                D: 'create:transmitter'
            }
    )
});