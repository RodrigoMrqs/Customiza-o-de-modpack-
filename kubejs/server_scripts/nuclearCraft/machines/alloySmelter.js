ServerEvents.recipes(event => {
    event.shaped(
        Item.of('nuclearcraft:alloy_smelter'),
            [
                'ABA',
                'CDC',
                'AEA'
            ],
            {
                A: 'nuclearcraft:plate_basic',
                B: 'immersiveengineering:wirecoil_redstone',
                C: 'immersiveengineering:blastbrick_reinforced',
                D: 'ironfurnaces:netherite_furnace',
                E: 'immersiveengineering:coil_hv'
            }
    )
});