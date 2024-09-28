const TelegramBot = require('node-telegram-bot-api');

// Your Telegram bot token
const token = '7576389364:AAECruCAUs9UGz7z0gZdQ9N_cR90BYDPRUs';

// Create a bot using 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Handle '/start' command when a user starts the bot
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Send a welcome message with an inline keyboard button
    bot.sendMessage(chatId, 'Welcome to the BNB Giveaway platform! Complete tasks to get BNB gift ✅', {
        reply_markup: {
            inline_keyboard: [
                // Button that redirects users to the giveaway page
                [{ text: 'Start', url: 'https://news.plutonbit.com/bnb-giveaway' }]
            ]
        }
    });
});

// Optional: Handle callback queries if buttons need interaction
bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    bot.answerCallbackQuery(callbackQuery.id)
      .then(() => {
        bot.sendMessage(message.chat.id, 'You clicked a button!');
      });
});
