ServerEvents.recipes(event => {
    event.shaped(
        Item.of('nuclearcraft:pressurizer'),
            [
                'ABA',
                'CDC',
                'AEA'
            ],
            {
                A: 'nuclearcraft:plate_advanced',
                B: 'create:mechanical_press',
                C: 'nuclearcraft:actuator',
                D: 'minecraft:anvil',
                E: 'nuclearcraft:chassis'
            }
    )
});