const withPlugins = require("next-compose-plugins");

const nextConfig = {
    images: {
        domains: [
            `giftribbit32638-feature.s3.us-west-1.amazonaws.com`,
        ]
    },
    webpack5: false
}

module.exports = withPlugins([], nextConfig)
