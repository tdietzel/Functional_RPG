export const changeState = (prop) => (value) => (state) => (
  {
    ...state,
    [prop]: (state[prop] || 0) + value
  }
);

// not tested, test later
// export const updateState = (prop) => {
//   return (value) => {
//     return (state) => (
//       {
//         ...state,
//         [prop]: (state[prop] || 0) = value
//       }
//     )
//   }
// }

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  }
}

export const character = (inputName) => {
  return {
    name: inputName,
  }
}

export const characterSelect = (state) => (type) => {
  return type === "caveman" ? {
    ...state,
    health: 10,
    strength: 8,
    intelligence: 2
  } :
  type === "cavedog" ? {
    ...state,
    health: 5,
    strength: 4, 
    intelligence: 10
  } : {
    ...state,
    health: 2,
    strength: 2, 
    intelligence: 0
  }
}