import { Client, RichPresence, type ActivityType } from "discord.js-selfbot-v13";

const client = new Client();

client.on("ready", async () => {
    console.log(`${client.user?.username} is ready!`);

    const externalAsset = await RichPresence.getExternal(client, "1113348957070958662", "https://i.ibb.co/0jmYm3rw/Whats-App-Image-2025-03-24-at-04-23-57-6661c6af-1.jpg");

    const presence = new RichPresence(client)
        .setApplicationId("1113348957070958662")
        .setType("PLAYING")
        .setName("Visual Studio Code")
        .setDetails("Editing index.ts")
        .setState("Workspace: Nothing!")
        .setAssetsSmallText("sakanaaa")
        .setStartTimestamp(1507665886)
        .setAssetsLargeImage(externalAsset[0]?.external_asset_path)
        .setAssetsLargeText("Visual Studio Code")
        .setPlatform("desktop");

    client.user?.setPresence({ activities: [presence] });
});

client.login("NzYzNzgwNDA2MTA0NTU1NTIw.GJcKfk.OrDfnSiLmdHAR-JeYH4Wn2eyu_IcJl_YFPWBek");
