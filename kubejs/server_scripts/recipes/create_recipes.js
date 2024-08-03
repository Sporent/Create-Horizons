ServerEvents.recipes(event => {

  function createOreCrushingRecipe(oreBlock, oreDropItem, oreDropItemCount, secondaryOreDropChance, baseStoneBlock) {
    event.custom({
      type: "create:crushing",
      ingredients: [
        {
          item: oreBlock
        }
      ],
      results: [
        {
          item: oreDropItem,
          count: oreDropItemCount
        },
        {
          item: oreDropItem,
          chance: secondaryOreDropChance
        },
        {
          item: "create:experience_nugget",
          chance: 0.75
        },
        {
          item: baseStoneBlock,
          chance: 0.125
        }
      ],
      "processingTime": 250
    })
  }
  
  function createSimpleOreCrushingRecipe(oreBlock, oreDropItem, baseStoneBlock) {
    createOreCrushingRecipe(oreBlock, oreDropItem, 1, 0.75, baseStoneBlock)
  }

  function createHauntingRecipe(ingredient, result) {
    event.custom(
      {
        type: 'create:haunting',
        ingredients: [
          {
            item: ingredient
          }
        ],
        results: [
          {
            item: result
          }
        ]
      }
    )
  }

  createSimpleOreCrushingRecipe('cobblemon:dawn_stone_ore', 'cobblemon:dawn_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_dawn_stone_ore', 'cobblemon:dawn_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('cobblemon:dusk_stone_ore', 'cobblemon:dusk_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_dusk_stone_ore', 'cobblemon:dusk_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('cobblemon:fire_stone_ore', 'cobblemon:fire_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_fire_stone_ore', 'cobblemon:fire_stone', 'minecraft:cobbled_deepslate')
  createSimpleOreCrushingRecipe('cobblemon:nether_fire_stone_ore', 'cobblemon:fire_stone', 'minecraft:netherrack')

  createSimpleOreCrushingRecipe('cobblemon:ice_stone_ore', 'cobblemon:ice_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_ice_stone_ore', 'cobblemon:ice_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('cobblemon:leaf_stone_ore', 'cobblemon:leaf_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_leaf_stone_ore', 'cobblemon:leaf_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('cobblemon:moon_stone_ore', 'cobblemon:moon_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_moon_stone_ore', 'cobblemon:moon_stone', 'minecraft:cobbled_deepslate')
  createSimpleOreCrushingRecipe('cobblemon:dripstone_moon_stone_ore', 'cobblemon:moon_stone', 'minecraft:dripstone_block')
  
  createSimpleOreCrushingRecipe('cobblemon:shiny_stone_ore', 'cobblemon:shiny_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_shiny_stone_ore', 'cobblemon:shiny_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('cobblemon:sun_stone_ore', 'cobblemon:sun_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_sun_stone_ore', 'cobblemon:sun_stone', 'minecraft:cobbled_deepslate')
  createSimpleOreCrushingRecipe('cobblemon:terracotta_sun_stone_ore', 'cobblemon:sun_stone', 'minecraft:terracotta')

  createSimpleOreCrushingRecipe('cobblemon:thunder_stone_ore', 'cobblemon:thunder_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_thunder_stone_ore', 'cobblemon:thunder_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('cobblemon:water_stone_ore', 'cobblemon:water_stone', 'minecraft:cobblestone')
  createSimpleOreCrushingRecipe('cobblemon:deepslate_water_stone_ore', 'cobblemon:water_stone', 'minecraft:cobbled_deepslate')

  createSimpleOreCrushingRecipe('natures_spirit:chert_coal_ore', 'minecraft:coal', 'natures_spirit:chert')
  createSimpleOreCrushingRecipe('natures_spirit:chert_iron_ore', 'create:crushed_raw_iron',  'natures_spirit:chert')
  createOreCrushingRecipe('natures_spirit:chert_copper_ore', 'create:crushed_raw_copper', 5, 0.25, 'natures_spirit:chert')
  createSimpleOreCrushingRecipe('natures_spirit:chert_gold_ore', 'create:crushed_raw_gold',  'natures_spirit:chert')
  createOreCrushingRecipe('natures_spirit:chert_redstone_ore', 'minecraft:redstone', 6, 0.5, 'natures_spirit:chert')
  createOreCrushingRecipe('natures_spirit:chert_lapis_ore', 'minecraft:lapis_lazuli', 10, 0.5, 'natures_spirit:chert')
  createSimpleOreCrushingRecipe('natures_spirit:chert_emerald_ore', 'minecraft:emerald',  'natures_spirit:chert')
  createSimpleOreCrushingRecipe('natures_spirit:chert_diamond_ore', 'minecraft:diamond',  'natures_spirit:chert')

  createHauntingRecipe('create:experience_nugget', 'cobblemon:exp_candy_s')

  createHauntingRecipe('galosphere:pink_salt', 'galosphere:rose_pink_salt')
  createHauntingRecipe('galosphere:rose_pink_salt', 'galosphere:pastel_pink_salt')

  createHauntingRecipe('minecraft:iron_ingot', 'galosphere:silver_ingot')
  createHauntingRecipe('minecraft:iron_nugget', 'galosphere:silver_nugget')

  //create mechanical crafter recipe for artisan bread
  event.custom({
      "type": "create:mechanical_crafting",
      "pattern": [
        " fff ",
        "fefef",
        " fff "
      ],
      "key": {
        "f": {
          item: "bountifulfares:flour"
        },
        "e": {
          item: "minecraft:egg"
        }
      },
      "result": {
        item: "bountifulfares:artisan_bread",
        "count": 1
      },
      "acceptMirrored": false
  })

  //add smelting and blasting recipe for silver ingot from crushed silver
  event.smelting('galosphere:silver_ingot', 'create:crushed_raw_silver')
  event.blasting('galosphere:silver_ingot', 'create:crushed_raw_silver')
  //add splashing recipe for silver nuggets and feldspar from crushed silver
  event.custom({
      type: "create:splashing",
      ingredients: [
        {
          item: "create:crushed_raw_silver"
        }
      ],
      results: [
        {
          item: "galosphere:silver_nugget",
          "count": 9,
        },
        {
          item: "bountifulfares:feldspar",
          chance: 0.75
        }
      ]  
  })

  //add splashing recipe for silver nuggets from pink sand
  event.custom({
      type: "create:splashing",
      ingredients: [
        {
          item: "natures_spirit:pink_sand"
        }
      ],
      results: [
        {
          item: "galosphere:silver_nugget",
          count: 3,
          chance: 0.12
        },
        {
          item: "minecraft:dead_bush",
          chance: 0.05
        }
      ]  
  })

  //splashing recipe to automate copper
  event.recipes.create.splashing(['create:copper_nugget', Item.of('create:copper_nugget').withChance(0.25), Item.of('minecraft:kelp').withChance(0.05)], 'minecraft:clay_ball')


  event.replaceInput({id: "numismatics:crafting/bank_terminal"},
    "create:precision_mechanism",
    "create:iron_sheet"
  )
})