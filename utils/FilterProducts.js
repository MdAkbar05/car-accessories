export default function FilterProducts(products, filters) {
  const filtered = products.filter((product) => {
    return (
      (filters.query !== "" ? product.name.includes(filters.query) : true) &&
      (filters.category !== ""
        ? product.category === filters.category
        : true) &&
      (filters.brand !== "" ? product.brand === filters.brand : true) &&
      (filters.model !== "" ? product.model === filters.model : true) &&
      (filters.engine !== "" ? product.engine === filters.engine : true) &&
      (filters.budget !== "" ? product.budget === filters.budget : true)
    );
  });

  return filtered;
}
