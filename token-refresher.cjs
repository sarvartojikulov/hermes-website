const fs = require("fs");
const axios = require("axios");
const child_process = require("child_process");
const dotenv = require("dotenv");


const CONSTANTS = {
  ENV_FILE : ".env.local"
}

async function main() {
  dotenv.config({
    path: CONSTANTS.ENV_FILE,
  });

  try {
    const response = await axios.get(
      "https://graph.instagram.com/refresh_access_token",
      {
        params: {
          grant_type: "ig_refresh_token",
          access_token: process.env.INSTAGRAM_TOKEN, 
        },
      },
    );

    const newAccessToken = response.data.access_token;

    const file = fs.readFileSync(CONSTANTS.ENV_FILE)
    const envConfig = dotenv.parse(file);

    // Update the access token
    envConfig.INSTAGRAM_TOKEN = newAccessToken;
    envConfig.changed = 1;

    // Convert the object back to string
    const newEnvContent = Object.keys(envConfig)
      .map((key) => `${key}=${envConfig[key]}`)
      .join("\n");

    // Write the new .env file
    fs.writeFileSync(CONSTANTS.ENV_FILE, newEnvContent);

    // child_process.execSync("pm2 reload ecosystem.config.js"); // Adjust based on your PM2 setup (e.g., use specific process name instead of 'all')
    console.log("Token refreshed and .env updated successfully.");
  } catch (error) {
    console.error("Failed to refresh token and update .env:", error);
  }
}

main();
