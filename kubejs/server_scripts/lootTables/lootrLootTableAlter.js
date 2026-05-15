LootJS.modifiers((event) => {
    const patterns = [
        /^minecraft:chests\/.*/,
        /^lootr:.*\/.*/,
        /^zombie_extreme:chests\/.*/,
        /^underground_bunkers:chests\/.*/,
        /^postapocalypse_structures:chests\/.*/,
        /^dungeons_arise:chests\/.*/
    ]

    const guns = [
        { chance: 0.008,  nbt: '{GunFireMode:"SEMI",GunId:"tacz:m1911",HasBulletInBarrel:1b}' },
        { chance: 0.008,  nbt: '{GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}' },
        { chance: 0.008,  nbt: '{GunFireMode:"SEMI",GunId:"tacz:p320",HasBulletInBarrel:1b}' },
        { chance: 0.008,  nbt: '{GunFireMode:"SEMI",GunId:"tacz:m9a4",HasBulletInBarrel:1b}' },
        { chance: 0.009,  nbt: '{GunFireMode:"SEMI",GunId:"tacz:taurus943",HasBulletInBarrel:1b}' },
        { chance: 0.001, nbt: '{GunFireMode:"SEMI",GunId:"tacz:kar98",HasBulletInBarrel:1b}' },
        { chance: 0.001, nbt: '{GunFireMode:"AUTO",GunId:"tacz:m4a1",HasBulletInBarrel:1b}' },
    ]

    const ammos = [
        { chance: 0.01, nbt: '{AmmoId:"tacz:9mm"}' },
        { chance: 0.01, nbt: '{AmmoId:"tacz:45acp"}' },
        { chance: 0.02, nbt: '{AmmoId:"tacz:22wmr"}' },
    ]

    const itens = [
        { chance: 0.2,  item: "minecraft:iron_ingot" },
        { chance: 0.1, item: "minecraft:gold_ingot" },
        { chance: 0.01,  item: "minecraft:diamond" },
        { chance: 0.05, item: "minecraft:emerald" },
        { chance: 0.15, item: "immersiveengineering:ingot_lead" },
        { chance : 0.12, item: "immersiveengineering:ingot_silver" },
        { chance: 0.13, item: "immersiveengineering:ingot_nickel" },
        { chance: 0.12, item: "immersiveengineering:ingot_aluminum" },
    ]

    patterns.forEach(pattern => {
        guns.forEach(gun => {
            event.addLootTableModifier(pattern)
                .randomChance(gun.chance)
                .addLoot(Item.of("tacz:modern_kinetic_gun", gun.nbt))
        })
        ammos.forEach(ammo => {
            event.addLootTableModifier(pattern)
                .randomChance(ammo.chance)
                .addLoot(Item.of("tacz:ammo", ammo.nbt))
        })
        itens.forEach(item => {
            event.addLootTableModifier(pattern)
                .randomChance(item.chance)
                .addLoot(Item.of(item.item))
        })
    })
})
