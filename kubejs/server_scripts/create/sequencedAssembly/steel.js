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
          "amount": 500,
          "fluid": "minecraft:lava",
          "nbt": {}
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
        },
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
          "amount": 500,
          "fluid": "minecraft:water",
          "nbt": {}
        }
      ],
      results: [
        {
          item: 'kubejs:weak_steel'
        }
      ]
    },
  ],
  transitionalItem: {
    item: 'kubejs:hot_steel'
  }
})})