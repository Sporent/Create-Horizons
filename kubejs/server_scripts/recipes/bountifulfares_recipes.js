ServerEvents.recipes(event => {
  //remove all pastry recipes
  event.remove({mod: "bountifulfares", output: "#c:pastries"})
  //remove artisan bread recipe
  event.remove({output: "bountifulfares:artisan_bread"})
  //remove tea recipes
  event.remove({mod: "bountifulfares", input: "minecraft:potion"})
  //remove all felsic stone milling recipes
  event.remove({id: "create:milling/andesite"})
  event.remove({id: "create:milling/granite"})
  event.remove({id: "create:crushing/diorite"})
  event.remove({id: "create:crushing/diorite_recycling"})
  event.remove({id: "create:crushing/tuff"})
  event.remove({id: "create:crushing/tuff_recycling"})
  //remove some candied food recipes
  event.remove({id: "bountifulfares:candy"})
  event.remove({id: "bountifulfares:candied_apple"})
  event.remove({id: "bountifulfares:candied_plum"})
  event.remove({id: "bountifulfares:candied_orange"})
  event.remove({id: "bountifulfares:candied_lemon"})
  //remove all custard recipes
  event.remove({id: "bountifulfares:custard"})
  event.remove({id: "bountifulfares:cooking/custard"})
  event.remove({id: "bountifulfares:piquant_custard"})
  event.remove({id: "bountifulfares:cooking/piquant_custard"})
  event.remove({id: "bountifulfares:passion_custard"})
  event.remove({id: "bountifulfares:cooking/passion_custard"})
  event.remove({id: "bountifulfares:cocoa_custard"})
  event.remove({id: "bountifulfares:cooking/cocoa_custard"})
  event.remove({id: "bountifulfares:ancient_custard"})
  event.remove({id: "bountifulfares:cooking/ancient_custard"})
  event.remove({id: "farmersdelight:cooking/glow_berry_custard"})
  //remove artisan cookie recipe
  event.remove({id: "bountifulfares:artisan_cookie"})



  let bountifulFaresPrefix = "bountifulfares:"

  //new recipes for crafting pies
  function createPieRecipe(fruitItem, pieItem) {
      event.custom({
          type: "minecraft:crafting_shaped",
          category: "misc",
          key: {
            "#": {
              item: "bountifulfares:flour"
            },
            "O": {
              item: "farmersdelight:pie_crust"
            },
            "f": {
              item: fruitItem
            },
            "x": {
              item: "minecraft:sugar"
            }
          },
          pattern: [
            "###",
            "fff",
            "xOx"
          ],
          result: {
            item: pieItem
          },
          show_notification: true
      })

      event.custom({
        type: "minecraft:crafting_shaped",
        category: "misc",
        key: {
          "#": {
            item: "farmersdelight:wheat_dough"
          },
          "O": {
            item: "farmersdelight:pie_crust"
          },
          "f": {
            item: fruitItem
          },
          "x": {
            item: "minecraft:sugar"
          }
        },
        pattern: [
          " # ",
          "fff",
          "xOx"
        ],
        result: {
          item: pieItem
        },
        show_notification: true
    })
  }

  //new recipe for crafting tarts
  function createTartRecipe(berryItem, tartItem) {
      event.custom({
          type: "minecraft:crafting_shaped",
          category: "misc",
          key: {
            "e": {
              item: "minecraft:egg"
            },
            "O": {
              item: "farmersdelight:pie_crust"
            },
            "f": {
              item: berryItem
            },
            "x": {
              item: "minecraft:sugar"
            }
          },
          pattern: [
            "fff",
            "efe",
            "xOx"
          ],
          result: {
            item: tartItem
          },
          show_notification: true
      })
  }

  //new recipe for crafting tarts made from berries from vanilla
  function createVanillaBerryTartRecipe(berryItem, tartItem) {
      event.custom({
          type: "minecraft:crafting_shaped",
          category: "misc",
          key: {
            "O": {
              item: "farmersdelight:pie_crust"
            },
            "f": {
              item: berryItem
            },
            "x": {
              item: "minecraft:sugar"
            }
          },
          pattern: [
            "fff",
            "fff",
            "xOx"
          ],
          result: {
            item: tartItem
          },
          show_notification: true
      })
  }

  //brewing recipes for teas with create
  function createTeaMixingRecipe(teaIngredient, teaItem) {
    event.custom({
      type: "create:mixing",
      ingredients: [
        {
          item: teaIngredient
        },
        {
          item: "minecraft:glass_bottle"
        },
        {
          fluid: "minecraft:water",
          nbt: {},
          amount: 27000
        }
      ],
      results: [
        {
          item: teaItem
        }
      ],
      heatRequirement: "heated"
    })
  }

  createPieRecipe("minecraft:apple", "bountifulfares:apple_pie")
  createPieRecipe("bountifulfares:orange", "bountifulfares:orange_pie")
  createPieRecipe("bountifulfares:lemon", "bountifulfares:lemon_pie")
  createPieRecipe("bountifulfares:plum", "bountifulfares:plum_pie")
  createPieRecipe("bountifulfares:hoary_apple", "bountifulfares:hoary_pie")

  createTartRecipe("bountifulfares:passion_fruit", "bountifulfares:passion_fruit_tart")
  createTartRecipe("bountifulfares:elderberries", "bountifulfares:elderberry_tart")
  createVanillaBerryTartRecipe("minecraft:glow_berries", "bountifulfares:glow_berry_tart")
  createVanillaBerryTartRecipe("minecraft:sweet_berries", "bountifulfares:sweet_berry_tart")
  createTartRecipe("bountifulfares:lapisberries", "bountifulfares:lapisberry_tart")

  createTeaMixingRecipe('bountifulfares:green_tea_blend', 'bountifulfares:green_tea_bottle')
  createTeaMixingRecipe('bountifulfares:black_tea_blend', 'bountifulfares:black_tea_bottle')
  createTeaMixingRecipe('bountifulfares:chamomile_tea_blend', 'bountifulfares:chamomile_tea_bottle')
  createTeaMixingRecipe('bountifulfares:honeysuckle_tea_blend', 'bountifulfares:honeysuckle_tea_bottle')
  createTeaMixingRecipe('bountifulfares:bellflower_tea_blend', 'bountifulfares:bellflower_tea_bottle')
  createTeaMixingRecipe('bountifulfares:torchflower_tea_blend', 'bountifulfares:torchflower_tea_bottle')
  
  //new glow berry custard recipe
  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 200,
    experience: 1.0,
    ingredients: [
      {
        item: "bountifulfares:custard"
      },
      {
        item: "minecraft:glow_berries"
      },
    ],
    recipe_book_tab: "misc",
    result: {
      item: "farmersdelight:glow_berry_custard"
    }
  })

  //allow c:milks and c:eggs in custard recipe
  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 200,
    experience: 1.0,
    ingredients: [
      {
        tag: "c:eggs"
      },
      {
        tag: "c:milks"
      },
      {
        item: "minecraft:sugar"
      }
    ],
    recipe_book_tab: "meals",
    result: {
      item: "bountifulfares:custard"
    }
  })

  //remake custard recipes to include base custard
  function createCustardRecipes(ingredient, output) {
    event.custom({
      type: "farmersdelight:cooking",
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        {
          item: "bountifulfares:custard"
        },
        {
          item: ingredient
        }
      ],
      recipe_book_tab: "meals",
      result: {
        item: output
      }
    })
  }

  function createMultipleIngredientCustardRecipes(ingredient1, ingredient2, output) {
      event.custom({
        type: "farmersdelight:cooking",
        cookingtime: 200,
        experience: 1.0,
        ingredients: [
          {
            item: "bountifulfares:custard"
          },
          {
            item: ingredient1
          },
          {
            item: ingredient2
          }
        ],
        recipe_book_tab: "meals",
        result: {
          item: output
        }
      })
    }

  createCustardRecipes("minecraft:sweet_berries", "bountifulfares:piquant_custard")
  createCustardRecipes("bountifulfares:passion_fruit", "bountifulfares:passion_custard")
  createMultipleIngredientCustardRecipes("minecraft:cocoa_beans", "bountifulfares:walnut", "bountifulfares:cocoa_custard")
  createMultipleIngredientCustardRecipes("bountifulfares:lapisberries", "bountifulfares:hoary_apple", "bountifulfares:ancient_custard")

  //flour gristmill -> milling recipes
  event.replaceOutput({id: "create:milling/wheat"},
    "create:wheat_flour",
    "bountifulfares:flour"
  )

  //tea leaves gristmill -> milling recipe
  function createTeaLeafMillingRecipe(teaLeafItem, teaBlendItem) {
    teaBlendItem = bountifulFaresPrefix.concat(teaBlendItem)
    event.recipes.create.milling([Item.of(teaBlendItem), Item.of(teaBlendItem).withChance(0.25)], teaLeafItem)
  }

  createTeaLeafMillingRecipe("bountifulfares:tea_leaves", "green_tea_blend")
  createTeaLeafMillingRecipe("bountifulfares:dried_tea_leaves", "black_tea_blend")
  createTeaLeafMillingRecipe("bountifulfares:chamomile_flowers", "chamomile_tea_blend")
  createTeaLeafMillingRecipe("bountifulfares:honeysuckle", "honeysuckle_tea_blend")
  createTeaLeafMillingRecipe("bountifulfares:violet_bellflower", "bellflower_tea_blend")
  createTeaLeafMillingRecipe("minecraft:torchflower", "torchflower_tea_blend")

  //walnut mulch gristmill -> milling recipe
  event.recipes.create.milling("bountifulfares:walnut_mulch", "bountifulfares:walnut")

  //feldspar from milling recipes
  event.recipes.create.milling(["minecraft:cobblestone", Item.of("bountifulfares:feldspar").withChance(0.75)], "minecraft:andesite")
  event.recipes.create.milling(["minecraft:red_sand", Item.of("bountifulfares:feldspar").withChance(0.75)], "minecraft:granite")
  event.recipes.create.milling("2x bountifulfares:feldspar", "minecraft:diorite")
  event.recipes.create.crushing([Item.of("2x bountifulfares:feldspar").withChance(0.75), Item.of("minecraft:quartz").withChance(0.25)], "minecraft:diorite")
  event.recipes.create.milling("2x bountifulfares:feldspar", "minecraft:tuff")
  event.recipes.create.crushing(
    [
      Item.of("bountifulfares:feldspar",).withChance(0.75),
      Item.of("minecraft:gold_nugget",).withChance(0.10),
      Item.of("create:copper_nugget",).withChance(0.10),
      Item.of("create:zinc_nugget",).withChance(0.10),
      Item.of("minecraft:iron_nugget",).withChance(0.10),
      Item.of("galosphere:silver_nugget").withChance(0.10)
    ],
    "minecraft:tuff"
  )

  //new candy recipes
  event.recipes.create.mixing("bountifulfares:candy", ["minecraft:sugar", "minecraft:honey_bottle"]).heated()

  event.replaceInput({id: "bountifulfares:piquant_candy"},
    "minecraft:sugar",
    "bountifulfares:candy"
  )
  
  event.replaceInput({id: "bountifulfares:sour_candy"},
    "minecraft:sugar",
    "bountifulfares:candy"
  )

  event.replaceInput({id: "bountifulfares:bitter_candy"},
    "minecraft:sugar",
    "bountifulfares:candy"
  )

  function createCandiedFruitMixingRecipe(fruitItem, candiedFruitItem) {
    event.recipes.create.mixing(candiedFruitItem, [fruitItem, "minecraft:sugar"]).heated()
  }

  createCandiedFruitMixingRecipe("minecraft:apple", "bountifulfares:candied_apple")
  createCandiedFruitMixingRecipe("bountifulfares:plum", "bountifulfares:candied_plum")
  createCandiedFruitMixingRecipe("bountifulfares:orange", "bountifulfares:candied_orange")
  createCandiedFruitMixingRecipe("bountifulfares:lemon", "bountifulfares:candied_lemon")

  //artisan cookie recipe
  event.shapeless(
    Item.of("bountifulfares:artisan_cookie", 2),
    [
      "bountifulfares:elderberries",
      "bountifulfares:flour", 	       
      "minecraft:sugar"
    ]
  )
})