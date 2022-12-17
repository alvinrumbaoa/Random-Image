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
