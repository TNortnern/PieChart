const templates = ["Sales Revenue", "Amount Sold", "Viewed", "Ad Revenue"];

const templatesReducer = (state = templates, { type, payload }) => {
  switch (type) {
    case "NEW_TEMPLATE":
      return [...state, payload];
    default:
      return state;
  }
};

export default templatesReducer;
