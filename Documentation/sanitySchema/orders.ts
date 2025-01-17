export const orderSchema = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      { name: "orderNumber", title: "Order Number", type: "string" },
      { name: "user", title: "User/Customer", type: "reference", to: [{ type: "user" }] },
      { name: "products", title: "Products", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }] },
      { name: "totalAmount", title: "Total Amount", type: "number" },
      { name: "status", title: "Status", type: "string", options: { list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"] } },
      { name: "orderDate", title: "Order Date", type: "datetime" },
    ],
  };