from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Your Telegram bot token
TOKEN = '7576389364:AAECruCAUs9UGz7z0gZdQ9N_cR90BYDPRUs'

# Define the start function that handles the /start command
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    # Create the inline button to open the web app
    keyboard = [
        [InlineKeyboardButton("Start Now", web_app={"url": "https://bnb.plutonbit.com"})]
    ]
    
    # Create the inline keyboard markup
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    # Send the message with the button
    await update.message.reply_text(
        'Welcome to the BNB Giveaway platform! Complete tasks to get BNB gift ✅',
        reply_markup=reply_markup
    )

# Main function to start the bot
def main():
    # Set up the application with the bot token
    application = ApplicationBuilder().token(TOKEN).build()

    # Register the /start command handler
    application.add_handler(CommandHandler("start", start))

    # Start the bot
    application.run_polling()

if __name__ == '__main__':
    main()
