/**
 * Create Mod - Steel Production via Sequenced Assembly
 * 
 * Converts wrou  ],
  transitionalItem: {
    item: 'kubejs:hot_steel'
  }
  });
});ron to steel through a 2-loop sequential assembly:
 * 1. Heat wrought iron with lava → hot steel
 * 2. Press hot steel twice to refine it
 * 3. Cool hot steel with water → weak steel (final product after 2 loops)
 */
ServerEvents.recipes(event => {
  event.custom({
    type: "create:sequenced_assembly",
  ingredient: {
    item: 'kubejs:wrought_iron'
  },
  loops: 2,
  results: [
    {
      item: 'immersiveengineering:ingot_steel'
    }
  ],
  sequence: [
    {
      type: "create:filling",
      ingredients: [
        {
          item: 'kubejs:wrought_iron'
        },
        {
          amount: 500,
          fluid: "minecraft:lava",
          nbt: {}
        }
      ],
      results: [
        {
          item: 'kubejs:hot_steel'
        }
      ]
    },
    {
      type: "create:pressing",
      ingredients: [
        {
          item: 'kubejs:hot_steel'
        }
      ],
      results: [
        {
          item: 'kubejs:hot_steel'
        }
      ]
    },
    {
      type: "create:pressing",
      ingredients: [
        {
          item: 'kubejs:hot_steel'
        }
      ],
      results: [
        {
          item: 'kubejs:hot_steel'
        }
      ]
    },
    {
      type: "create:filling",
      ingredients: [
        {
          item: 'kubejs:hot_steel'
        },
        {
          amount: 500,
          fluid: "minecraft:water",
          nbt: {}
        }
      ],
      results: [
        {
          item: 'kubejs:weak_steel'
        }
      ]
    }
  ],
  transitionalItem: {
    item: 'kubejs:hot_steel'
  }
})})