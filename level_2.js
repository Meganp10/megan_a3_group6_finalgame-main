// ------------------------------------------------------------
// LEVEL 3 — "Ram Ridge"
// ------------------------------------------------------------

// 1. WALLS
const LEVEL2_WALLS = [
    // Left boundary — sharper zig-zag, narrower corridor
    { x1: 260, y1: 1200, x2: 300, y2: 950 },
    { x1: 300, y1: 950,  x2: 330, y2: 700 },
    { x1: 330, y1: 700,  x2: 360, y2: 450 },
    { x1: 360, y1: 450,  x2: 390, y2: 200 },

    // Right boundary — mirrored but slightly offset for asymmetry
    { x1: 940, y1: 1200, x2: 900, y2: 950 },
    { x1: 900, y1: 950,  x2: 860, y2: 700 },
    { x1: 860, y1: 700,  x2: 820, y2: 450 },
    { x1: 820, y1: 450,  x2: 780, y2: 200 }
];


function buildLevel2Walls(worldW, worldH) {
    return LEVEL2_WALLS.map(w => ({
        x1: w.x1,
        y1: w.y1,
        x2: w.x2,
        y2: w.y2
    }));
}

// 2. SPIKES
const LEVEL2_SPIKES = [
    // Lower section — early pressure
    { x: 520, y: 1150, variant: 2 },
    { x: 680, y: 1130, variant: 1 },

    // Mid section — choke point cluster
    { x: 540, y: 900, variant: 3 },
    { x: 600, y: 880, variant: 2 },
    { x: 660, y: 900, variant: 3 },

    // Narrow corridor — precision required
    { x: 580, y: 700, variant: 0 },
    { x: 720, y: 680, variant: 1 },

    // Upper section — staggered blockers
    { x: 500, y: 520, variant: 2 },
    { x: 650, y: 500, variant: 3 },
    { x: 760, y: 480, variant: 1 },

    // Near exit — final challenge
    { x: 580, y: 300, variant: 3 },
    { x: 700, y: 280, variant: 2 }
];


// 3. FISH SPAWNS
const LEVEL2_FISH_SPAWNS = [
    { x: 560, y: 1100 }, // near lower spikes
    { x: 720, y: 900 },  // inside spike cluster
    { x: 600, y: 720 },  // narrow corridor
    { x: 680, y: 520 },  // near staggered blockers
    { x: 540, y: 350 }   // near exit spikes
];


// 4. FISH START POSITION
function getLevel2FishStart(worldW, worldH) {
    return {
        x: worldW / 2 - 80,
        y: worldH - 250
    };
}
