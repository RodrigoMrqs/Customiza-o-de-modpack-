ServerEvents.recipes(event => {
    event.shaped(
        Item.of('nuclearcraft:chassis'),
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'immersiveengineering:plate_steel',
                B: 'immersiveengineering:plate_lead',
                C: 'mts:mtsofficialpack.processor'
            }
    )
});