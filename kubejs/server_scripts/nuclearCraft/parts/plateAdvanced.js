ServerEvents.recipes(event => {
    event.shaped(
        Item.of('nuclearcraft:plate_advanced'),
            [
                'ABA',
                'CDC',
                'ABA'
            ],
            {
                A: 'nuclearcraft:plate_basic',
                B: 'immersiveengineering:wirecoil_copper',
                C: 'nuclearcraft:tough_alloy_ingot',
                D: 'immersiveengineering:wirecoil_redstone'
            }
    )
});