ServerEvents.recipes(event => {
    const receita =(tijolo,bloco,miolo,resultado) => {
        event.remove({output: resultado })
        event.custom(
        {
         type: "create:mixing",
         heatRequirement: "heated",
         ingredients: [
           {
              item: tijolo
            },
            {
              item: tijolo
            },
            {
              item: tijolo
            },
            {
              item: tijolo
            },
           {
               item: bloco
            },
            {
               item: bloco
            },
            {
               item: bloco
            },
            {
               item: bloco
            },
            {
               item: miolo
            }
             ],
        results: [
              {
             count: 3,
        item: resultado
    }
  ]
}
)
    }      
receita('minecraft:nether_brick','minecraft:bricks','minecraft:magma_block','immersiveengineering:blastbrick')
receita('minecraft:brick','minecraft:clay','create:andesite_alloy','immersiveengineering:cokebrick')
})