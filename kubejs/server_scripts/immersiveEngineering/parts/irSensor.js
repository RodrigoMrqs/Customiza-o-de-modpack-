ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mts:mtsofficialpack.irsensor'),
            [
                'AB ',
                'CDE',
                ' EF'
            ],
            {
                D: 'mts:mtsofficialpack.circuit',
                A: 'securitycraft:lens',
                C: 'mts:mtsofficialpack.headlight',
                F: 'mts:mtsofficialpack.metaltube',
                E: 'immersiveengineering:wirecoil_redstone',
                B: 'meds_and_herbs:glass_tube'
            }
    )
});