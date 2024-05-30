module.exports = {
  compiler: {
    styledComponents: true,
  },
  env: {
    REALTIME_ENDPOINT: process.env.REALTIME_ENDPOINT,
    SCOPE: process.env.SCOPE,
  },
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
};
