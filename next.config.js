module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      }
    ]
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    REALTIME_ENDPOINT: process.env.REALTIME_ENDPOINT,
    SCOPE: process.env.SCOPE,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
};
