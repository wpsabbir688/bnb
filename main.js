const TelegramBot = require('node-telegram-bot-api');

// Use your Telegram bot token here
const token = '7576389364:AAECruCAUs9UGz7z0gZdQ9N_cR90BYDPRUs';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Handle '/start' command to welcome users
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Send a message with an inline keyboard button
    bot.sendMessage(chatId, 'Welcome to BNB Giveaway platform! Complete tasks to get BNB gift ✅', {
        reply_markup: {
            inline_keyboard: [
                // Button that redirects users to the giveaway page
                [{ text: 'Start', url: 'https://news.plutonbit.com/bnb-giveaway' }]
            ]
        }
    });
});

// Optional: Handle callback queries if buttons require interaction
bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    bot.answerCallbackQuery(callbackQuery.id)
      .then(() => {
        bot.sendMessage(message.chat.id, 'You clicked a button!');
      });
});
