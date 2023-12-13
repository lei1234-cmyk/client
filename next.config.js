/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    MONGODB_URI:'mongodb://localhost:27017'
  },
  experimental:{
    appDir:false
  }
}

module.exports = nextConfig
