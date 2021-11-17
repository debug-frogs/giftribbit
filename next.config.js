const withPlugins = require("next-compose-plugins");

const nextConfig = {
    images: {
        domains: [
            `giftribbit32638-feature.s3.us-west-1.amazonaws.com`,
            `giftribbit05314-stag.s3.us-west-1.amazonaws.com`,
            `giftribbit75025-production.s3.us-west-1.amazonaws.com`
        ]
    },
    webpack5: true
}

module.exports = withPlugins([], nextConfig)
