const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 5000;

export default {
  port,
  host,
  token: process.env.SECRET,
  database: {
    dbUrl: process.env.DB_URL,
    options: {
      autoIndex: false,
      useMongoClient: true,
    },
  },
  modules: ["users", "auth", "feeds"],
  recaptcha: {
    siteSecret: "6LecGmEUAAAAADXvFDUrR5OEVOgpJs7Nin9MxhO1",
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
  },
};
