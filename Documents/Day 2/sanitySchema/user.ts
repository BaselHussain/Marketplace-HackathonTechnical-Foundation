export const userSchema = {
    name: "user",
    title: "User/Customer",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "password", title: "Password", type: "string" }, // Store hashed passwords only.
      { name: "phone", title: "Phone", type: "string" },
      { name: "address", title: "Address", type: "text" },
      { name: "orders", title: "Orders", type: "array", of: [{ type: "reference", to: [{ type: "order" }] }] },
    ],
  };