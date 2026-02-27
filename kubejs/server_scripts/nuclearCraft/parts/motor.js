ServerEvents.recipes(event => {
    event.shaped(
        Item.of('nuclearcraft:motor'),
            [
                'SS ',
                'CTG',
                'SS '
            ],
            {
                S: 'immersiveengineering:plate_steel',
                T: 'create:turntable',
                G: 'create:gantry_shaft',
                C: 'nuclearcraft:coil_copper'
            }
    )
});