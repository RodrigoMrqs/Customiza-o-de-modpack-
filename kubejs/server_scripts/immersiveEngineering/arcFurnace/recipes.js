ServerEvents.recipes(event => {
    const recipe=(minerio,recurso,liga,quantm,quantr,quantl,energia,remover) =>  {
    event.remove({output: remover })
      event.custom(
        {
  type: "immersiveengineering:arc_furnace",
  additives: [
    {
      base_ingredient:{
            tag: recurso
           },
           count: quantr
    }
  ],
  energy: energia,
  input: {
    base_ingredient:{
            tag: minerio
           },
           count: quantm
  },
  results: [
    {
      base_ingredient: {
        tag: liga
      },
      count: quantl
    }
  ],
  slag: {
    tag: "forge:slag"
  },
  time: 100
}
)};
recipe('forge:ingots/copper','forge:ingots/zinc','forge:ingots/brass',1,1,1,16400,'create:brass_ingot')
recipe('forge:ingots/gold','forge:ingots/silver','forge:ingots/electrum',1,1,1,16400,'immersiveengineering:ingot_electrum')
recipe('forge:dusts/gold','forge:dusts/silver','forge:ingots/electrum',1,1,1,16400,'immersiveengineering:ingot_electrum')
recipe('forge:ingots/iron','forge:coal_coke','forge:ingots/weak_steel',1,1,1,16400, 'minecraft:air')
});