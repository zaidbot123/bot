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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233533230608";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233533230608,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_38_08_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NixcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMa0tKM1FWUmREc3RXc3VGc1RxTUY1TGZYUUZEMVhYdkxtdlo2ZWZmNXRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUTVJQaGowNlNZT0hSMDNESmtpdlhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEwNDQxNmQ4LWJhNmItNGMzNC05ZDU1LWVkYjgwM2I1OGE1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDMzLFxuICAgICAgMTk3LFxuICAgICAgMjgsXG4gICAgICAxNzMsXG4gICAgICAxLFxuICAgICAgOTYsXG4gICAgICAyNDMsXG4gICAgICAzMCxcbiAgICAgIDE2NCxcbiAgICAgIDk1LFxuICAgICAgMTE0LFxuICAgICAgNDMsXG4gICAgICA0NyxcbiAgICAgIDEzLFxuICAgICAgMjM3LFxuICAgICAgMTgyLFxuICAgICAgMTIyLFxuICAgICAgMTk0LFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDkwLFxuICAgICAgNDMsXG4gICAgICAxNTAsXG4gICAgICAxNzgsXG4gICAgICAzMSxcbiAgICAgIDI0MCxcbiAgICAgIDE4MCxcbiAgICAgIDE5MCxcbiAgICAgIDIzNCxcbiAgICAgIDExOCxcbiAgICAgIDE2NixcbiAgICAgIDg2LFxuICAgICAgMjQ4LFxuICAgICAgMjUwLFxuICAgICAgMjA2LFxuICAgICAgNzIsXG4gICAgICAyMDcsXG4gICAgICAyMjAsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkdSMUVHNkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzMzIzMDYwODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA0MTQwMzkwODQ2NTIwOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hR2tNME9FSlhhOGJVR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZUdlbjN1V3JCWWd5REhDRVc0ZTVaZ3RlTGMyaGRsQlhXRTVkL2tHd3l3RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPTUM2QzNXR1poMHo2QWxmdWdlZVZsdHVhaWgwZE9VOGhRTGRVMkR1MHYrWURLazgweXpiVFVVanJnVC9NR0RnL1dEY0FRb1pzWVhmWldMRzBBNm5BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwcm4yNmN4ekFnU05jckhWUW82VGhvUzVDbFljYjZmQTNLR1A5MzJoN25DdEt1bGhSa2NaZklQeU5MaFgyRnhnbmZzdDFVL3AyaGVrZDZxZDgrVW9Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzMyMzA2MDg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNjI0NzI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm1CXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVa2pKbWtqN2JYV2tVQS96MjNlNVFwODd1T2VsUHo2SUZYWHdYZjhuQy9FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5MTk4NDAxMDIsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOls3LDEsNSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM1NzkxNDY5OTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ 』```", 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Ernest",


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
