module.exports = {
    apps : [{
      name   : "hermes-website",
      script : "npm",
      args: "start",
      env_production: {
        PORT: 4000
      }
    }]
  }