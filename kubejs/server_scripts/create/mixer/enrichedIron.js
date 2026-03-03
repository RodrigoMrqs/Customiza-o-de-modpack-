ServerEvents.recipes(event => {
    event.custom(
        {
         type: "create:mixing",
         heatRequirement: "heated",
         ingredients: [
           {
              tag: 'forge:ingots/iron'
            },
            {
              tag: 'forge:ingots/iron'
            },
           {
               item: 'minecraft:coal'
            },
            {
               item: 'minecraft:coal'
            }
             ],
        results: [
              {
             count: 1,
        item: 'mekanism:enriched_iron'
    }
  ]
}
)}
)
