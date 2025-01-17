export const productSchema = {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      { name: "id", title: "Product ID", type: "string" }, // Unique identifier for products
      { name: "name", title: "Name", type: "string" },
      { name: "description", title: "Description", type: "text" },
      { name: "price", title: "Price", type: "number" },
      { name: "stock", title: "Stock", type: "number" },
      { name: "category", title: "Category", type: "string" },
      { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    ],
  };