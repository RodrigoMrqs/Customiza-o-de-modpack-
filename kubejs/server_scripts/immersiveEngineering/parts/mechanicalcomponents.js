ServerEvents.recipes(event => {
    const item =(recurso, saida) => {
       event.remove({output: saida })
        event.shaped(Item.of(saida),
    [
        'CCC',
        'CSC',
        'CCC'
    ], {
        S: 'create:sturdy_sheet',
        C: recurso
    })
    }
    item('create:andesite_alloy','immersiveengineering:component_iron')
    item('immersiveengineering:plate_steel','immersiveengineering:component_steel')
    });