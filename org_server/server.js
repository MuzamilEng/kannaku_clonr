const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const { createHandler } = require("graphql-http/lib/use/express");
const connectDB = require("./config/db");
const { middleware, routes } = require("./app");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const schema = require("./schemas/schema");

const PORT = process.env.PORT || 5000;

// Route files
// const educational = require("./routes/educational");
// const electricity = require("./routes/electricity");
// const insurance = require("./routes/insurance");
// const services = require("./routes/services");
// const tvSubscription = require("./routes//tvSubscription");
// const transaction = require("./routes/transaction");
// const sms = require("./routes/sms");

// Connect to database
connectDB();

const app = express();

// Load express status monitor config.
app.use(
  require("express-status-monitor")({
    healthChecks: [
      {
        protocol: "http",
        host: "localhost",
        path: "/graphql",
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/airtime/balance`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/airtime/status`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/airtime/information`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/data/balance`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/data/purchase`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/data/getbeneficiaries`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/data/addbeneficiary`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/data/transfer`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/ikeja/detail`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/ikeja/usage`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/ikeja/dealer`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/ikeja`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/eedc/detail`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/eedc/usage`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/eedc/dealer`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/electricityBill/eedc`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/cableTv/validation`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/cableTv/boque-cable-tv`,
        port: PORT,
      },
      {
        protocol: "http",
        host: "localhost",
        path: `${routes.APIVersion}/cableTv/boque-cable-tv-addon`,
        port: PORT,
      },
    ],
  })
);

app.all("/graphql", createHandler({ schema }));

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routes
// app.use("/api/v1/educational", educational);
// app.use("/api/v1/electricity", electricity);
// app.use("/api/v1/insurance", insurance);
// app.use("/api/v1/services", services);
// app.use("/api/v1/tv", tvSubscription);
// app.use("/api/v1/transaction", transaction);
// app.use("/api/v1/sms", sms);

// Mount existing routes
routes.default(app);
middleware.default(app);

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handled unhandled promise rejections
process.on("unhandledRejections", (err, promise) => {
  console.log(`Error: ${err.message}`);

  // Close server & exit process
  server.close(() => process.exit(1));
});
