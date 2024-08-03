ServerEvents.recipes(event => {
    function createSmeltingAndBlastingRecipes(oreBlock, oreDropItem) {
        event.smelting(oreDropItem, oreBlock)
        event.blasting(oreDropItem, oreBlock)
    }

    createSmeltingAndBlastingRecipes("natures_spirit:chert_coal_ore", "minecraft:coal")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_iron_ore", "minecraft:iron_ingot")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_copper_ore", "minecraft:copper_ingot")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_gold_ore", "minecraft:gold_ingot")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_redstone_ore", "minecraft:redstone")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_emerald_ore", "minecraft:emerald")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_lapis_ore", "minecraft:lapis_lazuli")
    createSmeltingAndBlastingRecipes("natures_spirit:chert_diamond_ore", "minecraft:diamond")

    //pizza recipe changes
    event.replaceInput({id: "natures_spirit:pizza"},
        "minecraft:wheat",
        "bountifulfares:flour"
    )

    event.replaceInput({id: "natures_spirit:pizza"},
        "minecraft:beetroot",
        "farmersdelight:tomato"
    )

    event.shaped(
        Item.of("natures_spirit:whole_pizza", 3),
        [
          "   ",
          "TCT",
          " D "
        ],
        {
          T: "farmersdelight:tomato",
          C: "natures_spirit:cheese_bucket",
          D: "farmersdelight:wheat_dough"
        }
    )
})