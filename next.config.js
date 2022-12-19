require("dotenv").config();

const ENV = {};
const ENV_MAP = Object.keys(process.env).map((key, $val) => {

    if (key.indexOf("REACT_APP") !== -1) {
        ENV[key] = process.env[key]
    }

    return ENV;
});

console.log(ENV);

module.exports = {
    env: ENV,
    async rewrites() {
        return [
            {
                "source": "/blog",
                "destination": process.env.REACT_APP_URL
            },
            {
                "source": "/",
                "has": [
                    {
                        "type": "query",
                        "key": "post_id"
                    }
                ],
                "destination": process.env.REACT_APP_URL
            },
            {
                "source": "/captcha/:slug",
                "destination": process.env.REACT_APP_RECAPTCHA_URI + "/:slug"
            },
            {
                "source": "/wufoo",
                "destination": process.env.REACT_APP_WUFOO_URI
            },
            {
                "source": "/:any*",
                "destination": "/#home"
            }
        ];
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };

        return config;
    },
    distDir: 'dist'
};