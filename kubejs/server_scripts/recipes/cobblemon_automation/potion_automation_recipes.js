ServerEvents.recipes(event => {
  function createPotionBrewingRecipe(itemIngredient, fluidIngredient, fluidResult) {
    event.custom({
      type: 'create:mixing',
      ingredients: [
        {
          item: itemIngredient
        },
        {
            fluid: fluidIngredient,
            amount: 81000
        }
      ],
      results: [
        {
            fluid: fluidResult,
            amount: 81000
        }
      ],
      heatRequirement: 'heated'
    })
  }    

  function createFillingAndEmptyingRecipes(medicineFluid, medicineItem) {
    event.custom({
        type: 'create:filling',
        ingredients: [
          {
            item: 'minecraft:glass_bottle'
          },
          {
            fluid: medicineFluid,
            amount: 27000
          }
        ],
        results: [
          {
            item: medicineItem,
          }
        ]
    })

    event.custom({
        type: 'create:emptying',
        ingredients: [
          {
            item: medicineItem
          }
        ],
        results: [
          {
            item: 'minecraft:glass_bottle'
          },
          {
            fluid: medicineFluid,
            amount: 27000
          }
        ]
      })
  }

  createPotionBrewingRecipe('cobblemon:medicinal_leek', 'minecraft:water', 'kubejs:medicinal_brew')

  createPotionBrewingRecipe('cobblemon:oran_berry', 'kubejs:medicinal_brew','kubejs:potion')
  createPotionBrewingRecipe('cobblemon:energy_root', 'kubejs:potion', 'kubejs:super_potion')
  createPotionBrewingRecipe('cobblemon:sitrus_berry', 'kubejs:medicinal_brew', 'kubejs:hyper_potion')
  createPotionBrewingRecipe('cobblemon:mago_berry', 'kubejs:super_potion', 'kubejs:hyper_potion')
  createPotionBrewingRecipe('cobblemon:wiki_berry', 'kubejs:super_potion', 'kubejs:hyper_potion')
  createPotionBrewingRecipe('cobblemon:iapapa_berry', 'kubejs:super_potion', 'kubejs:hyper_potion')
  createPotionBrewingRecipe('cobblemon:figy_berry', 'kubejs:super_potion', 'kubejs:hyper_potion')
  createPotionBrewingRecipe('cobblemon:aguav_berry', 'kubejs:super_potion', 'kubejs:hyper_potion')
  createPotionBrewingRecipe('cobblemon:vivichoke', 'kubejs:hyper_potion', 'kubejs:max_potion')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:max_potion', 'kubejs:full_restore')

  createPotionBrewingRecipe('cobblemon:cheri_berry', 'kubejs:medicinal_brew', 'kubejs:paralyze_heal')
  createPotionBrewingRecipe('cobblemon:aspear_berry', 'kubejs:medicinal_brew', 'kubejs:ice_heal')
  createPotionBrewingRecipe('cobblemon:chesto_berry', 'kubejs:medicinal_brew', 'kubejs:awakening')
  createPotionBrewingRecipe('cobblemon:pecha_berry', 'kubejs:medicinal_brew', 'kubejs:antidote')
  createPotionBrewingRecipe('cobblemon:rawst_berry', 'kubejs:medicinal_brew', 'kubejs:burn_heal')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:paralyze_heal', 'kubejs:full_heal')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:ice_heal', 'kubejs:full_heal')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:awakening', 'kubejs:full_heal')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:antidote', 'kubejs:full_heal')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:medicinal_brew', 'kubejs:full_heal')
  createPotionBrewingRecipe('cobblemon:lum_berry', 'kubejs:burn_heal', 'kubejs:full_heal')

  createPotionBrewingRecipe('cobblemon:hopo_berry', 'kubejs:medicinal_brew', 'kubejs:elixir')
  createPotionBrewingRecipe('cobblemon:pep_up_flower', 'kubejs:elixir', 'kubejs:max_elixir')

  createPotionBrewingRecipe('cobblemon:leppa_berry', 'kubejs:medicinal_brew', 'kubejs:ether')
  createPotionBrewingRecipe('cobblemon:pep_up_flower', 'kubejs:ether', 'kubejs:max_ether')


  createFillingAndEmptyingRecipes('kubejs:medicinal_brew', 'cobblemon:medicinal_brew')

  createFillingAndEmptyingRecipes('kubejs:potion', 'cobblemon:potion')
  createFillingAndEmptyingRecipes('kubejs:super_potion', 'cobblemon:super_potion')
  createFillingAndEmptyingRecipes('kubejs:hyper_potion', 'cobblemon:hyper_potion')
  createFillingAndEmptyingRecipes('kubejs:max_potion', 'cobblemon:max_potion')
  createFillingAndEmptyingRecipes('kubejs:full_restore', 'cobblemon:full_restore')

  createFillingAndEmptyingRecipes('kubejs:paralyze_heal', 'cobblemon:paralyze_heal')
  createFillingAndEmptyingRecipes('kubejs:ice_heal', 'cobblemon:ice_heal')
  createFillingAndEmptyingRecipes('kubejs:awakening', 'cobblemon:awakening')
  createFillingAndEmptyingRecipes('kubejs:antidote', 'cobblemon:antidote')
  createFillingAndEmptyingRecipes('kubejs:burn_heal', 'cobblemon:burn_heal')
  createFillingAndEmptyingRecipes('kubejs:full_heal', 'cobblemon:full_heal')

  createFillingAndEmptyingRecipes('kubejs:elixir', 'cobblemon:elixir')
  createFillingAndEmptyingRecipes('kubejs:max_elixir', 'cobblemon:max_elixir')

  createFillingAndEmptyingRecipes('kubejs:ether', 'cobblemon:ether')
  createFillingAndEmptyingRecipes('kubejs:max_ether', 'cobblemon:max_ether')
  
})