const templates = [
  { name: "Sales Revenue", property: "saleRev" },
  { name: "Amount Sold", property: "quantity" },
  { name: "Viewed", property: "views" },
  { name: "Ad Revenue", property: "adRev" }
];

const templatesReducer = (state = templates, { type, payload }) => {
  switch (type) {
    case "NEW_TEMPLATE":
      return [...state, payload];
    default:
      return state;
  }
};

export default templatesReducer;
