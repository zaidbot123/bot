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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_31_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibDBROFYwNld4Tm1IOEh0ekl2bHlvNzRRQTZXYVhvS3J2bk92bW9YYXBJbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUE1TFlQZTlUcldHRTlsWmpURktkZ1wiLFxuICBcInBob25lSWRcIjogXCJlN2U1NTk4ZC0wMjgyLTRjZWYtYjM3Ni1jNzljYmU3M2IzZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTg2LFxuICAgICAgMTg4LFxuICAgICAgMjQsXG4gICAgICAzMSxcbiAgICAgIDI3LFxuICAgICAgMjcsXG4gICAgICAyMjMsXG4gICAgICAyNDksXG4gICAgICAxOTcsXG4gICAgICA1MixcbiAgICAgIDEzMCxcbiAgICAgIDE5NixcbiAgICAgIDMxLFxuICAgICAgMjksXG4gICAgICA3NyxcbiAgICAgIDEwNSxcbiAgICAgIDIyMyxcbiAgICAgIDI3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDI1NCxcbiAgICAgIDYxLFxuICAgICAgMTkyLFxuICAgICAgMjEyLFxuICAgICAgODksXG4gICAgICAyMzksXG4gICAgICA4LFxuICAgICAgMTA2LFxuICAgICAgMzEsXG4gICAgICAxNzAsXG4gICAgICA4OCxcbiAgICAgIDE2LFxuICAgICAgMTE4LFxuICAgICAgMTM2LFxuICAgICAgMjUwLFxuICAgICAgMjM4LFxuICAgICAgMTk2LFxuICAgICAgNjYsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFdHVzJBQlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxMjcwNTY4NjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJBU0lUIE1EIEJPVFwiLFxuICAgIFwibGlkXCI6IFwiMTY0MTU4MzY0NTA0MjYxOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ083aXBSc1F0c21qdEFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZU0weHRHUFByeEU3cnNLL0JpM1dSczRVUnJTVTdteTBVdERYRWRrSU9TVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxM2pla2IwcDl1YVp4Z3dzOTdCL3l6Y1A0cVkrRmE1ekViS3g4c1o2WUxhOU9OSFc1MU1hZ2NkckNESHlwRnJacGpEMXNKQTdENXJLelVXOUc5YkhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnVVhSYk5NSVBmQUtwZHRSSURYSUFHVGdlcldUYXlHUEdtN29mMGw5RDQ1R1NHV3pPa0VqRXd2bi95ODdlcERIUXVRY2FQTDNwVU10b25hS0dIY0loQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTI3MDU2ODY6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI0NzQ4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1uQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTW5BLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYXhxSTdsZXV4SWlpd1FMRjk0SGlmTGRkbi9ZTTI4SjNqVDVtNEpzbTdETT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzI0MTk2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDI1NTU3OTEzXCJ9Igp9"  // PUT your SESSION_ID 


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
