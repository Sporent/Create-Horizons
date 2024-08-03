ServerEvents.tags("block", event => {
    // Add silver ores and terracotta sun stone ore to the #c:ores tag
    event.add("c:ores", ["galosphere:silver_ore", "galosphere:deepslate_silver_ore", "cobblemon:terracotta_sun_stone_ore"])
})

  ServerEvents.tags("item", event => {
    // Add stripped logs to the #c:stripped_logs tag
    event.add("c:stripped_logs", [
      "#natures_spirit:stripped_logs",
  
      "bountifulfares:stripped_walnut_log",
      "bountifulfares:stripped_hoary_log",
      "bountifulfares:stripped_walnut_wood",
      "bountifulfares:stripped_hoary_wood",
      "bountifulfares:stripped_apple_log",
      "bountifulfares:stripped_orange_log",
      "bountifulfares:stripped_lemon_log",
      "bountifulfares:stripped_plum_log",
      "bountifulfares:stripped_apple_wood",
      "bountifulfares:stripped_orange_wood",
      "bountifulfares:stripped_lemon_wood",
      "bountifulfares:stripped_plum_wood",
  
      "cobblemon:stripped_apricorn_log",
      "cobblemon:stripped_apricorn_wood",
    ])

    event.add("c:wheat_flour", "bountifulfares:flour")
    event.add("c:mushrooms", "natures_spirit:shiitake_mushroom")

    event.add("c:pastries",
      "bountifulfares:apple_pie",
      "bountifulfares:orange_pie",
      "bountifulfares:lemon_pie",
      "bountifulfares:plum_pie",
      "bountifulfares:hoary_pie",

      "bountifulfares:passion_fruit_tart",
      "bountifulfares:elderberry_tart",
      "bountifulfares:glow_berry_tart",
      "bountifulfares:sweet_berry_tart",
      "bountifulfares:lapisberry_tart"
    )

    

    event.add("create:upright_on_belt",
      "#c:pastries",

      "bountifulfares:cocoa_cake",

      "bountifulfares:elderberry_wine_bottle",
      "bountifulfares:lapisberry_wine_bottle",
      "bountifulfares:mead_bottle",

      "bountifulfares:green_tea_bottle",
      "bountifulfares:black_tea_bottle",
      "bountifulfares:chamomile_tea_bottle",
      "bountifulfares:honeysuckle_tea_bottle",
      "bountifulfares:bellflower_tea_bottle",
      "bountifulfares:torchflower_tea_bottle",

      "bountifulfares:jar",

      "bountifulfares:apple_compote_jar",
      "bountifulfares:orange_compote_jar",
      "bountifulfares:lemon_compote_jar",
      "bountifulfares:plum_compote_jar",
      "bountifulfares:hoary_compote_jar",

      "bountifulfares:apple_cider_jar",
      "bountifulfares:plum_cider_jar",
      "bountifulfares:hoary_cider_jar",

      "galosphere:bottle_of_spectre"
    )

    event.add("cobblemon:cut_apricorns",
      "kubejs:cut_red_apricorn",
      "kubejs:cut_yellow_apricorn",
      "kubejs:cut_green_apricorn",
      "kubejs:cut_blue_apricorn",
      "kubejs:cut_pink_apricorn",
      "kubejs:cut_black_apricorn",
      "kubejs:cut_white_apricorn"
    )

    event.add("cobblemon:basic_pokeball_materials",
      "create:copper_sheet",
      "create:iron_sheet",
      "create:golden_sheet",
    )

    event.add("railways:train_tracks",
      "create:track",
      "railways:track_create_andesite_narrow",
      "railways:track_create_andesite_wide",
      "railways:track_acacia",
      "railways:track_acacia_narrow",
      "railways:track_acacia_wide",
      "railways:track_birch",
      "railways:track_birch_narrow",
      "railways:track_birch_wide",
      "railways:track_dark_oak",
      "railways:track_dark_oak_narrow",
      "railways:track_dark_oak_wide",
      "railways:track_jungle",
      "railways:track_jungle_narrow",
      "railways:track_jungle_wide",
      "railways:track_oak",
      "railways:track_oak_narrow",
      "railways:track_oak_wide",
      "railways:track_spruce",
      "railways:track_spruce_narrow",
      "railways:track_spruce_wide",
      "railways:track_mangrove",
      "railways:track_mangrove_narrow",
      "railways:track_mangrove_wide",
      "railways:track_warped",
      "railways:track_warped_narrow",
      "railways:track_warped_wide",
      "railways:track_crimson",
      "railways:track_crimson_narrow",
      "railways:track_crimson_wide",
      "railways:track_blackstone",
      "railways:track_blackstone_narrow",
      "railways:track_blackstone_wide",
      "railways:track_ender",
      "railways:track_ender_narrow",
      "railways:track_ender_wide",
      "railways:track_tieless",
      "railways:track_tieless_narrow",
      "railways:track_tieless_wide",
      "railways:track_phantom",
      "railways:track_cherry",
      "railways:track_cherry_narrow",
      "railways:track_cherry_wide",
      "railways:track_bamboo",
      "railways:track_bamboo_narrow",
      "railways:track_bamboo_wide",
      "railways:track_stripped_bamboo",
      "railways:track_stripped_bamboo_narrow",
      "railways:track_stripped_bamboo_wide",
      "railways:track_monorail",
      "railways:track_natures_spirit_redwood",
      "railways:track_natures_spirit_redwood_narrow",
      "railways:track_natures_spirit_redwood_wide",
      "railways:track_natures_spirit_sugi",
      "railways:track_natures_spirit_sugi_narrow",
      "railways:track_natures_spirit_sugi_wide",
      "railways:track_natures_spirit_wisteria",
      "railways:track_natures_spirit_wisteria_narrow",
      "railways:track_natures_spirit_wisteria_wide",
      "railways:track_natures_spirit_fir",
      "railways:track_natures_spirit_fir_narrow",
      "railways:track_natures_spirit_fir_wide",
      "railways:track_natures_spirit_willow",
      "railways:track_natures_spirit_willow_narrow",
      "railways:track_natures_spirit_willow_wide",
      "railways:track_natures_spirit_aspen",
      "railways:track_natures_spirit_aspen_narrow",
      "railways:track_natures_spirit_aspen_wide",
      "railways:track_natures_spirit_maple",
      "railways:track_natures_spirit_maple_narrow",
      "railways:track_natures_spirit_maple_wide",
      "railways:track_natures_spirit_cypress",
      "railways:track_natures_spirit_cypress_narrow",
      "railways:track_natures_spirit_cypress_wide",
      "railways:track_natures_spirit_olive",
      "railways:track_natures_spirit_olive_narrow",
      "railways:track_natures_spirit_olive_wide",
      "railways:track_natures_spirit_joshua",
      "railways:track_natures_spirit_joshua_narrow",
      "railways:track_natures_spirit_joshua_wide",
      "railways:track_natures_spirit_ghaf",
      "railways:track_natures_spirit_ghaf_narrow",
      "railways:track_natures_spirit_ghaf_wide",
      "railways:track_natures_spirit_palo_verde",
      "railways:track_natures_spirit_palo_verde_narrow",
      "railways:track_natures_spirit_palo_verde_wide",
    )
})