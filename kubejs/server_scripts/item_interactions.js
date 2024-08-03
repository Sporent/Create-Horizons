ItemEvents.foodEaten('kubejs:lapisberry_tart_slice', event => {
    event.player.addXP(20)
})

ItemEvents.foodEaten('bountifulfares:stone_stew', event => {
    event.entity.attack(1)
})