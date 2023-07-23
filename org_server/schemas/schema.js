const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLInputObjectType,
} = require("graphql");
const { default: axios } = require("axios");
const querystring = require("querystring");

const V2_API_PATH = `${process.env.VTPASS_MESSAGING_URI}/v2/api/sms`;

// Mongoose Models
const Provider = require("../models/Provider");
const Message = require("../models/Message");
const Transaction = require("../models/Transaction");

// Scheme Type
const SchemeType = new GraphQLObjectType({
  name: "Scheme",
  fields: () => ({
    variation_code: { type: GraphQLString },
    name: { type: GraphQLString },
    variation_amount: { type: GraphQLString },
    fixed_price: { type: GraphQLString },
  }),
});

// Service Type
const ServiceType = new GraphQLObjectType({
  name: "Service",
  fields: () => ({
    name: { type: GraphQLString },
    service_type: { type: GraphQLString },
    service_id: { type: GraphQLString },
    platform: { type: GraphQLString },
    schemes: { type: new GraphQLList(SchemeType) },
  }),
});

const MessageResponseType = new GraphQLObjectType({
  name: "MessageResponse",
  fields: () => ({
    statusCode: { type: GraphQLString },
    recipient: { type: GraphQLString },
    messageId: { type: GraphQLString },
    status: { type: GraphQLString },
    description: { type: GraphQLString },
    network: { type: GraphQLString },
    country: { type: GraphQLString },
    deliveryCode: { type: GraphQLString },
    deliveryDate: { type: GraphQLString },
    bulkId: { type: GraphQLString },
  }),
});

// Send Message Type
const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    responseCode: { type: GraphQLString },
    response: { type: GraphQLString },
    sentDate: { type: GraphQLString },
    messages: { type: new GraphQLList(MessageResponseType) },
  }),
});

// VTPass Verification Response's Content Type
const VerificationResponseContentType = new GraphQLObjectType({
  name: "VerificationResponseContent",
  fields: () => ({
    Customer_Name: { type: GraphQLString },
    Status: { type: GraphQLString },
    DUE_DATE: { type: GraphQLString },
    Customer_Number: { type: GraphQLInt },
    Customer_Type: { type: GraphQLString },
    Current_Bouquet: { type: GraphQLString },
    Current_Bouquet_Code: { type: GraphQLString },
    Renewal_Amount: { type: GraphQLInt },
  }),
});

// VTPass Verification Response Type
const VerificationResponseType = new GraphQLObjectType({
  name: "VerificationResponse",
  fields: () => ({
    code: { type: GraphQLString },
    content: { type: VerificationResponseContentType },
  }),
});

const TransactionContentType = new GraphQLObjectType({
  name: "TransactionContent",
  fields: () => ({
    transactions: { type: TransactionContentTransactionType },
  }),
});

const TransactionContentTransactionType = new GraphQLObjectType({
  name: "TransactionContentTransaction",
  fields: () => ({
    status: { type: GraphQLString },
    product_name: { type: GraphQLString },
    unique_element: { type: GraphQLString },
    unit_price: { type: GraphQLInt },
    quantity: { type: GraphQLInt },
    service_verification: { type: GraphQLString },
    channel: { type: GraphQLString },
    commission: { type: GraphQLInt },
    total_amount: { type: GraphQLInt },
    discount: { type: GraphQLString },
    type: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    name: { type: GraphQLString },
    convinience_fee: { type: GraphQLInt },
    amount: { type: GraphQLInt },
    platform: { type: GraphQLString },
    method: { type: GraphQLString },
    transactionId: { type: GraphQLString },
  }),
});

const TransactionDateType = new GraphQLObjectType({
  name: "TransactionDate",
  fields: () => ({
    date: { type: GraphQLString },
    timezone_type: { type: GraphQLInt },
    timezone: { type: GraphQLString },
  }),
});

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    code: { type: GraphQLString },
    content: { type: TransactionContentType },
    response_description: { type: GraphQLString },
    requestId: { type: GraphQLString },
    amount: { type: GraphQLString },
    transaction_date: { type: TransactionDateType },
    purchased_code: { type: GraphQLString },
  }),
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    sendMessage: {
      type: MessageType,
      args: {
        sender: { type: new GraphQLNonNull(GraphQLString) },
        recipient: { type: new GraphQLNonNull(GraphQLString) },
        message: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parentValue, args) => {
        const { data } = await axios.post(
          `${V2_API_PATH}/sendsms`,
          querystring.stringify(args),
          {
            headers: {
              "X-Token": process.env.VTPASS_MESSAGE_PUBLIC_KEY,
              "X-Secret": process.env.VTPASS_MESSAGE_SECRET_KEY,
            },
          }
        );

        if (typeof data == "object") {
          const message = new Message(data);

          await message.save();
        } else throw new Error(data);

        return data;
      },
    },
    sendMessageDND: {
      type: MessageType,
      args: {
        sender: { type: new GraphQLNonNull(GraphQLString) },
        recipient: { type: new GraphQLNonNull(GraphQLString) },
        message: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parentValue, args) => {
        const { data } = await axios.post(
          `${V2_API_PATH}/dnd-route`,
          querystring.stringify(args),
          {
            headers: {
              "X-Token": process.env.VTPASS_MESSAGE_PUBLIC_KEY,
              "X-Secret": process.env.VTPASS_MESSAGE_SECRET_KEY,
            },
          }
        );

        if (typeof data == "object") {
          const message = new Message(data);

          await message.save();
        } else throw new Error(data);

        return data;
      },
    },
    // addTransaction: {
    //   type: TransactionType,
    //   args: {
    //     transaction: { type: new GraphQLInputObjectType(TransactionType) },
    //   },
    //   resolve: async (parentValue, args) => {
    //     const transaction = new Transaction(args.transaction);

    //     await transaction.save();

    //     return transaction[0];
    //   },
    // },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    service: {
      type: ServiceType,
      args: {
        platform: { type: GraphQLString },
        service_type: { type: GraphQLString },
        service_id: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const provider = await Provider.aggregate([
          {
            $match: {
              platform: args.platform,
              service_type: args.service_type,
              service_id: args.service_id,
            },
          },
          {
            $lookup: {
              from: "schemes",
              as: "schemes",
              localField: "schemes",
              foreignField: "_id",
            },
          },
          {
            $project: {
              _id: 0,
              name: 1,
              minimium_amount: 1,
              maximum_amount: 1,
              convinience_fee: 1,
              product_type: 1,
              image: 1,
              service_id: 1,
              platform: 1,
              service_type: 1,
              name: 1,
              schemes: {
                variation_code: 1,
                name: 1,
                variation_amount: 1,
                fixed_price: 1,
              },
            },
          },
        ]);

        return provider?.[0];
      },
    },
    services: {
      type: new GraphQLList(ServiceType),
      resolve: async () => {
        const providers = await Provider.aggregate([
          {
            $lookup: {
              from: "schemes",
              as: "schemes",
              localField: "schemes",
              foreignField: "_id",
            },
          },
          {
            $project: {
              _id: 0,
              name: 1,
              minimium_amount: 1,
              maximum_amount: 1,
              convinience_fee: 1,
              product_type: 1,
              image: 1,
              service_id: 1,
              platform: 1,
              service_type: 1,
              name: 1,
              schemes: {
                variation_code: 1,
                name: 1,
                variation_amount: 1,
                fixed_price: 1,
              },
            },
          },
        ]);

        return providers;
      },
    },
    platformServices: {
      type: new GraphQLList(ServiceType),
      args: {
        platform: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const providers = await Provider.aggregate([
          {
            $match: {
              platform: args.platform,
            },
          },
          {
            $lookup: {
              from: "schemes",
              as: "schemes",
              localField: "schemes",
              foreignField: "_id",
            },
          },
          {
            $project: {
              _id: 0,
              name: 1,
              minimium_amount: 1,
              maximum_amount: 1,
              convinience_fee: 1,
              product_type: 1,
              image: 1,
              service_id: 1,
              platform: 1,
              service_type: 1,
              name: 1,
              schemes: {
                variation_code: 1,
                name: 1,
                variation_amount: 1,
                fixed_price: 1,
              },
            },
          },
        ]);

        return providers;
      },
    },
    messagesHistories: {
      type: new GraphQLList(MessageType),
      resolve: () => {
        return Message.find();
      },
    },
    verifyVTPassMerchant: {
      type: VerificationResponseType,
      args: {
        billersCode: { type: GraphQLInt },
        serviceID: { type: GraphQLString },
        type: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        const { billersCode, serviceID, type } = args;

        const { data } = await axios.post(process.env.VTPASS_URI, {
          billersCode,
          serviceID,
          type,
        });

        return data;
      },
    },
  }),
});

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
