ServerEvents.recipes(event => {

    //remove redundant cake recipe
    event.remove({id: "farmersdelight:cake_from_milk_bottle"})

    //remove dough from one flour crafting recipe
    event.remove({id: "create:crafting/appliances/dough"})
    //replace create dough with farmer's delight dough in all recipes
    event.replaceInput(
        {input: "#c:wheat_dough"},
        "#c:wheat_dough",
        "farmersdelight:wheat_dough"
    )
    event.replaceInput(
        {input: "#c:dough"},
        "#c:dough",
        "farmersdelight:wheat_dough"
    )
    event.replaceOutput(
        {output: "#c:wheat_dough"},
        "#c:wheat_dough",
        "farmersdelight:wheat_dough"
    )
    event.replaceOutput(
        {output: "create:dough"},
        "create:dough",
        "farmersdelight:wheat_dough"
    )
    event.remove({id: "create:mixing/dough_by_mixing"})
    //remove crafting recipes for some meals so they can only be cooked
    event.remove({id: "minecraft:rabbit_stew_from_brown_mushroom"})
    event.remove({id: "minecraft:rabbit_stew_from_red_mushroom"})
    event.remove({id: "cobblemon:leek_and_potato_stew"})
    event.remove({id: "bountifulfares:leek_stew"})
    event.remove({id: "bountifulfares:apple_stew"})
    event.remove({id: "bountifulfares:stone_stew"})
    event.remove({id: "bountifulfares:bountiful_stew"})
    event.remove({id: "bountifulfares:passion_glazed_salmon"})
    event.remove({id: "bountifulfares:crusted_beef"})
    event.remove({id: "bountifulfares:crimson_chow"})
    event.remove({id: "bountifulfares:warped_chow"})
    

    function createFoodSliceCuttingAndCompactingRecipes(food, foodSlice) {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [
                {
                    item: food
                }
            ],
            tool: {
                tag: 'c:tools/knives'
            },
            result: [
                {
                    item: foodSlice,
                    count: 4
                }
            ]
          })
  
        event.custom({
            type: "minecraft:crafting_shaped",
            category: "misc",
            key: {
                "#": {
                    item: foodSlice
                }
            },
            pattern: [
                "##",
                "##"
            ],
            result: {
                item: food
            },
            show_notification: true
        })
    }

    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:apple_pie", "kubejs:apple_pie_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:orange_pie", "kubejs:orange_pie_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:lemon_pie", "kubejs:lemon_pie_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:plum_pie", "kubejs:plum_pie_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:hoary_pie", "kubejs:hoary_pie_slice")

    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:passion_fruit_tart", "kubejs:passion_fruit_tart_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:elderberry_tart", "kubejs:elderberry_tart_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:glow_berry_tart", "kubejs:glow_berry_tart_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:sweet_berry_tart", "kubejs:sweet_berry_tart_slice")
    createFoodSliceCuttingAndCompactingRecipes("bountifulfares:lapisberry_tart", "kubejs:lapisberry_tart_slice")

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "bountifulfares:cocoa_cake"
            }
        ],
        tool: {
            tag: "c:tools/knives"
        },
        result: [
            {
                item: "kubejs:cocoa_cake_slice",
                count: 7
            }
        ]
    })

    event.shapeless(
        Item.of("bountifulfares:cocoa_cake"),
        ['7x kubejs:cocoa_cake_slice']
    )

    event.custom({
        "type": "farmersdelight:cooking",
        "container": {
          "item": "minecraft:bowl"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            {
              item: "minecraft:baked_potato"
            },
            {
              item: "minecraft:rabbit"
            },
            {
              item: "minecraft:carrot"
            },
            {
              item: "natures_spirit:shiitake_mushroom"
            }
        ],
        recipe_book_tab: "meals",
        result: {
          item: "minecraft:rabbit_stew"
        }
    })

    event.replaceInput({input: "minecraft:milk_bucket", not: {id: "farmersdelight:milk_bottle"}},
        "minecraft:milk_bucket",
        "#c:milks"
    )

    function replaceWheatWithFlour(id) {
        event.replaceInput({id: id},
            "minecraft:wheat",
            "bountifulfares:flour"
        )
    }

    replaceWheatWithFlour("farmersdelight:pie_crust")
    replaceWheatWithFlour("farmersdelight:honey_cookie")
    replaceWheatWithFlour("farmersdelight:sweet_berry_cookie")
    replaceWheatWithFlour("farmersdelight:wheat_dough_from_water")
    replaceWheatWithFlour("farmersdelight:wheat_dough_from_eggs")

    event.recipes.create.mixing("farmersdelight:wheat_dough", [Fluid.water(27000), 'bountifulfares:flour'])

    event.custom({
        "type": "farmersdelight:cooking",
        "container": {
          "item": "minecraft:bowl"
        },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            {
              item: "minecraft:baked_potato"
            },
            {
              item: "cobblemon:roasted_leek"
            }
        ],
        recipe_book_tab: "meals",
        result: {
          item: "cobblemon:leek_and_potato_stew"
        }
    })


    //replace create wheat with bountiful fares wheat in farmer's delight pie crust create integration recipe
    event.replaceInput({id: "farmersdelight:integration/create/mixing/pie_crust_from_mixing"},
        "create:wheat_flour",
        "bountifulfares:flour"
    )
})