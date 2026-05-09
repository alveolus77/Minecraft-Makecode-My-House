player.onChat("house", function () {
    // Floor
    blocks.fill(PLANKS_OAK, pos(-4, 0, -4), pos(4, 0, 4))

    // Outer walls
    blocks.fill(PLANKS_OAK, pos(-4, 1, -4), pos(4, 4, 4))
    // Hollow inside
    blocks.fill(AIR, pos(-3, 1, -3), pos(3, 4, 3))

    // Roof
    blocks.fill(STONE_BRICK, pos(-5, 5, -5), pos(5, 5, 5))

    // Door opening
    blocks.fill(AIR, pos(0, 1, -4), pos(0, 2, -4))

    // Windows
    blocks.place(GLASS, pos(-2, 2, -4))
    blocks.place(GLASS, pos(2, 2, -4))
    blocks.place(GLASS, pos(-4, 2, 0))
    blocks.place(GLASS, pos(4, 2, 0))
})