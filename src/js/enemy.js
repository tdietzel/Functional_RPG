export const enemyType = (type) => {
  return type === "Swoopbird" ? {
    type: "Swoopbird",
    health: 3,
    strength: 8,
    xp: 3
  } : 
    type === "Sabertooth" ? {
      type: "Sabertooth",
      health: 3,
      strength: 8,
      xp: 3
    } : {
      type: "Insect",
      health: 1,
      strength: 0.2,
      xp: 0.1
    };
};