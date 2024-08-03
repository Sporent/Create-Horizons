BlockEvents.rightClicked("bountifulfares:lapisberry_tart", event => {
    if(event.player.getFoodLevel() < 20 || event.player.isCreative()) {
        event.player.addXP(20)
    }
})