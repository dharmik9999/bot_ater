const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'boarfish.aternos.host',  // replace with your server IP
  port: 28394,             // replace with your server port, usually 25565
  username: 'bot001',     // replace with your desired bot name
  version: '1.20'        // replace with the server version
})

bot.on('login', () => {
  console.log('Bot has logged in!')

  // Set an interval to right-click (interact) every 5 seconds (5000 milliseconds)
  setInterval(() => {
    bot.swingArm()  // This simulates a right-click with an item in hand
    console.log('Bot performed left-click action!')
  }, 5000)
})

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat(`Hello ${username}, I am a bot!`)
})

bot.on('kicked', (reason) => {
  console.log('Bot was kicked:', reason)
})

bot.on('error', (err) => {
  console.log('Bot encountered an error:', err)
})
