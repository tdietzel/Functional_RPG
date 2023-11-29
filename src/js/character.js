export const changeState = (prop) => {
  return (value) => {
    return (state) => (
      {
        ...state,
        [prop]: (state[prop] || 0) + value
      }
    )
  }
}

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

export const characterSelect = (state) => {
  return function (type) {
    if (type === "caveman") {
      return {
        ...state,
        health: 10,
        strength: 8,
        intelligence: 2
      }
    }
    else if (type === "cavedog") {
      return {
        ...state,
        health: 5,
        strength: 4, 
        intelligence: 10
      }
    } else {
      return {
        ...state,
        health: 2,
        strength: 2, 
        intelligence: 0
      }
    }
  }
}