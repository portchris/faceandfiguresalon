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
                "source": "/blog*",
                "destination": process.env.REACT_APP_URL
            },
            {
                "source": "/treatments/allergies-sensitivities-remedies*",
                "destination": process.env.REACT_APP_URL + "treatments/#allergies-sensitivities-remedies"
            },
            {
                "source": "/treatments/facials*",
                "destination": process.env.REACT_APP_URL + "treatments/#facials"
            },
            {
                "source": "/treatments/hair-removal*",
                "destination": process.env.REACT_APP_URL + "treatments/#hair-removal"
            },
            {
                "source": "/treatments/make-up*",
                "destination": process.env.REACT_APP_URL + "treatments/#make-up"
            },
            {
                "source": "/treatments/non-surgical-face-body-lifts*",
                "destination": process.env.REACT_APP_URL + "treatments/#non-surgical-face-body-lifts"
            },
            {
                "source": "/treatments/slimming*",
                "destination": process.env.REACT_APP_URL + "treatments/#slimming"
            },
            {
                "source": "/treatments/caci*",
                "destination": process.env.REACT_APP_URL + "treatments/#caci"
            },
            {
                "source": "/treatments/ionithermie*",
                "destination": process.env.REACT_APP_URL + "treatments/#ionithermie"
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