ServerEvents.recipes(event => {

  let kubejsPrefix = "kubejs:"
  let cobblemonPrefix = "cobblemon:"


  //sequenced assembly recipes for all pokeballs in cobblemon
  function createPokeballAssemblyRecipe(metalSheet, pokeballTemplate, ball) {
    
    let pokeballTemplateText = kubejsPrefix.concat(pokeballTemplate, "_pokeball_template")

      event.custom({
          type: "create:sequenced_assembly",
          ingredient: {
            item: metalSheet
          },
          transitionalItem: {
            "item": "kubejs:incomplete_pokeball"
          },
          sequence: [
            {
              type: "create:deploying",
              ingredients: [
                {
                  item: "kubejs:incomplete_pokeball"
                },
                {
                  item: pokeballTemplateText
                }
              ],
              results: [
                {
                  item: "kubejs:incomplete_pokeball"
                }
              ]
            },
            {
              type: "create:deploying",
              ingredients: [
                {
                  item: "kubejs:incomplete_pokeball"
                },
                {
                  item: "galosphere:silver_nugget"
                }
              ],
              results: [
                {
                  item: "kubejs:incomplete_pokeball"
                }
              ]
            },
            {
              type: "create:pressing",
              ingredients: [
                {
                  item: "kubejs:incomplete_pokeball"
                }
              ],
              results: [
                {
                  item: "kubejs:incomplete_pokeball"
                }
              ]
            }
          ],
          results: [
            {
              item: ball,
              count: 2
            }
          ],
          loops: 1
      })
  }

  function createSimplePokeballAssemblyRecipe(apricorn, ball) {
    event.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "create:copper_sheet"
      },
      transitionalItem: {
        "item": "kubejs:incomplete_pokeball"
      },
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:incomplete_pokeball"
            },
            {
              item: apricorn
            }
          ],
          results: [
            {
              item: "kubejs:incomplete_pokeball"
            }
          ]
        },
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "kubejs:incomplete_pokeball"
            },
            {
              item: "galosphere:silver_nugget"
            }
          ],
          results: [
            {
              item: "kubejs:incomplete_pokeball"
            }
          ]
        },
        {
          type: "create:pressing",
          ingredients: [
            {
              item: "kubejs:incomplete_pokeball"
            }
          ],
          results: [
            {
              item: "kubejs:incomplete_pokeball"
            }
          ]
        }
      ],
      results: [
        {
          item: ball,
          count: 2
        }
      ],
      loops: 1
    })
  }

  function createCopperPokeballAssemblyRecipe(pokeballTemplate, ball) {
    createPokeballAssemblyRecipe("create:copper_sheet", pokeballTemplate, ball)
  }

  function createIronPokeballAssemblyRecipe(pokeballTemplate, ball) {
    createPokeballAssemblyRecipe("create:iron_sheet", pokeballTemplate, ball)
  }

  function createGoldPokeballAssemblyRecipe(pokeballTemplate, ball) {
    createPokeballAssemblyRecipe("create:golden_sheet", pokeballTemplate, ball)
  }

  //simple balls
  createSimplePokeballAssemblyRecipe("kubejs:cut_red_apricorn", "cobblemon:poke_ball")
  createSimplePokeballAssemblyRecipe("kubejs:cut_yellow_apricorn", "cobblemon:citrine_ball")
  createSimplePokeballAssemblyRecipe("kubejs:cut_green_apricorn", "cobblemon:verdant_ball")
  createSimplePokeballAssemblyRecipe("kubejs:cut_blue_apricorn", "cobblemon:azure_ball")
  createSimplePokeballAssemblyRecipe("kubejs:cut_pink_apricorn", "cobblemon:roseate_ball")
  createSimplePokeballAssemblyRecipe("kubejs:cut_black_apricorn", "cobblemon:slate_ball")
  createSimplePokeballAssemblyRecipe("kubejs:cut_white_apricorn", "cobblemon:premier_ball")
  //other copper balls
  createCopperPokeballAssemblyRecipe("pink_white", "cobblemon:heal_ball")
  createCopperPokeballAssemblyRecipe("yellow_green_white", "cobblemon:safari_ball")
  //iron balls
  createIronPokeballAssemblyRecipe("red_blue", "cobblemon:great_ball")
  createIronPokeballAssemblyRecipe("black_blue", "cobblemon:heavy_ball")
  createIronPokeballAssemblyRecipe("red_yellow", "cobblemon:fast_ball")
  createIronPokeballAssemblyRecipe("red_white", "cobblemon:sport_ball")
  createIronPokeballAssemblyRecipe("black_yellow_pink_red", "cobblemon:level_ball")
  createIronPokeballAssemblyRecipe("red_blue_green", "cobblemon:lure_ball")
  createIronPokeballAssemblyRecipe("yellow_green", "cobblemon:nest_ball")
  createIronPokeballAssemblyRecipe("yellow_green_red", "cobblemon:friend_ball")
  createIronPokeballAssemblyRecipe("red_green", "cobblemon:park_ball")
  createIronPokeballAssemblyRecipe("white_blue", "cobblemon:dive_ball")
  createIronPokeballAssemblyRecipe("yellow_blue_black_white", "cobblemon:moon_ball")
  createIronPokeballAssemblyRecipe("black_blue_white", "cobblemon:net_ball")
  //gold balls
  createGoldPokeballAssemblyRecipe("black_yellow", "cobblemon:ultra_ball")
  createGoldPokeballAssemblyRecipe("pink_white", "cobblemon:love_ball")
  createGoldPokeballAssemblyRecipe("green_black", "cobblemon:dusk_ball")
  createGoldPokeballAssemblyRecipe("yellow_blue", "cobblemon:quick_ball")
  createGoldPokeballAssemblyRecipe("black_red_yellow", "cobblemon:repeat_ball")
  createGoldPokeballAssemblyRecipe("black_white_red", "cobblemon:luxury_ball")
  createGoldPokeballAssemblyRecipe("red_white_black", "cobblemon:timer_ball")
  //diamond balls
  createPokeballAssemblyRecipe("minecraft:diamond", "red_pink_blue", "cobblemon:dream_ball")
  //ancient simple balls
  createCopperPokeballAssemblyRecipe('ancient_red', 'cobblemon:ancient_poke_ball')
  createCopperPokeballAssemblyRecipe('ancient_yellow', 'cobblemon:ancient_citrine_ball')
  createCopperPokeballAssemblyRecipe('ancient_green', 'cobblemon:ancient_verdant_ball')
  createCopperPokeballAssemblyRecipe('ancient_blue', 'cobblemon:ancient_azure_ball')
  createCopperPokeballAssemblyRecipe('ancient_pink', 'cobblemon:ancient_roseate_ball')
  createCopperPokeballAssemblyRecipe('ancient_black', 'cobblemon:ancient_slate_ball')
  createCopperPokeballAssemblyRecipe('ancient_white', 'cobblemon:ancient_ivory_ball')
  //ancient great and ultra balls
  createIronPokeballAssemblyRecipe('ancient_red_blue', 'cobblemon:ancient_great_ball')
  createGoldPokeballAssemblyRecipe('ancient_black_yellow', 'cobblemon:ancient_ultra_ball')
  //ancient feather balls
  createCopperPokeballAssemblyRecipe('ancient_feather', 'cobblemon:ancient_feather_ball')
  createIronPokeballAssemblyRecipe('ancient_feather', 'cobblemon:ancient_wing_ball')
  createGoldPokeballAssemblyRecipe('ancient_feather', 'cobblemon:ancient_jet_ball')
  //ancient heavy balls
  createCopperPokeballAssemblyRecipe('ancient_heavy', 'cobblemon:ancient_heavy_ball')
  createIronPokeballAssemblyRecipe('ancient_heavy', 'cobblemon:ancient_leaden_ball')
  createGoldPokeballAssemblyRecipe('ancient_heavy', 'cobblemon:ancient_gigaton_ball')

  //beast ball recipe
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "minecraft:diamond"
    },
    transitionalItem: {
      "item": "kubejs:incomplete_pokeball"
    },
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            item: "create:golden_sheet"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            item: "minecraft:echo_shard"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            item: "galosphere:silver_nugget"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      }
    ],
    results: [
      {
        item: "cobblemon:beast_ball",
        count: 2
      }
    ],
    loops: 1
  })

  //master ball recipe
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "minecraft:nether_star"
    },
    transitionalItem: {
      "item": "kubejs:incomplete_pokeball"
    },
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            item: "minecraft:shulker_shell"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            item: "createdeco:netherite_sheet"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:filling",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            fluid: "minecraft:lava",
            nbt: {},
            amount: 40500
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          },
          {
            item: "galosphere:silver_nugget"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ],
        results: [
          {
            item: "kubejs:incomplete_pokeball"
          }
        ]
      }
    ],
    results: [
      {
        item: "cobblemon:master_ball"
      }
    ],
    loops: 2
  })


  //deploying recipes for pokeball templates
  function createPokeballTemplateRecipe(input, deployerInput, Templateoutput) {

    let pokeballTemplateText = kubejsPrefix.concat(Templateoutput, "_pokeball_template")
    let inputText = kubejsPrefix.concat(input)

    event.custom({
      type: "create:deploying",
      ingredients: [
        {
          item: inputText
        },
        {
          item: deployerInput
        }
      ],
      results: [
        {
          item: pokeballTemplateText
        }
      ]
    })
  }

  createPokeballTemplateRecipe('cut_red_apricorn', 'kubejs:cut_yellow_apricorn', 'red_yellow')
  createPokeballTemplateRecipe('red_yellow_pokeball_template', 'kubejs:cut_white_apricorn', 'red_yellow_white')
  createPokeballTemplateRecipe('cut_red_apricorn', 'kubejs:cut_green_apricorn', 'red_green')
  createPokeballTemplateRecipe('cut_red_apricorn', 'kubejs:cut_blue_apricorn', 'red_blue')
  createPokeballTemplateRecipe('red_blue_pokeball_template', 'kubejs:cut_green_apricorn', 'red_blue_green')
  createPokeballTemplateRecipe('cut_red_apricorn', 'kubejs:cut_pink_apricorn', 'red_pink')
  createPokeballTemplateRecipe('red_pink_pokeball_template', 'kubejs:cut_blue_apricorn', 'red_pink_blue')
  createPokeballTemplateRecipe('cut_red_apricorn', 'kubejs:cut_white_apricorn', 'red_white')
  createPokeballTemplateRecipe('red_white_pokeball_template', 'kubejs:cut_black_apricorn', 'red_white_black')

  createPokeballTemplateRecipe('cut_yellow_apricorn', 'kubejs:cut_green_apricorn', 'yellow_green')
  createPokeballTemplateRecipe('yellow_green_pokeball_template', 'kubejs:cut_red_apricorn', 'yellow_green_red')
  createPokeballTemplateRecipe('yellow_green_pokeball_template', 'kubejs:cut_white_apricorn', 'yellow_green_white')
  createPokeballTemplateRecipe('cut_yellow_apricorn', 'kubejs:cut_blue_apricorn', 'yellow_blue')
  createPokeballTemplateRecipe('yellow_blue_pokeball_template', 'kubejs:cut_black_apricorn', 'yellow_blue_black')
  createPokeballTemplateRecipe('yellow_blue_black_pokeball_template', 'kubejs:cut_white_apricorn', 'yellow_blue_black_white') //(moon ball)

  createPokeballTemplateRecipe('cut_green_apricorn', 'kubejs:cut_black_apricorn', 'green_black')

  createPokeballTemplateRecipe('cut_pink_apricorn', 'kubejs:cut_white_apricorn', 'pink_white')

  createPokeballTemplateRecipe('cut_black_apricorn', 'kubejs:cut_red_apricorn', 'black_red')
  createPokeballTemplateRecipe('black_red_pokeball_template', 'kubejs:cut_yellow_apricorn', 'black_red_yellow')
  createPokeballTemplateRecipe('cut_black_apricorn', 'kubejs:cut_yellow_apricorn', 'black_yellow')
  createPokeballTemplateRecipe('black_yellow_pokeball_template', 'kubejs:cut_pink_apricorn', 'black_yellow_pink')
  createPokeballTemplateRecipe('black_yellow_pink_pokeball_template', 'kubejs:cut_red_apricorn', 'black_yellow_pink_red') //(level ball)
  createPokeballTemplateRecipe('cut_black_apricorn', 'kubejs:cut_blue_apricorn', 'black_blue')
  createPokeballTemplateRecipe('black_blue_pokeball_template', 'kubejs:cut_white_apricorn', 'black_blue_white')
  createPokeballTemplateRecipe('cut_black_apricorn', 'kubejs:cut_white_apricorn', 'black_white')
  createPokeballTemplateRecipe('black_white_pokeball_template', 'kubejs:cut_red_apricorn', 'black_white_red')

  createPokeballTemplateRecipe('cut_white_apricorn', 'kubejs:cut_blue_apricorn', 'white_blue')

  createPokeballTemplateRecipe('cut_red_apricorn', 'cobblemon:tumblestone', 'ancient_red')
  createPokeballTemplateRecipe('cut_yellow_apricorn', 'cobblemon:tumblestone', 'ancient_yellow')
  createPokeballTemplateRecipe('cut_green_apricorn', 'cobblemon:tumblestone', 'ancient_green')
  createPokeballTemplateRecipe('cut_blue_apricorn', 'cobblemon:tumblestone', 'ancient_blue')
  createPokeballTemplateRecipe('cut_pink_apricorn', 'cobblemon:tumblestone', 'ancient_pink')
  createPokeballTemplateRecipe('cut_black_apricorn', 'cobblemon:tumblestone', 'ancient_black')
  createPokeballTemplateRecipe('cut_white_apricorn', 'cobblemon:tumblestone', 'ancient_white')

  createPokeballTemplateRecipe('red_blue_pokeball_template', 'cobblemon:tumblestone', 'ancient_red_blue')
  createPokeballTemplateRecipe('black_yellow_pokeball_template', 'cobblemon:tumblestone', 'ancient_black_yellow')

  createPokeballTemplateRecipe('white_blue_pokeball_template', 'cobblemon:sky_tumblestone', 'ancient_feather')
  createPokeballTemplateRecipe('cut_black_apricorn', 'cobblemon:black_tumblestone', 'ancient_heavy')
})