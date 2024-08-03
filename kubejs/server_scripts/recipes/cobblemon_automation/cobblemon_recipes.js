ServerEvents.recipes(event => {
  //remove all pokeball recipes from cobblemon
  event.remove({mod: 'cobblemon', output: '#cobblemon:poke_balls',})

  let apricornText = "cobblemon:"
  let cutApricornText = "kubejs:"

  function createPokeballRecipe(metalSheet, apricorn1, apricorn2, apricorn3, apricorn4, ball) {

    let apricornName1 = apricornText.concat(apricorn1, "_apricorn")
    let apricornName2 = apricornText.concat(apricorn2, "_apricorn")
    let apricornName3 = apricornText.concat(apricorn3, "_apricorn")
    let apricornName4 = apricornText.concat(apricorn4, "_apricorn")

    event.custom({
      type: "minecraft:crafting_shaped",
      key: {
        "m": {
          item: metalSheet
        },
        "1": {
          item: apricornName1
        },
        "2": {
          item: apricornName2
        },
        "3": {
          item: apricornName3
        },
        "4": {
          item: apricornName4
        }
      },
      pattern: [
        " 1 ",
        "2m3",
        " 4 "
      ],
      result: {
        item: ball
      }
    })

    let cutApricornName1 = cutApricornText.concat("cut_", apricorn1, "_apricorn")
    let cutApricornName2 = cutApricornText.concat("cut_", apricorn2, "_apricorn")
    let cutApricornName3 = cutApricornText.concat("cut_", apricorn3, "_apricorn")
    let cutApricornName4 = cutApricornText.concat("cut_", apricorn4, "_apricorn")

    event.custom({
      type: "minecraft:crafting_shaped",
      key: {
        "m": {
          item: metalSheet
        },
        "1": {
          item: cutApricornName1
        },
        "2": {
          item: cutApricornName2
        },
        "3": {
          item: cutApricornName3
        },
        "4": {
          item: cutApricornName4
        }
      },
      pattern: [
        " 1 ",
        "2m3",
        " 4 "
      ],
      result: {
        item: ball
      }
    })
  }

  function createAncientPokeballRecipe(metalSheet, tumblestone, apricorn1, apricorn2, ball) {

    let apricornName1 = apricornText.concat(apricorn1, "_apricorn")
    let apricornName2 = apricornText.concat(apricorn2, "_apricorn")

    event.custom({
      type: "minecraft:crafting_shaped",
      key: {
        "m": {
          item: metalSheet
        },
        "1": {
          item: apricornName1
        },
        "T": {
          item: tumblestone
        },
        "2": {
          item: apricornName2
        }
      },
      pattern: [
        " 1 ",
        "TmT",
        " 2 "
      ],
      result: {
        item: ball
      }
    })
    
    let cutApricornText = "kubejs:"
    let cutApricornName1 = cutApricornText.concat("cut_", apricorn1, "_apricorn")
    let cutApricornName2 = cutApricornText.concat("cut_", apricorn2, "_apricorn")

    event.custom({
      type: "minecraft:crafting_shaped",
      key: {
        "m": {
          item: metalSheet
        },
        "1": {
          item: cutApricornName1
        },
        "T": {
          item: tumblestone
        },
        "2": {
          item: cutApricornName2
        }
      },
      pattern: [
        " 1 ",
        "TmT",
        " 2 "
      ],
      result: {
        item: ball
      }
    })
  }

  function createCopperPokeballRecipe(apricorn1, apricorn2, apricorn3, apricorn4, ball) {
    createPokeballRecipe('create:copper_sheet', apricorn1, apricorn2, apricorn3, apricorn4, ball)
  }

  function createIronPokeballRecipe(apricorn1, apricorn2, apricorn3, apricorn4, ball) {
    createPokeballRecipe('create:iron_sheet', apricorn1, apricorn2, apricorn3, apricorn4, ball)
  }

  function createGoldPokeballRecipe(apricorn1, apricorn2, apricorn3, apricorn4, ball) {
    createPokeballRecipe('create:golden_sheet', apricorn1, apricorn2, apricorn3, apricorn4, ball)
  }

  function createSimplePokeballRecipe(apricorn, ball) {
    createCopperPokeballRecipe(apricorn, apricorn, apricorn, apricorn, ball)
  }

  function createSimpleAncientPokeballRecipe(apricorn, ball) {
    createAncientPokeballRecipe('create:copper_sheet', 'cobblemon:tumblestone',  apricorn, apricorn, ball)
  }

  function createAncientFeatherBallRecipe(metalSheet, ball) {
    createAncientPokeballRecipe(metalSheet, 'cobblemon:sky_tumblestone', 'blue', 'white', ball)
  }

  function createAncientHeavyBallRecipe(metalSheet, ball) {
    createAncientPokeballRecipe(metalSheet, 'cobblemon:black_tumblestone', 'black', 'black', ball)
  }
  
  //simple balls (1 apricorn type and copper sheet)
  createSimplePokeballRecipe("red", "cobblemon:poke_ball")
  createSimplePokeballRecipe("yellow", "cobblemon:citrine_ball")
  createSimplePokeballRecipe("green", "cobblemon:verdant_ball")
  createSimplePokeballRecipe("blue", "cobblemon:azure_ball")
  createSimplePokeballRecipe("pink", "cobblemon:roseate_ball")
  createSimplePokeballRecipe("black", "cobblemon:slate_ball")
  createSimplePokeballRecipe("white", "cobblemon:premier_ball")

  //other copper balls
  createCopperPokeballRecipe("pink", "white", "white", "pink", "cobblemon:heal_ball")
  createCopperPokeballRecipe("yellow", "green", "green", "white", "cobblemon:safari_ball")

  //iron balls
  createIronPokeballRecipe("blue", "red", "red", "blue", "cobblemon:great_ball")

  createIronPokeballRecipe("black", "blue", "blue", "black", "cobblemon:heavy_ball")
  createIronPokeballRecipe("red", "yellow", "yellow", "white", "cobblemon:fast_ball")
  createIronPokeballRecipe("white", "red", "red", "red", "cobblemon:sport_ball")
  createIronPokeballRecipe("black", "yellow", "pink", "red", "cobblemon:level_ball")
  createIronPokeballRecipe("red", "blue", "green", "red", "cobblemon:lure_ball")
  createIronPokeballRecipe("green", "yellow", "yellow", "green", "cobblemon:nest_ball")
  createIronPokeballRecipe("yellow", "green", "green", "red", "cobblemon:friend_ball")
  createIronPokeballRecipe("red", "green", "green", "green", "cobblemon:park_ball")
  createIronPokeballRecipe("white", "blue", "blue", "blue", "cobblemon:dive_ball")
  createIronPokeballRecipe("yellow", "blue", "black", "white", "cobblemon:moon_ball")
  createIronPokeballRecipe("black", "blue", "blue", "white", "cobblemon:net_ball")

  //golden balls
  createGoldPokeballRecipe("black", "yellow", "yellow", "black", "cobblemon:ultra_ball")

  createGoldPokeballRecipe("white", "pink", "pink", "pink", "cobblemon:love_ball")
  createGoldPokeballRecipe("green", "black", "black", "green", "cobblemon:dusk_ball")
  createGoldPokeballRecipe("blue", "yellow", "yellow", "blue", "cobblemon:quick_ball")
  createGoldPokeballRecipe("black", "red", "red", "yellow", "cobblemon:repeat_ball")
  createGoldPokeballRecipe("black", "white", "red", "black", "cobblemon:luxury_ball")
  createGoldPokeballRecipe("red", "white", "white", "black", "cobblemon:timer_ball")

  //diamond balls
  createPokeballRecipe("minecraft:diamond", "red", "pink", "pink", "blue", "cobblemon:dream_ball")

  //ancient simple balls
  createSimpleAncientPokeballRecipe('red', 'cobblemon:ancient_poke_ball')
  createSimpleAncientPokeballRecipe('yellow', 'cobblemon:ancient_citrine_ball')
  createSimpleAncientPokeballRecipe('green', 'cobblemon:ancient_verdant_ball')
  createSimpleAncientPokeballRecipe('blue', 'cobblemon:ancient_azure_ball')
  createSimpleAncientPokeballRecipe('pink', 'cobblemon:ancient_roseate_ball')
  createSimpleAncientPokeballRecipe('black', 'cobblemon:ancient_slate_ball')
  createSimpleAncientPokeballRecipe('white', 'cobblemon:ancient_ivory_ball')

  //ancient great and ultra balls
  createAncientPokeballRecipe('create:iron_sheet', 'cobblemon:tumblestone', 'red', 'blue', 'cobblemon:ancient_great_ball')
  createAncientPokeballRecipe('create:golden_sheet', 'cobblemon:tumblestone', 'yellow', 'black', 'cobblemon:ancient_ultra_ball')

  //ancient feather balls
  createAncientFeatherBallRecipe('create:copper_sheet', 'cobblemon:ancient_feather_ball')
  createAncientFeatherBallRecipe('create:iron_sheet', 'cobblemon:ancient_wing_ball')
  createAncientFeatherBallRecipe('create:golden_sheet', 'cobblemon:ancient_jet_ball')

  //ancient heavy balls
  createAncientHeavyBallRecipe('create:copper_sheet', 'cobblemon:ancient_heavy_ball')
  createAncientHeavyBallRecipe('create:iron_sheet', 'cobblemon:ancient_leaden_ball')
  createAncientHeavyBallRecipe('create:golden_sheet', 'cobblemon:ancient_gigaton_ball')

  function replaceIngotWithSheet(ingot, sheet) {
    event.replaceInput(
      {mod: 'cobblemon', input: '#cobblemon:apricorns'},
      ingot,
      sheet
    )
  }
  
  replaceIngotWithSheet('minecraft:copper_ingot', 'create:copper_sheet')
  replaceIngotWithSheet('minecraft:iron_ingot', 'create:iron_sheet')
  replaceIngotWithSheet('minecraft:gold_ingot', 'create:golden_sheet')

  event.replaceInput({mod: 'cobblemon', input: 'minecraft:iron_ingot', not: {id: 'cobblemon:magnet'}},
    'minecraft:iron_ingot',
    'galosphere:silver_ingot'
  )

  event.replaceInput({id: 'cobblemon:soothe_bell'},
    'minecraft:iron_nugget',
    'galosphere:silver_nugget'
  )

  function createSmeltingAndBlastingRecipes(oreBlock, oreDropItem) {
    event.smelting(oreDropItem, oreBlock)
    event.blasting(oreDropItem, oreBlock)
  }
  
  createSmeltingAndBlastingRecipes('cobblemon:terracotta_sun_stone_ore', 'cobblemon:sun_stone')

  function createApricornSawingRecipe(apricornItem, cutApricornItem) {
    event.custom({
      type: "create:cutting",
      ingredients: [
        {
          item: apricornItem
        }
      ],
      results: [
        {
          item: cutApricornItem,
          count: 2
        }
      ],
      processingTime: 25
    })
  }
  
  createApricornSawingRecipe('cobblemon:red_apricorn', 'kubejs:cut_red_apricorn')
  createApricornSawingRecipe('cobblemon:yellow_apricorn', 'kubejs:cut_yellow_apricorn')
  createApricornSawingRecipe('cobblemon:green_apricorn', 'kubejs:cut_green_apricorn')
  createApricornSawingRecipe('cobblemon:blue_apricorn', 'kubejs:cut_blue_apricorn')
  createApricornSawingRecipe('cobblemon:pink_apricorn', 'kubejs:cut_pink_apricorn')
  createApricornSawingRecipe('cobblemon:black_apricorn', 'kubejs:cut_black_apricorn')
  createApricornSawingRecipe('cobblemon:white_apricorn', 'kubejs:cut_white_apricorn')

  function createTumblestoneMixingRecipe(tumblestone) {
    event.recipes.create.mixing("2x ".concat(tumblestone), [tumblestone, Fluid.lava(20250)]).heated()
  }

  createTumblestoneMixingRecipe("cobblemon:tumblestone")
  createTumblestoneMixingRecipe("cobblemon:sky_tumblestone")
  createTumblestoneMixingRecipe("cobblemon:black_tumblestone")

})