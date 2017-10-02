function stores(state = [], action) {
  switch(action.type) {
    case 'LOAD_STORES':
      return action.stores
    default:
      return state;
  }
}

export default stores;
