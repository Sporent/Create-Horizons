StartupEvents.registry('item', event => {

    function createFoodSlice(name) {
        event.create(name).food(food => {
            food
            .hunger(4)
            .saturation(0.3)
            .fastToEat()
            .effect('minecraft:speed', 600, 0, 1)
        })
    }

    createFoodSlice('apple_pie_slice')
    createFoodSlice('orange_pie_slice')
    createFoodSlice('lemon_pie_slice')
    createFoodSlice('plum_pie_slice')
    createFoodSlice('hoary_pie_slice')

    createFoodSlice('passion_fruit_tart_slice')
    createFoodSlice('elderberry_tart_slice')
    event.create('glow_berry_tart_slice').food(food => {
        food
        .hunger(4)
        .saturation(0.3)
        .fastToEat()
        .effect('minecraft:speed', 600, 0, 1)
        .effect('minecraft:glowing', 100, 0, 1)
    })
    createFoodSlice('sweet_berry_tart_slice')
    createFoodSlice('lapisberry_tart_slice')

    event.create('cocoa_cake_slice').food(food => {
        food
        .hunger(2)
        .saturation(0.1)
        .fastToEat()
        .effect('minecraft:speed', 400, 0, 1)
    })
})