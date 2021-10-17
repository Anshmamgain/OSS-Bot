import DiscordJS ,{Intents} from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready',function(){
    console.log('the bot is ready')
})

client.on("messageCreate",function(msg){
  if(msg.content === "bruh"){
      msg.reply("breh")
  }
}) 

client.login(process.env.TOKEN)