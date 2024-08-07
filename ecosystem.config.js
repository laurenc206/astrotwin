module.exports = {
    apps: [
    {
        name: "client",
        script: "npm",
        args: "run start:proxy-server",
        env: {
            NODE_ENV: "development",
            ENV_VAR1: "environment-variable"
        }
    }
    ]
}