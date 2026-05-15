LootJS.modifiers((event) => {
    // Add path of what loot table you want to modify, you can use regex for multiple loot tables, for example: /^minecraft:chests\/.*/ will modify all loot tables in the minecraft:chests folder and its subfolders
    const patterns = 
        [
            /^minecraft:chests\/.*/,
            /^lootr:.*\/.*/,
            /^zombie_extreme:chests\/.*/,
            /^underground_bunkers:chests\/.*/,
            /^postapocalypse_structures:chests\/.*/,
            /^dungeons_arise:chests\/.*/ 
        ]
    
    // Removing items from mods added to the pattern. You can remove specific items using 'mod:item' or remove an entire mod with '@mod'.
    patterns.forEach(pattern => {
        event.addLootTableModifier(pattern)
            .removeLoot("quark:ancient_tome")
            .removeLoot("quark:pickarang")
            .removeLoot("quark:flamerang")
            .removeLoot("@swem")
            .removeLoot("@farmersdelight")
            .removeLoot("minecraft:enchanted_book")
            .removeLoot("infectious:mk_556_ammunition")
            .removeLoot("infectious:mk_556")
            .removeLoot(/.*_seed.*/)
            .removeLoot(/.*_seeds.*/)
            .removeLoot(/.*_sapling.*/)
            .removeLoot(ItemFilter.ENCHANTED)
    })
})
