/**
 * KubeJS Item Tags Registry
 * Defines custom tags for items to integrate with Forge tag system
 */
ServerEvents.tags('item', event => {
  // Graphite tags for Immersive Engineering
  event.add('forge:dusts/graphite', 'immersiveengineering:dust_hop_graphite');
  event.add('forge:ingots/graphite', 'immersiveengineering:ingot_hop_graphite');

  // Custom weak steel tag for integration
  event.add('forge:ingots/weak_steel', 'kubejs:wrought_iron');
});