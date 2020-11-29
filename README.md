# AutoRadio-bot
A simple automatic radio bot with multiple streams, (radio 24/24h) 🎧

Are you looking for a bot that can read radio streams and can play the stream 24/24h ? This fully open source code is made for your project !

### ⚡ Installation

Well, let's start by downloading the code.
Go to the folder `config` then the file `config.json`.
For the bot to be able to start, please complete the file with your credentials as follows :

```js
{
    "game": "GAME",
    "prefix": "PREFIX",
    "token_bot": "TOKEN"
}
```

Reminder :

- `game`, the status of the bot.
- `prefix`, the prefix that will be set to use the bot.
- `token_bot`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.

To customize the emojis go to the file `emojis.json`.
Emojis are already defined by default but you can modify them if you wish.

```js
{
    "error": ":x:",
    "success": ":white_check_mark:"
}
```

In the console, type `npm install` to install all dependencies.

To start the bot :

```
#With Node
node index.js

#With pm2
pm2 start index.js --name "RadioBot"
```

All you have to do is turn on your bot !

### 💡 Commands

```
help, see the list of available commands.
debug, see the bot latency and the number of voice connections.
radio <radio name>, to play a radio stream in a vocal salon and record it to be played all the time.
```

### 🏓 Utilities (to change the code)

To change the available radios, go to the `config` folder and then to the file `radios.json`.

This is used with [discord.js](https://www.npmjs.com/package/discord.js), [discord-ytdl-core](https://www.npmjs.com/package/discord-ytdl-core), [opusscript](https://www.npmjs.com/package/opusscript) and [quick.db](https://www.npmjs.com/package/quick.db).
