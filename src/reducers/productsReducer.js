const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "NEW_PRODUCT":
      return [...state, payload];
    default:
      return state;
  }
};

export default productsReducer;
