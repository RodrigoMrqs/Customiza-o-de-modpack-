ServerEvents.recipes(event => {
event.custom(
{
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
  "time": 1200
}
)})