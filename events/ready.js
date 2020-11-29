const db = require('quick.db');

module.exports = async (client) => {

    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(client.config.game);

    setInterval(() => {
        console.log(`Connecting to servers (${client.guilds.cache.size})...`);

        client.guilds.cache.forEach(async (guild) => {
            const voiceStream = db.get('voiceStream_' + guild.id);
            const voiceChannel = db.get('voiceChannel_' + guild.id);

            if (voiceChannel === null || voiceStream === null) return console.log(`The server does not have an automatic radio registered (ID : ${guild.id}).`);
            if (client.voice.connections.get(guild.id)) return console.log(`A connection is already in progress in the server (ID : ${guild.id}).`);

            const stream = client.stream.arbitraryStream(voiceStream, { opusEncoded: true, encoderArgs: [] });

            client.channels.cache.get(voiceChannel).join().then(connection => {
                const dispatcher = connection.play(stream, { type: "opus" });
                dispatcher.setVolumeLogarithmic(50 / 200);

                console.log(`Successful connection in the server (ID : ${guild.id}).`);
            }).catch(() => { });
        });
    }, 10000);

};
