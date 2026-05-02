/**
 * Immersive Engineering - Wrought Iron Blast Furnace Recipe
 * Produces wrought iron from enriched iron using the blast furnace
 */
ServerEvents.recipes(event => {
  event.custom({
    type: "immersiveengineering:blast_furnace",
    input: {
      item: 'mekanism:enriched_iron'
    },
    result: {
      item: 'kubejs:wrought_iron'
    },
    slag: {
      tag: 'forge:slag'
    },
    time: 1200
  });
});