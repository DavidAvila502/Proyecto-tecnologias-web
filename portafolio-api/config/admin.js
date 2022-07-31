module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ea11de121870e1480ec49324da0b9533'),
  },
});
