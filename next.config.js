require("dotenv").config();

module.exports = {
    async rewrites() {
        return [
            {
                "source": "/contact",
                "destination": process.env.URL + "/#contact"
            },
            {
                "source": "/events",
                "destination": process.env.URL + "/#events"
            },
            {
                "source": "/",
                "has": [
                    {
                        "type": "query",
                        "key": "event_id"
                    }
                ],
                "destination": process.env.URL + "/#events"
            },
            {
                "source": "/testimonials",
                "destination": process.env.URL + "/#home"
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
    }
};