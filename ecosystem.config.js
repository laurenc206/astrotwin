module.exports = {
    apps: [
    {
        name: "proxy-server",
        script: "npm",
        args: "run start:proxy-server",
        env: {
            NODE_ENV: "development",
            ENV_VAR1: "environment-variable"
        }
    }, {
        name: "client",
        script: "npm",
        args: "run start:client"
    }
    ]
}
