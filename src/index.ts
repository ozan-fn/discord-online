import { Client, RichPresence } from "discord.js-selfbot-v13";
import express from "express";

const client = new Client();
const app = express();

const token = process.env.DISCORD_TOKEN;
const port = process.env.PORT || 3000;

client.on("ready", async () => {
    if (!client.user) return;
    console.log(`[Discord Bot] ${client.user.username} is ready!`);

    try {
        const externalAsset = await RichPresence.getExternal(client, "1113348957070958662", "https://i.ibb.co/0jmYm3rw/Whats-App-Image-2025-03-24-at-04-23-57-6661c6af-1.jpg");

        const presence = new RichPresence(client)
            .setApplicationId("1113348957070958662")
            .setType("PLAYING" as any)
            .setName("Visual Studio Code")
            .setDetails("Editing index.ts")
            .setState("Workspace: Nothing!")
            .setAssetsSmallText("Iwak")
            .setStartTimestamp(1507665886)
            .setAssetsLargeImage(externalAsset[0]?.external_asset_path)
            .setAssetsLargeText("Visual Studio Code")
            .setPlatform("desktop");

        client.user.setPresence({ activities: [presence] });
        console.log("[Discord Bot] Presence has been set.");
    } catch (error) {
        console.error("[Discord Bot] Failed to set presence:", error);
    }
});

if (token) {
    client.login(token);
} else {
    console.error("[Discord Bot] Token not found in .env file.");
}

app.get("/", (req, res) => {
    res.send("Discord bot and Express server are running!");
});

app.listen(port, () => {
    console.log(`[Express Server] Listening on http://localhost:${port}`);
});
