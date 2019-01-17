const TelegramBot = require('node-telegram-bot-api');
const config = require('config');

const WavesAPI = require('@waves/waves-api');
const Waves = WavesAPI.create(WavesAPI.TESTNET_CONFIG);
const seed = Waves.Seed.fromExistingPhrase(config.get('bot_seed'));


const TOKEN = config.get('token');

const database = require('./database');

//const Agent = require('socks5-https-client/lib/Agent')
// const proxy_host = config.get('proxy_host');
// const proxy_port = config.get('proxy_port');

const bot = new TelegramBot(TOKEN, {
    polling: true,
    // request: {
    //     agentClass: Agent,
    //     agentOptions: {
    //         socksHost: proxy_host,
    //         socksPort: proxy_port,
    //     }
    // }
});

const frases = require('./frases')
bot.onText(/\/start/, function (msg) {
    var chatId = msg.chat.id;
    database.setData('users/' + chatId,msg)

    bot.sendMessage(chatId, frases.start);
});

bot.onText(/\/help/, function (msg) {
    bot.sendMessage(msg.chat.id, frases.start);
});

bot.onText(/\/send (.+)/, function (msg, match) {
    const resp = match[1];

    const transferData = {
        recipient: resp,
        assetId: 'WAVES',
        amount: 1000000000,
        feeAssetId: 'WAVES',
        fee: 100000,
        attachment: '',
        timestamp: Date.now()
    };

    Waves.API.Node.transactions.broadcast('transfer', transferData, seed.keyPair).then((responseData) => {
        bot.sendMessage(msg.chat.id, (1000000000 / Math.pow(10, 8)) + ' токенов Waves зачислено вам.');
    }).catch(function (e) {
        console.log(e)
        switch (e.data.error) {
            case 112:
                bot.sendMessage(msg.chat.id, 'Извините, боту не хватает денег. Пожалуйста, попробуйте позже.');
                break;
            case 102:
                bot.sendMessage(msg.chat.id, 'Неверный адрес, проверьте свои учетные данные и повторите попытку.');
                break;
            default:
                bot.sendMessage(msg.chat.id, 'Произошла ошибка сервиса!\n'+e.data.error+': '+e.data.message);
        }
    });
});

console.log('bot has been started');