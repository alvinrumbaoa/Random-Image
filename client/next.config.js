const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env:{
    OPENAI_API_KEY: "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"
  }
}

module.exports = nextConfig
