/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: "b99cd5ceb23e9dd4b8ae53af0059e24b",
    GOOGLE_CLIENT_ID:
      "406489282452-vflrngqt81g80fbi4uf59cudmais5g5v.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://localhost:3000",
    // NEXTAUTH_URL: "https://photostad.istad.co",
    // NEXTAUTH_URL:"http://localhost:3000"
  },
};

module.exports = nextConfig;
