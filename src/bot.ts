import { sendDiaryWebApp } from "./webappKeyboard";

import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot('8069257497:AAGlsrmEUsg69t96f135N3_U3THqIIyA5YI', { polling: true });

export { bot }; // <-- ОБЯЗАТЕЛЬНО

bot.onText(/\/start/, (msg: TelegramBot.Message) => {
  sendDiaryWebApp(msg.chat.id);
});
