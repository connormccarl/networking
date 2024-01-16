/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
      connectionString: "mongodb+srv://connormccarl:databaseaccess@cluster0.ytejewz.mongodb.net/networking",
      secret: '7b531c06-9bf9-44e5-9d72-9dc877828921-b3770f32-4beb-4623-b1e4-75e3ee7d32ea'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3001/api' // development api
          : 'http://localhost:3001/api' // production api
  }
}

module.exports = nextConfig
