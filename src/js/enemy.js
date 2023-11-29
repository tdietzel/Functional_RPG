export const enemyType = (type) => {
  if (type === "Swoopbird") {
    return {
      type: "Swoopbird",
      health: 3,
      strength: 8
    }
  }
  else if (type === "Sabertooth") {
    return {
      type: "Sabertooth",
      health: 3,
      strength: 8
    }
  } else {
    return {
      type: "Insect",
      health: 1,
      strength: 0.2,
    }
  }
}