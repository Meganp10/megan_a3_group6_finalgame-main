function startLevel3() {
    resetGame();
    currentLevel = 3;

    // Load Level 3 background
    bgImg = loadImage("assets/images/level3_background.png", () => {
        WORLD_W = bgImg.width;
        WORLD_H = bgImg.height;
        bgScale = Math.max(VIEW_W / WORLD_W, VIEW_H / WORLD_H);
        WORLD_W_SCALED = WORLD_W * bgScale;
        WORLD_H_SCALED = WORLD_H * bgScale;
        WORLD_TOP_LIMIT = WORLD_H_SCALED / 2 - 550;

        // Fish spawn
        const fishStart = getLevel3FishStart(WORLD_W_SCALED, WORLD_H_SCALED);
        fish.x = fishStart.x;
        fish.y = fishStart.y;
        fishSpawns = LEVEL3_FISH_SPAWNS;

        // Walls
        walls.length = 0;
        walls.push(...buildLevel3Walls(WORLD_W_SCALED, WORLD_H_SCALED));

        // Spikes
        spikes = LEVEL3_SPIKES.map(s => ({ ...s }));

        // Spawn penguin
        player.x = WORLD_W_SCALED / 2;
        player.y = playerSpawnY();

        // Set wall sides
        for (let w of walls) {
            w.side = Math.sign(
                pointSide(player.x, player.y, w.x1, w.y1, w.x2, w.y2)
            );
        }
    });

    gameState = "level3";
}
