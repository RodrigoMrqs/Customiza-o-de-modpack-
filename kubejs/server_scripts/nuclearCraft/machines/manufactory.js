ServerEvents.recipes(event => {
    event.shaped(
        Item.of('nuclearcraft:manufactory'),
            [
                'BRB',
                'GMG',
                'BCB'
            ],
            {
                G: 'immersiveengineering:grindingdisk',
                R: 'immersiveengineering:wirecoil_redstone',
                B: 'nuclearcraft:plate_basic',
                M: 'create:millstone',
                C: 'nuclearcraft:coil_copper'
            }
    )
});