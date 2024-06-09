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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_26_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgMTczLFxuICAgICAgICA3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi92Wk83RUQ5akh6d0x5RGZCMFJOS2NBZzk4aHFPRnFXL3JhbHpCUDRMUjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ5NzEzMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QTY4NTRBMjcxNkRGMDIzMUQwRjk2MjAxRDA1MzZBRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5MDM1ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDk3MTMwNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM4MEIxM0NBRTAyREFBNDBFMkI2MzQwNEFGMzcxRkYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzkwMzU4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0OTcxMzA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkZFNUYxREQxQjEzMTBFOEZDMjM2QjYyODUzQjY4M0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3OTAzNTg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ5NzEzMDY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRjY5RkZCODQ5NkI1OTI2QkRFMjlGOUMwNjA1RjlGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5MDM1ODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOXo0QTRobXJUT09XY2VacGRSNFljQVwiLFxuICBcInBob25lSWRcIjogXCIyNTUxMDlkMS04YjZiLTQyNzgtYWE0NC01NzRkMTMxN2ViMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMTQwLFxuICAgICAgMTc2LFxuICAgICAgMjQ3LFxuICAgICAgNTgsXG4gICAgICA2MixcbiAgICAgIDg3LFxuICAgICAgODEsXG4gICAgICA5MixcbiAgICAgIDY1LFxuICAgICAgMixcbiAgICAgIDQ2LFxuICAgICAgMTMxLFxuICAgICAgMjExLFxuICAgICAgMzEsXG4gICAgICAyMTMsXG4gICAgICAxNjQsXG4gICAgICA4MixcbiAgICAgIDI0MSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAyNDgsXG4gICAgICAyMTMsXG4gICAgICAyNTEsXG4gICAgICAzNyxcbiAgICAgIDg2LFxuICAgICAgMTUxLFxuICAgICAgMjUsXG4gICAgICAzMCxcbiAgICAgIDM5LFxuICAgICAgMjAzLFxuICAgICAgMjAxLFxuICAgICAgODAsXG4gICAgICAyMDksXG4gICAgICAzMCxcbiAgICAgIDIxMixcbiAgICAgIDE0MyxcbiAgICAgIDE3LFxuICAgICAgMTk3LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDI1TkNLWjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0OTcxMzA2ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4ODI3NDkxNTg1MjM0MTo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInphaWRiaGkxODVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJK3dqYk1DRU5mQmxMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdEZEFwRzBnbFl0OVNIZjNGMVlKVlJRQW1FdUZYVzBSY1c5UE9lL1lVRXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRERqQVltb01RSzZEc0ZQVk5Nbm1lUC9JbGhYRURSUlFQeGRweDJDZWxuYXN5WmhMWGQrT3ZYcDhPTVFvSnVEdzFyVWg4U2o0OUFwcS81TFVGa1VTQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2grRmlndFk0YXlUYndsWkpxSGE5UVoybElFYzE4NnhmMkhvUUN4SUlsY2o2UnBhMzkvTDlYcW9Iam1abmpGZlhHanVyRmoyODEwbXBUL1FkKzNoQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ5NzEzMDY4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzkwMzU4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUppWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmlZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR3p1Rmx5TTNmVmxNRkFpOEw2YVhLT3AvYm53aWl1Y3Y3V25VREUyR2p4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDQwNDQ4MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzkwMzU4NDQzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
