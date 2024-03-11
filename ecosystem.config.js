module.exports = {
    apps: [
        {
            name: "hermes-website",
            script: "npm",
            args: "start -- -p 4000",
        },
        {
            name: "api refresh",
            script: "npm",
            args: "run refresh:tokens",
            cron_restart: "0 0 * * 0", // every week
            // cron_restart: "40 22 * * *", // at 22:40
            autorestart: false,
            instances: 1,
            exec_mode: "fork",
        },
    ],
};
