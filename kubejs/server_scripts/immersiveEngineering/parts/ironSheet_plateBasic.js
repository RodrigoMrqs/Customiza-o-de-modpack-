ServerEvents.tags('item', event => {
    event.add('forge:dusts/graphite', 'immersiveengineering:dust_hop_graphite')
    event.add('forge:ingots/graphite', 'immersiveengineering:ingot_hop_graphite')
});
ServerEvents.recipes(event => {
    event.replaceInput(
        {input: 'immersiveengineering:plate_iron'},
        'immersiveengineering:plate_iron',
        'create:iron_sheet'
    );
    const item =(recurso0,recurso1,saida,quantidade) => {
       event.remove({output: saida })
        event.shaped(Item.of(saida,quantidade),
    [
        'SIS',
        'IHI',
        'SIS'
    ], {
        S: recurso0,
        I: recurso1,
        H: 'immersiveengineering:hammer'

    }).damageIngredient('immersiveengineering:hammer')
    };
    
    item('mts:mtsofficialpack.screws','create:iron_sheet','immersiveengineering:sheetmetal_iron',4)
    item('immersiveengineering:dust_hop_graphite','immersiveengineering:plate_lead','nuclearcraft:plate_basic',2)
    });