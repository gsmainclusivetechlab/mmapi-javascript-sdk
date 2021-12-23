const common = [
  {
    id: "heartbeat",
    title: "Check for Service Availability",
    type: "item",
    requestType: "viewServiceAvailability",
    requestCategory: "MerchantPayment",
    polling: false,
    target: true,
    returnClientCorrelation: false,
    headers: [],
    params: [],
  },
  {
    id: "requests",
    title: "Retrieve a Missing API Request",
    type: "item",
    requestType: "viewResponse",
    requestCategory: "MerchantPayment",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "clientCorrelationId",
        required: false,
        caption: "X-Correlation-ID / UUID",
        type: "string",
        defaultValue: "cc56daf1-b2dd-4553-aeba-43d61d81f5c8",
      },
    ],
    params: [],
  },
  {
    id: "responses",
    title: "Retrieve a Missing API Response",
    type: "item",
    requestType: "viewTransaction",
    requestCategory: "MerchantPayment",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "transactionReference",
        required: false,
        caption: "Transaction Reference",
        type: "string",
        defaultValue: "REF-1633678194929",
      },
    ],
    params: [],
  },
];

export default common;
