export const paymentSchema = {
    name: "payment",
    title: "Payment",
    type: "document",
    fields: [
      { name: "order", title: "Order", type: "reference", to: [{ type: "order" }] },
      { name: "paymentMethod", title: "Payment Method", type: "string", options: { list: ["Credit Card", "PayPal", "Bank Transfer"] } },
      { name: "paymentStatus", title: "Payment Status", type: "string", options: { list: ["Pending", "Completed", "Failed"] } },
      { name: "transactionId", title: "Transaction ID", type: "string" },
      { name: "amount", title: "Amount", type: "number" },
      { name: "paymentDate", title: "Payment Date", type: "datetime" },
    ],
  };