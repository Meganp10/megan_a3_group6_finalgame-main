// -----------------------------
// LEVEL 3 FISH SPAWNS
// -----------------------------
const LEVEL3_FISH_SPAWNS = [
  { x: 500, y: 1050 },
  { x: 750, y: 900 },
  { x: 600, y: 700 },
  { x: 680, y: 550 },
  { x: 540, y: 400 }
];

// -----------------------------
// LEVEL 3 FISH START POSITION
// -----------------------------
function getLevel3FishStart(WORLD_W_SCALED, WORLD_H_SCALED) {
  return {
    x: WORLD_W_SCALED / 2 - 80,
    y: WORLD_H_SCALED - 250
  };
}

// -----------------------------
// LEVEL 3 WALLS
// -----------------------------
function buildLevel3Walls(WORLD_W_SCALED, WORLD_H_SCALED) {
  return [
    {
      x1: WORLD_W_SCALED / 2 - 600,
      y1: WORLD_H_SCALED / 2 + 1200,
      x2: WORLD_W_SCALED / 2 - 200,
      y2: WORLD_H_SCALED / 2 - 1600
    },
    {
      x1: WORLD_W_SCALED / 2 + 600,
      y1: WORLD_H_SCALED / 2 + 1200,
      x2: WORLD_W_SCALED / 2 + 200,
      y2: WORLD_H_SCALED / 2 - 1600
    }
  ];
}

// -----------------------------
// LEVEL 3 SPIKES
// -----------------------------
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
