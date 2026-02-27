ServerEvents.recipes(event => {
    const minerio =(recurso) => {
    event.custom(
        {
         type: "create:mixing",
         heatRequirement: "none",
         ingredients: [
           {
              item: recurso
            },
            {
              item: recurso
            },
            {
              item: recurso
            },
            {
              item: recurso
            },
           {
               item: 'minecraft:andesite'
            },
            {
               item: 'minecraft:andesite'
            },
            {
               item: 'minecraft:andesite'
            },
            {
               item: 'minecraft:andesite'
            }
             ],
        results: [
              {
             count: 3,
        item: 'create:andesite_alloy'
    }
  ]
}
)}
minerio('minecraft:iron_ingot')
minerio('create:zinc_ingot')
})
