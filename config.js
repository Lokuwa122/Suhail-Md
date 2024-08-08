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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_01_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2N1Q2NG11Yy9JM2dTQ3pMYUsrUEQwRExLbUpsT3Q3U1BBU2xkalFHMi9nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4NFJRQkVNZ1NtS2d1Q09acVhCWDh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjZWRiZmM2LTI5MDYtNGUyYy1hOTA1LWNkYzEwOGYzNTE0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAxOTEsXG4gICAgICA3NCxcbiAgICAgIDI1MixcbiAgICAgIDcwLFxuICAgICAgMTc0LFxuICAgICAgMjMyLFxuICAgICAgMTI4LFxuICAgICAgMjUxLFxuICAgICAgOTksXG4gICAgICAxNzAsXG4gICAgICAxNDgsXG4gICAgICAxMCxcbiAgICAgIDIzNixcbiAgICAgIDI0NyxcbiAgICAgIDkwLFxuICAgICAgMTgzLFxuICAgICAgMjE4LFxuICAgICAgMjIxLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgODQsXG4gICAgICAxNDAsXG4gICAgICAyMTcsXG4gICAgICA1MCxcbiAgICAgIDcwLFxuICAgICAgMjI2LFxuICAgICAgNDYsXG4gICAgICAyNixcbiAgICAgIDcxLFxuICAgICAgMTgwLFxuICAgICAgMzUsXG4gICAgICAyMDEsXG4gICAgICAxOSxcbiAgICAgIDc4LFxuICAgICAgMTQ0LFxuICAgICAgMTcwLFxuICAgICAgMTQwLFxuICAgICAgMixcbiAgICAgIDI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFYUk4yQjZTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3OTE4NjI1Mjo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTU1Mzg0NTc2MDEzNjo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcUEvcjhCRUp2azFMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFKV1hpdU5GSlZTaEpkcFU0MTlzR2dZc1FyS2h6R2tzYlp0bTBlSVpuaDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMjZHT1JWREgyR2JsdjNSZmM4MDFWVFJtdktNMHdwTlQxMDhPN21NNkg3eVpsSElOUUhPazdpWXlBWHM1RnJaTTllL1luZW9KRGg4eHFwVnFlTVFuQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3RLTExIeWVYNHVuY1lZdmx1QXhxSHlUcTZoeTFpMXBIU2tLTWlyUmtiSUFFVG5RN0hubHRQTG9qMDd4SWpaeXdROU50VzQ3LzVaUDBwMUdRRE8xaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzkxODYyNTI6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE1MDg3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
