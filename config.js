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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010816280";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_21_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOQkp3VmR5TEh5Sm1HamlzdXBBUE80aEVZNzVYNkFrQ0VRcGJrbFV0SlFvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsbTA5LW5uVlJSZUZsTV9VeHBTYWF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjliNzZhZWQ4LWZlYjctNGU5NC04ZTk0LWFkY2JhYWUxNjE1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAxODksXG4gICAgICAxMjUsXG4gICAgICA5MixcbiAgICAgIDc4LFxuICAgICAgOTQsXG4gICAgICAyMTQsXG4gICAgICA3LFxuICAgICAgMjQ4LFxuICAgICAgMTk2LFxuICAgICAgMjM2LFxuICAgICAgMTg5LFxuICAgICAgMjI3LFxuICAgICAgOTUsXG4gICAgICAyMzEsXG4gICAgICAyMCxcbiAgICAgIDU5LFxuICAgICAgMjEyLFxuICAgICAgMjQ3LFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDc3LFxuICAgICAgMTgzLFxuICAgICAgMjIxLFxuICAgICAgMjQ2LFxuICAgICAgODYsXG4gICAgICAxNjAsXG4gICAgICA1MCxcbiAgICAgIDY4LFxuICAgICAgMjUzLFxuICAgICAgMTU4LFxuICAgICAgMTM3LFxuICAgICAgMTU3LFxuICAgICAgMjEzLFxuICAgICAgMTA3LFxuICAgICAgODksXG4gICAgICAzOCxcbiAgICAgIDEzOCxcbiAgICAgIDIwMyxcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWjk1SzVMVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMDgxNjI4MDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2NTI2OTUxMDYzNzgzOjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ055Snpsb1Fsb2FLdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaFdXM0l1ZnF6dklXQ0ZzQ2Q5OTc4UGVEeWo2N2k5L3hmRFNIWTFiMWN4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjeUNRYS9CNW1Vbi9JY0ttZVFlMDR6NWZ5UFRxU0dwR1IxU2I1MEJDT0tBeFRTU2lEaU1TUU5TTGxjWG5SbjRVVVBVdmludmxqRmpDRVBvTWhSd0tDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrNnBDMklHVTlwMmNTQjJkQ29YcmJ6U1BMckVsdVBPVUgrcjJ6dlpqSDh2VFpvRGtCOU9pNkdmU3J2ZUFVSzB6VGFqeGwxQnI2MWhFVStKS3c5YnRqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEwODE2MjgwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODI5MjczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWxOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBbE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuUVZWdk1IMWphK29aWGlMOUZaK09uaDU0WVpNSWw4bHRhVE9vM01TdlBvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MDAyMjg3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgyOTE2OTY0NVwifSIKfQ==="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Jonnyx",


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
