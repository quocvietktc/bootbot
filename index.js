'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAACXQHTt31cBAEOLzBUEuQK3jAaKuP7ln3KtI9icnNTzZApLxSiK1RDmO6OnRyZAeQZAiR1Y7hZBLz0DyTTPqkZAH3iSjSOyAQ1nT793J0pg2gYD8LbGrJQVTzrFqi1F1p4Ny3PSmpbZBpTHukAjnrwX2IWr68TWZANmZAQSZAMEB5VN7QP5lPGb9',
  verifyToken: 'chatbolt',
  appSecret: '3d8584ead7aab807d4eef2a5c41efd9e'
});

bot.on('message', (payload, chat) => {
  const text = 'alooo';
  chat.say(`Echo: ${text}`);
});

bot.start();
