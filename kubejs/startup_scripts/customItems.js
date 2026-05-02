/**
 * KubeJS Custom Item Registry
 * Defines custom items for the modpack that are not provided by any mod
 */
StartupEvents.registry('item', event => {
  // Custom steel items used in the steel production chain
  event.create('wrought_iron')
    .displayName('Wrought Iron')
    .texture('kubejs:item/wrought_iron');

  event.create('hot_steel')
    .displayName('Hot Steel')
    .texture('kubejs:item/hot_steel');

  event.create('weak_steel')
    .displayName('Weak Steel')
    .texture('kubejs:item/weak_steel');
});