module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST || '0.0.0.0'),
  port: env('PORT', process.env.PORT || '1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '2bea30aade81ef1c150b75d0294329ab'),
    },
  },
});