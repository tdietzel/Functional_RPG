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

// export const character = (inputName) => {
//   return {
//     name: inputName,
//   }
// }