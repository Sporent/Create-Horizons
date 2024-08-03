ItemEvents.modification(event => {

  //mofify stack sizes
  event.modify('bountifulfares:artisan_bread', item => {
    item.maxStackSize = 1
  })

  event.modify('minecraft:suspicious_stew', item => {
    item.maxStackSize = 16
  })

  event.modify('cobblemon:leek_and_potato_stew', item => {
    item.maxStackSize = 16
  })

  //nerf stone stew
  event.modify('bountifulfares:stone_stew', item => {
    item.foodProperties = food => {
      food.hunger(6)
      food.saturation(0.1)
      food.effect('minecraft:blindness', 100, 0, 1)
      food.effect('minecraft:hunger', 100, 0, 1)
    }
  })

  //modify candies
  event.modify('bountifulfares:candy', item => {
    item.foodProperties = food => {
      food.hunger(6)
      food.saturation(0.2)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:piquant_candy', item => {
    item.foodProperties = food => {
      food.hunger(7)
      food.saturation(0.45)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:sour_candy', item => {
    item.foodProperties = food => {
      food.hunger(7)
      food.saturation(0.5)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:bitter_candy', item => {
    item.foodProperties = food => {
      food.hunger(8)
      food.saturation(0.4)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:candied_apple', item => {
    item.foodProperties = food => {
      food.hunger(7)
      food.saturation(0.4)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:candied_plum', item => {
    item.foodProperties = food => {
      food.hunger(7)
      food.saturation(0.4)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:candied_orange', item => {
    item.foodProperties = food => {
      food.hunger(7)
      food.saturation(0.4)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  event.modify('bountifulfares:candied_lemon', item => {
    item.foodProperties = food => {
      food.hunger(7)
      food.saturation(0.4)
      food.effect('minecraft:speed', 100, 0, 1)
    }
  })

  //nerf nether chows
  event.modify('bountifulfares:crimson_chow', item => {
    item.foodProperties = food => {
      food.hunger(11)
      food.saturation(0.5)
      food.effect('minecraft:nausea', 200, 0, 1)
    }
  })

  event.modify('bountifulfares:warped_chow', item => {
    item.foodProperties = food => {
      food.hunger(3)
      food.saturation(0.5)
      food.effect('minecraft:nausea', 200, 0, 1)
    }
  })

  function modifyFoodItem(foodItem, hunger, saturationModifier) {
    event.modify(foodItem, item => {
      item.foodProperties = food => {
        food.hunger(hunger)
        food.saturation(saturationModifier)
      }
    })
  }

  function modifyStewItem(foodItem, hunger, saturationModifier, comfortDuration) {
    event.modify(foodItem, item => {
      item.foodProperties = food => {
        food.hunger(hunger)
        food.saturation(saturationModifier)
        food.effect('farmersdelight:comfort', comfortDuration, 0, 1)
      }
    })
  }

  modifyFoodItem('bountifulfares:forest_medley', 12, 0.4)
  modifyFoodItem('bountifulfares:arid_medley', 8, 0.3)
  modifyFoodItem('bountifulfares:meadow_medley', 9, 0.4)
  modifyFoodItem('bountifulfares:coastal_medley', 8, 0.35)

  modifyStewItem('bountifulfares:leek_stew', 7, 0.3, 3600)
  modifyStewItem('bountifulfares:apple_stew', 8, 0.4, 3600)
  modifyStewItem('bountifulfares:bountiful_stew', 12, 0.5, 6000)

  modifyFoodItem('bountifulfares:passion_glazed_salmon', 10, 0.7)
  modifyFoodItem('bountifulfares:crusted_beef', 12, 0.7)

  modifyFoodItem('bountifulfares:custard', 4, 0.4)
  modifyFoodItem('bountifulfares:cocoa_custard', 7, 0.8)
  modifyFoodItem('bountifulfares:piquant_custard', 7, 0.8)
  modifyFoodItem('bountifulfares:ancient_custard', 11, 0.8)
  modifyFoodItem('bountifulfares:passion_custard', 7, 0.8)
  modifyFoodItem('farmersdelight:glow_berry_custard', 7, 0.8)

  modifyFoodItem('farmersdelight:bone_broth', 3, 0.3)

  modifyFoodItem('cobblemon:vivichoke_dip', 9, 0.4)
})