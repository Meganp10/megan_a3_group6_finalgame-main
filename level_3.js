// ------------------------------------------------------------
// LEVEL 3 — "Ram Ridge"
// ------------------------------------------------------------

// 1. WALLS
const LEVEL3_WALLS = [
    { x1: 200,  y1: 1200,  x2: 260,  y2: 900 },
    { x1: 260,  y1: 900,   x2: 300,  y2: 600 },
    { x1: 300,  y1: 600,   x2: 340,  y2: 300 },
    { x1: 340,  y1: 300,   x2: 380,  y2: 100 },

    { x1: 1000, y1: 1200,  x2: 940,  y2: 900 },
    { x1: 940,  y1: 900,   x2: 900,  y2: 600 },
    { x1: 900,  y1: 600,   x2: 860,  y2: 300 },
    { x1: 860,  y1: 300,   x2: 820,  y2: 100 }
];

function buildLevel3Walls(worldW, worldH) {
    return LEVEL3_WALLS.map(w => ({
        x1: w.x1,
        y1: w.y1,
        x2: w.x2,
        y2: w.y2
    }));
}

// 2. SPIKES
const LEVEL3_SPIKES = [
    { x: 450, y: 1100, variant: 2 },
    { x: 700, y: 1080, variant: 1 },
    { x: 520, y: 850, variant: 0 },
    { x: 780, y: 820, variant: 3 },
    { x: 600, y: 780, variant: 2 },
    { x: 480, y: 520, variant: 1 },
    { x: 720, y: 500, variant: 0 },
    { x: 650, y: 450, variant: 3 },
    { x: 560, y: 250, variant: 2 },
    { x: 740, y: 230, variant: 1 }
];

// 3. FISH SPAWNS
const LEVEL3_FISH_SPAWNS = [
    { x: 500, y: 1050 },
    { x: 750, y: 900 },
    { x: 600, y: 700 },
    { x: 680, y: 550 },
    { x: 540, y: 400 }
];

// 4. FISH START POSITION
function getLevel3FishStart(worldW, worldH) {
    return {
        x: worldW / 2 - 80,
        y: worldH - 250
    };
}
