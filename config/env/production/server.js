module.exports = ({ env }) => ({
  proxy: true,
  host: env("APP_HOST", "0.0.0.0"),
  port: env.int("NODE_PORT", 1337),
  url: env("APP_URL"), // replaces `host` and `port` properties in the development environment
  app: {
    keys: env.array("APP_KEYS"),
  },
});
