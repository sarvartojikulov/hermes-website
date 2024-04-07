const fs = require("fs");
const axios = require("axios");
const dotenv = require("dotenv");
const pm2 = require("pm2")
const ecosystem = require("./ecosystem.config")
const { execSync } = require('child_process');

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
    envConfig.lastUpdate = new Date().toISOString();

    // Convert the object back to string
    const newEnvContent = Object.keys(envConfig)
      .map((key) => `${key}=${envConfig[key]}`)
      .join("\n");

    // Write the new .env file
    fs.writeFileSync(CONSTANTS.ENV_FILE, newEnvContent);

    console.log("> Token refreshed and .env updated successfully.");

    console.log("> Building project")
    execSync("npm run build");
    console.log("> Project built success")

    pm2.connect((err) => {
      if(err) {
        console.error(err)
        process.exit(2)
      }

      const website = ecosystem.apps[0]

      pm2.restart(website.name, (err) => {
        if(err) {
          console.error(err)
          process.exit(2)
        }
        console.log("> Restarted ", website.name)
      })
    })
  } catch (error) {
    console.error("Failed to refresh token and update .env:", error);
  }
}

main();
