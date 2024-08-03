StartupEvents.registry('item', event => {

    //apricorns but cheap
    event.create('cut_red_apricorn', 'basic')
    event.create('cut_yellow_apricorn', 'basic')
    event.create('cut_green_apricorn', 'basic')
    event.create('cut_blue_apricorn', 'basic')
    event.create('cut_pink_apricorn', 'basic')
    event.create('cut_black_apricorn', 'basic')
    event.create('cut_white_apricorn', 'basic')
    
    //intermediary item for pokeball sequenced assembly recipes
    event.create('incomplete_pokeball', 'basic')

    //pokeball templates so that each sequenced assembly recipe can be unique
    function registerPokeballTemplate(colours) {
        let pokeballText = colours.concat('_pokeball_template')
        event.create(pokeballText, 'basic')
    }

    /*
    colours:
    - red
    - yellow 
    - green
    - blue
    - pink
    - black
    - white
    */
    registerPokeballTemplate('red_yellow')
    registerPokeballTemplate('red_yellow_white')
    registerPokeballTemplate('red_green')
    registerPokeballTemplate('red_blue')
    registerPokeballTemplate('red_blue_green')
    registerPokeballTemplate('red_pink')
    registerPokeballTemplate('red_pink_blue')
    registerPokeballTemplate('red_white')
    registerPokeballTemplate('red_white_black')

    registerPokeballTemplate('yellow_green')
    registerPokeballTemplate('yellow_green_red')
    registerPokeballTemplate('yellow_green_white')
    registerPokeballTemplate('yellow_blue')
    registerPokeballTemplate('yellow_blue_black')
    registerPokeballTemplate('yellow_blue_black_white')
    registerPokeballTemplate('green_black')

    registerPokeballTemplate('pink_white')

    registerPokeballTemplate('black_red')
    registerPokeballTemplate('black_red_yellow')
    registerPokeballTemplate('black_yellow')
    registerPokeballTemplate('black_yellow_pink')
    registerPokeballTemplate('black_yellow_pink_red')
    registerPokeballTemplate('black_blue')
    registerPokeballTemplate('black_blue_white')
    registerPokeballTemplate('black_white')
    registerPokeballTemplate('black_white_red')

    registerPokeballTemplate('white_blue')

    registerPokeballTemplate('ancient_red')
    registerPokeballTemplate('ancient_yellow')
    registerPokeballTemplate('ancient_green')
    registerPokeballTemplate('ancient_blue')
    registerPokeballTemplate('ancient_pink')
    registerPokeballTemplate('ancient_black')
    registerPokeballTemplate('ancient_white')

    registerPokeballTemplate('ancient_red_blue')
    registerPokeballTemplate('ancient_black_yellow')

    registerPokeballTemplate('ancient_feather')
    registerPokeballTemplate('ancient_heavy')
})