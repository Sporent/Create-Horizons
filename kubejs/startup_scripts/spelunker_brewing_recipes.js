MoreJSEvents.registerPotionBrewing((event) => {

    event.removeByPotion(null, "spelunker:amethyst_dust", null);

    event.addPotionBrewing("amarite:amarite_shard", "minecraft:night_vision", "spelunker:spelunker");
})