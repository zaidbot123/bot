const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923312705686";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_14_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwQ0dMcXc4Ym9hakVpTXJOQlNoR3dsWU14VUJlUGdaVkMzay91RG9PL2gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxMjcwNTY4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTgxNDg2NUM3QkMyMTBEMDg4Q0JBNzA1RDVFOTJDOThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzNTYyMDQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkp3anBqc3o4UU1LaExhdERpa1ROeEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmMzMTdhNWQtM2U5Ni00MGE2LWI5NDktNjgxNTExZmMwZWFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgNTcsXG4gICAgICAyOSxcbiAgICAgIDkxLFxuICAgICAgNTIsXG4gICAgICAzNixcbiAgICAgIDIyMCxcbiAgICAgIDIyMCxcbiAgICAgIDIyNixcbiAgICAgIDgsXG4gICAgICAyNTIsXG4gICAgICAxNjIsXG4gICAgICAyMzQsXG4gICAgICA5OCxcbiAgICAgIDE2NSxcbiAgICAgIDE4OSxcbiAgICAgIDE0NixcbiAgICAgIDcwLFxuICAgICAgMTc3LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgMTQxLFxuICAgICAgMzQsXG4gICAgICAxNjIsXG4gICAgICA2MSxcbiAgICAgIDEwNCxcbiAgICAgIDQ5LFxuICAgICAgNixcbiAgICAgIDEwNCxcbiAgICAgIDE3LFxuICAgICAgODYsXG4gICAgICAyMTYsXG4gICAgICAxMDksXG4gICAgICAzNyxcbiAgICAgIDY4LFxuICAgICAgMjM0LFxuICAgICAgNTEsXG4gICAgICAxMjgsXG4gICAgICA3NyxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTTDg4SkU5UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzEyNzA1Njg2OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MTU4MzY0NTA0MjYxOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ042WHd2QURFSy93N2JVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQTlYRkpZMUk1R0tLbVYwSzcyc1lRUXgwUC9sWkV2Sjd4RVJ5eWhseWlERT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3RUNqRUVwbFBmbWxGUjg2SHRsMTJwWjllaUJzZjdJdXJzaW9oenkyZHRwbGMvei83WHdIQkZlK1RvR0ZXVjB0V1BYOUoybFl5bk9EZHg2QnJ1bW9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJweWZSdzVuK0wydlhTbjVmWjh4Uk5GaTJHZ095WlMrdGJHaC8yQ3czY0RwQmdqRGR1aWhQWTdNbFhRZGoyTkloendnSDFqREJOOWVQZVZod1dGSFRBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTI3MDU2ODY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzU2MjAzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBjWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGNaLmpzb24iOiAie1wia2V5RGF0YVwiOlwicFdIZXpsaURXamhYdkVkaEZCOFViR0Iwd1I5aDVqNndsNlNtUk9hYld4ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDQxMjcxNzczLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ 』```", 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x BASIT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
