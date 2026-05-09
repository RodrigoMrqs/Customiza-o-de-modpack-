LootJS.modifiers((event) => {
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("@tacz")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("@tacz")
    event.addLootTableModifier(/^keerdm_zombie_essentials:ammochest\/.*/).removeLoot("@tacz")
    event.addLootTableModifier(/^keerdm_zombie_essentials:gunchest\/.*/).removeLoot("@tacz")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("@swem")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("@swem")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("@apocalypsenow")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("@apocalypsenow")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("@quark")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("@quark")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("@quark")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("@quark")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("minecraft:enchanted_book")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("minecraft:enchanted_book")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("@farmersdelight")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("@farmersdelight")

    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot("'@brewery'")
    event.addLootTableModifier(/^lootr:.*\/.*/).removeLoot("'@brewery'")

    
})