// src/webappKeyboard.ts
import { bot } from "./bot"; // если бот уже создан в отдельном модуле

export function sendDiaryWebApp(chatId: number) {
  bot.sendMessage(chatId, "Открой дневник:", {
    reply_markup: {
      keyboard: [[
        { text: "📓 Дневник", web_app: { url: "https://diary.vercel.app" } }
      ]],
      resize_keyboard: true
    }
  });
}
