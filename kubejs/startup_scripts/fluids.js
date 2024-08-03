StartupEvents.registry('fluid', event => {

    function createLiquid(name, texture) {
        event.create(name)
        .thinTexture(texture)
        .noBlock()
    }

    createLiquid('medicinal_brew', 0x2b9986)

    createLiquid('potion', 0x916db8)
    createLiquid('super_potion', 0xce7b6b)
    createLiquid('hyper_potion', 0xe27cb9)
    createLiquid('max_potion', 0x869eee)
    createLiquid('full_restore', 0x90c44e)
        
    createLiquid('paralyze_heal', 0xd2ea42)
    createLiquid('ice_heal', 0xfa9f96)
    createLiquid('awakening', 0x71d9e9)
    createLiquid('antidote', 0xfad951)
    createLiquid('burn_heal', 0x68e08c)
    createLiquid('full_heal', 0xdad21e)
        
    createLiquid('elixir', 0xd19077)
    createLiquid('max_elixir', 0x77d1c4)

    createLiquid('ether', 0xb888c0)
    createLiquid('max_ether', 0x99d177)
})