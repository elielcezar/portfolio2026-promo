module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "npm",
      args: "start -- -p 3011",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
