const templates = ["Revenue", "Amount Sold", "Viewed", "Wishlisted", "Reviews"];

const templatesReducer = (state = templates, { type, payload }) => {
  switch (type) {
    case "NEW_TEMPLATE":
      return [...state, payload];
    default:
      return state;
  }
};

export default templatesReducer;
