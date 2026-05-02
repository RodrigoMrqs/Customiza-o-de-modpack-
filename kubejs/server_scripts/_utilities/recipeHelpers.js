/**
 * Recipe Helper Functions
 * Reusable functions for creating common recipe types
 * This module provides standardized functions to reduce code duplication
 */

/**
 * Creates a Create Mixer recipe with standard configuration
 * @param {Object} event - The ServerEvents.recipes event
 * @param {Object} config - Recipe configuration object
 * @param {string} config.heat - Heat requirement: "none", "heated"
 * @param {Array} config.ingredients - Array of ingredient objects
 * @param {Array} config.results - Array of result objects
 * @param {string} [config.outputToRemove] - Optional output to remove before adding recipe
 */
function createMixerRecipe(event, config) {
  if (config.outputToRemove) {
    event.remove({ output: config.outputToRemove });
  }

  event.custom({
    type: "create:mixing",
    heatRequirement: config.heat || "none",
    ingredients: config.ingredients,
    results: config.results
  });
}

/**
 * Creates an Immersive Engineering Alloy Kiln recipe
 * @param {Object} event - The ServerEvents.recipes event
 * @param {Object} config - Recipe configuration object
 * @param {string} config.primaryTag - First ingredient tag
 * @param {string} config.secondaryTag - Second ingredient tag
 * @param {string} config.resultTag - Result ingredient tag
 * @param {number} config.primaryCount - Quantity of primary ingredient
 * @param {number} config.secondaryCount - Quantity of secondary ingredient
 * @param {number} config.resultCount - Quantity of result
 * @param {number} config.time - Recipe time in ticks
 * @param {string} config.outputToRemove - Original recipe output to remove
 */
function createAlloyKilnRecipe(event, config) {
  event.remove({ output: config.outputToRemove });
  event.custom({
    type: "immersiveengineering:alloy",
    input0: {
      base_ingredient: { tag: config.primaryTag },
      count: config.primaryCount
    },
    input1: {
      base_ingredient: { tag: config.secondaryTag },
      count: config.secondaryCount
    },
    result: {
      base_ingredient: { tag: config.resultTag },
      count: config.resultCount
    },
    time: config.time
  });
}

/**
 * Creates an Immersive Engineering Arc Furnace recipe
 * @param {Object} event - The ServerEvents.recipes event
 * @param {Object} config - Recipe configuration object
 * @param {string} config.primaryTag - Primary input ingredient tag
 * @param {string} config.additiveTag - Additive ingredient tag
 * @param {string} config.resultTag - Result ingredient tag
 * @param {number} config.primaryCount - Quantity of primary ingredient
 * @param {number} config.additiveCount - Quantity of additive
 * @param {number} config.resultCount - Quantity of result
 * @param {number} config.energy - Energy cost in EU
 * @param {string} config.outputToRemove - Original recipe output to remove
 */
function createArcFurnaceRecipe(event, config) {
  event.remove({ output: config.outputToRemove });
  event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        base_ingredient: { tag: config.additiveTag },
        count: config.additiveCount
      }
    ],
    energy: config.energy,
    input: {
      base_ingredient: { tag: config.primaryTag },
      count: config.primaryCount
    },
    results: [
      {
        base_ingredient: { tag: config.resultTag },
        count: config.resultCount
      }
    ],
    slag: { tag: "forge:slag" },
    time: 100
  });
}

/**
 * Creates a Create Mechanical Crafting recipe
 * @param {Object} event - The ServerEvents.recipes event
 * @param {Object} config - Recipe configuration object
 * @param {boolean} config.acceptMirrored - Whether to accept mirrored patterns
 * @param {Object} config.key - Pattern key mapping letters to items
 * @param {Array} config.pattern - Array of pattern strings
 * @param {string} config.result - Result item ID
 * @param {string} [config.outputToRemove] - Optional output to remove before adding recipe
 */
function createMechanicalCraftingRecipe(event, config) {
  if (config.outputToRemove) {
    event.remove({ output: config.outputToRemove });
  }

  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: config.acceptMirrored || false,
    key: config.key,
    pattern: config.pattern,
    result: {
      item: config.result
    }
  });
}
