ServerEvents.recipes(event => {
  const recipe=(minerio,recurso,liga,quantm,quantr,quantl,tempo,remover) => { 
  event.remove({output: remover})
        event.custom(
          {
           type: "immersiveengineering:alloy",
            input0: {
            base_ingredient:{
             tag: minerio
            },
            count: quantm
            },
             input1: {
              base_ingredient:{
              tag: recurso
             },
              count: quantr
            },
           result: {
              base_ingredient: {
              tag: liga
           },
             count: quantl
          },
          time: tempo
})};
recipe('forge:ingots/gold','forge:ingots/silver','forge:ingots/electrum',2,2,1,200,'immersiveengineering:ingot_electrum')
recipe('forge:dusts/gold','forge:dusts/silver','forge:ingots/electrum',2,2,1,200,'immersiveengineering:ingot_electrum')
});