export const shipmentSchema = {
    name: "shipment",
    title: "Shipment Tracking",
    type: "document",
    fields: [
      { name: "order", title: "Order", type: "reference", to: [{ type: "order" }] },
      { name: "carrier", title: "Carrier", type: "string" },
      { name: "trackingNumber", title: "Tracking Number", type: "string" },
      { name: "status", title: "Shipment Status", type: "string",
         options: { list: ["In Transit", "Out for Delivery", "Delivered", "Failed"] }},
      { name: "estimatedDelivery", title: "Estimated Delivery", type: "datetime" },
      { name: "lastUpdated", title: "Last Updated", type: "datetime" },
    ],
  };