LootJS.modifiers((event) => {

    function addPokeballToLootTable(value, chance, lootTable) {
        event
        .addLootTableModifier(lootTable)
            .randomChance(chance)
            .addLoot(value);
    }

    function addLowTierPokeballsToLootTable(lootTable, chance) {
        addPokeballToLootTable("cobblemon:poke_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:citrine_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:verdant_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:azure_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:roseate_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:slate_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:premier_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:heal_ball", chance*0.75, lootTable)
        addPokeballToLootTable("cobblemon:safari_ball", chance*0.75, lootTable)
    }

    function addMidTierPokeballsToLootTable(lootTable, chance) {
        addPokeballToLootTable("cobblemon:great_ball", chance*8, lootTable)
        addPokeballToLootTable("cobblemon:heavy_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:fast_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:sport_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:level_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:lure_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:nest_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:friend_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:park_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:dive_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:moon_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:net_ball", chance, lootTable)
    }

    function addHighTierPokeballsToLootTable(lootTable, chance) {
        addPokeballToLootTable("cobblemon:ultra_ball", chance*8, lootTable)
        addPokeballToLootTable("cobblemon:love_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:dusk_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:quick_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:repeat_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:luxury_ball", chance, lootTable)
        addPokeballToLootTable("cobblemon:timer_ball", chance, lootTable)
    }

    function addMoneyToLootTable(moneyItemCommon, moneyItemRare, lootTable) {
        var count = "2x "

        event
        .addLootTableModifier(lootTable)
            .randomChance(0.75)
            .addLoot(count.concat(moneyItemCommon));

        event
        .addLootTableModifier(lootTable)
            .randomChance(0.15)
            .addLoot(moneyItemRare);
    }

    function addXpCandyToLootTable(xpCandyItemCommon, xpCandyItemRare, lootTable) {
        event
        .addLootTableModifier(lootTable)
            .randomChance(0.2)
            .addLoot(xpCandyItemCommon);

        event
        .addLootTableModifier(lootTable)
            .randomChance(0.5)
            .addLoot(xpCandyItemCommon, xpCandyItemCommon);

        event
        .addLootTableModifier(lootTable)
            .randomChance(0.1)
            .addLoot(xpCandyItemRare);
    }

    function addRareCandyToLootTable(lootTable) {
        event
        .addLootTableModifier(lootTable)
            .randomChance(0.05)
            .addLoot("cobblemon:rare_candy");
    }

    function addTieredLootToLootTable(xpCandyItemCommon, xpCandyItemRare, moneyItemCommon, moneyItemRare, lootTable) {
        addMoneyToLootTable(moneyItemCommon, moneyItemRare, lootTable)
        addXpCandyToLootTable(xpCandyItemCommon, xpCandyItemRare, lootTable)
        addRareCandyToLootTable(lootTable)
    }

    function addLowTierLootToLootTable(lootTable) {
        addTieredLootToLootTable(
            "cobblemon:exp_candy_xs",
            "cobblemon:exp_candy_s",
            "numismatics:spur",
            "numismatics:bevel",
            lootTable
        )

        addLowTierPokeballsToLootTable(lootTable, 0.2)
    }

    function addMidTierLootToLootTable(lootTable) {
        addTieredLootToLootTable(
            "cobblemon:exp_candy_s",
            "cobblemon:exp_candy_m",
            "numismatics:bevel",
            "numismatics:sprocket",
            lootTable
        )

        addMidTierPokeballsToLootTable(lootTable, 0.06)
    }

    function addHighTierLootToLootTable(lootTable) {
        addTieredLootToLootTable(
            "cobblemon:exp_candy_m",
            "cobblemon:exp_candy_l",
            "numismatics:sprocket",
            "numismatics:cog",
            lootTable
        )

        addHighTierPokeballsToLootTable(lootTable, 0.11)
    }

    addLowTierLootToLootTable(/.*chests.*.village.*/)
    addLowTierLootToLootTable("minecraft:chests/igloo_chest")
    addLowTierLootToLootTable("minecraft:chests/pillager_outpost")
    addLowTierLootToLootTable("minecraft:chests/ruined_portal")
    addLowTierLootToLootTable("minecraft:chests/shipwreck_supply")
    addLowTierLootToLootTable("minecraft:chests/simple_dungeon")
    addLowTierLootToLootTable("minecraft:chests/spawn_bonus_chest")
    addLowTierLootToLootTable("minecraft:chests/underwater_ruin_big")
    addLowTierLootToLootTable("minecraft:chests/underwater_ruin_small")
    addLowTierLootToLootTable("betterwitchhuts:chests/hut_0")

    addMidTierLootToLootTable("minecraft:chests/abandoned_mineshaft")
    addMidTierLootToLootTable("minecraft:chests/desert_pyramid")
    addMidTierLootToLootTable("minecraft:chests/jungle_temple")
    addMidTierLootToLootTable("minecraft:chests/nether_bridge")
    addMidTierLootToLootTable("minecraft:chests/shipwreck_treasure")
    addMidTierLootToLootTable("minecraft:chests/stronghold_corridor")
    addMidTierLootToLootTable("minecraft:chests/stronghold_crossing")
    addMidTierLootToLootTable("betterdeserttemples:chests/statue")
    addMidTierLootToLootTable("betterdeserttemples:chests/tomb")
    addMidTierLootToLootTable("betterdeserttemples:chests/tomb_pharaoh")
    addMidTierLootToLootTable("betterdungeons:skeleton_dungeon/chests/common")
    addMidTierLootToLootTable("betterdungeons:skeleton_dungeon/chests/middle")
    addMidTierLootToLootTable("betterdungeons:small_nether_dungeon/chests/common")
    addMidTierLootToLootTable("betterdungeons:spider_dungeon/chests/egg_room")
    addMidTierLootToLootTable("betterdungeons:zombie_dungeon/chests/common")
    addMidTierLootToLootTable("betterdungeons:zombie_dungeon/chests/special")
    addMidTierLootToLootTable("betterjungletemples:chests/treasure")
    addMidTierLootToLootTable("betterfortresses:chests/extra")
    addMidTierLootToLootTable("betterfortresses:chests/hall")
    addMidTierLootToLootTable("betterfortresses:chests/puzzle")
    addMidTierLootToLootTable("betterfortresses:chests/quarters")
    addMidTierLootToLootTable("betterfortresses:chests/storage")
    addMidTierLootToLootTable("betterstrongholds:chests/common")
    addMidTierLootToLootTable("betterstrongholds:chests/crypt")
    addMidTierLootToLootTable("betterstrongholds:chests/trap")
    addMidTierLootToLootTable("betterstrongholds:chests/treasure")

    addHighTierLootToLootTable("minecraft:chests/ancient_city")
    addHighTierLootToLootTable("minecraft:chests/bastion_bridge")
    addHighTierLootToLootTable("minecraft:chests/bastion_hoglin_stable")
    addHighTierLootToLootTable("minecraft:chests/bastion_other")
    addHighTierLootToLootTable("minecraft:chests/end_city_treasure")
    addHighTierLootToLootTable("minecraft:chests/woodland_mansion")

    function addMoneyToCobblemonLootTable(lootTable) {
        addMoneyToLootTable("numismatics:spur", "numismatics:bevel", lootTable)
    }

    addMoneyToCobblemonLootTable("cobblemon:ruins/gilded_chests/base")
    addMoneyToCobblemonLootTable("cobblemon:ruins/gilded_chests/ruins")
})