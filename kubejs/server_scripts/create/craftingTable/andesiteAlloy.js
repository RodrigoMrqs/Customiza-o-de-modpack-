ServerEvents.recipes(event => {
    event.remove({output: 'create:andesite_alloy' })
    const minerio =(recurso) => {
        event.shaped(Item.of('create:andesite_alloy', 2),
    [
        'ARA',
        'RAR',
        'ARA'
    ], {
        A: 'minecraft:andesite',
        R: recurso
    })
    }
    minerio('minecraft:iron_ingot')
    minerio('create:zinc_ingot')
    });