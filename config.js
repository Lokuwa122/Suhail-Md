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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_09_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0LFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ0hod2piZDR4Y2pBcWtCZFJwMEZaNDlKM3BJNkRicVdMelBzSkNVMnE5dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDE3NzE2MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdBQzAyRTM3OEZGMDNCOTlGN0MzQjQzREIxNDZBNUQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTUwNjE5MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMTc3MTYyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUJDQTRDODgwNDk0NjI3Mzg1RUExRDJDNTVGMTJEMDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTA2MTkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAxNzcxNjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNDYwMjhEQTJENEQ3NkZBNEJCNUYwNTM3RDgxOEMzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDYxOTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDE3NzE2MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0NDVCRTA1RDY0RkI3NTAyRkRGOUM2RkJBMDVDQjY5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTUwNjE5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGN184MUdEVFNXdTVhcXJraVItN3BRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBhMDc4ZjZmLTE1ODEtNDk4YS05ZTc3LTM4ZWU4MTZiYjAwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODYsXG4gICAgICAxOSxcbiAgICAgIDY0LFxuICAgICAgMzksXG4gICAgICAxMTEsXG4gICAgICAxMTcsXG4gICAgICAyMzQsXG4gICAgICAxNTgsXG4gICAgICAxMTUsXG4gICAgICAxODcsXG4gICAgICAyMDEsXG4gICAgICAyNDcsXG4gICAgICAxMjgsXG4gICAgICAxNjIsXG4gICAgICAxNzYsXG4gICAgICAyNDIsXG4gICAgICAxLFxuICAgICAgMTYsXG4gICAgICAyMzMsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgNDEsXG4gICAgICAxMzUsXG4gICAgICAxMTIsXG4gICAgICA0MixcbiAgICAgIDE0NyxcbiAgICAgIDYsXG4gICAgICAyNDgsXG4gICAgICA3MixcbiAgICAgIDIxLFxuICAgICAgNzQsXG4gICAgICAxMTksXG4gICAgICAxMDMsXG4gICAgICAxOTcsXG4gICAgICAxNSxcbiAgICAgIDMwLFxuICAgICAgMjAsXG4gICAgICAxNjMsXG4gICAgICAxNTcsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKT0w1TFVERUltejhMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlN3UlJNMk1ic2J2ZUhrZkZoWS9leVlIZ2dUdUp3K1JsNnVCZW91RHY3bmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0R2OEc0WnFqMFdwZW82dTBrRFh5NVdpZlY5bTZWRjJMcTU3UklBemhFMENMcTVFeFcvZnJUckJ4azQwQmZQNWtnZHBSR1UrVE1OTDBMZ3FVcDkyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVndaUEtpZmI1amdJbjN6ek93UjdmKzMzVDQyN2Z4Z0ljT0FmUEFMN1hSeUJnWEZvOGlRVDBCeVNnRUFTcGtLR0pTMW1qY2gyL3I3b2FMc3dNb0p6akE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDE3NzE2Mjg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTU1MjQ3NzA0OTAzODo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxva3VcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMTc3MTYyODo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTUwNjE4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY1RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjQrLmpzb24iOiAie1wia2V5RGF0YVwiOlwicy9KL3VnUG1OeU5naVRpWmVQV05qbEMxV2Q1N1VPQmRGSWc3MzF4aTkwST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTgwOTUyNDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY0X18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVT0tFVVZYRlRaSVpSWFg2aG1zbG9vTFV5TXUyUkp3OUdqUmdlOG4zbTVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxODA5NTI0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ4NTI3ODg0MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY1QS5qc29uIjogIntcImtleURhdGFcIjpcIkJzT2hlVHlPM1JQYm01NG03VWd5OEJSMHhlQVdtckhKblpzUlpKNjYwQjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTE4MDk1MjUwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2WTQ1VGtjKy9RVk5ZWGhEb0tzQzljRkl6UkptekFCOUl5eXR4b2RNT3JVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxODA5NTI1MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjVDLmpzb24iOiAie1wia2V5RGF0YVwiOlwicnFSMmZUQXNnYnFiWXo3dTRLd3lHNk02YWUrSDRndHRrUVJ3di9sc0UrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTgwOTUyNTAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0OTQzNTA4NTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIZm9PNlcxOWRQeHkxa1BrdDU0ZGIzZ2tTS0E3SGZwdXJDSmFaZU9RRlBZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxODA5NTI1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTA2MTkwNzUyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
