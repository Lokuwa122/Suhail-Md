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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94779186252";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "°⭕`ɴᴀᴍᴇ :|| ᴏꜱʜᴀᴅᴀ´|:🥷💙°⭕•𝗻𝗶𝗰𝗸 𝗻𝗮𝗺𝗲-):ʟᴏᴋᴜᴡᴀװ•˚ˢ⭕ᴀɢᴇ :||18||:🐣🌻OO⭕ꜰᴏʀᴍ:||ɢᴀʟʟᴀ";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "enabled"
global.save_status = process.env.AUTO_SAVE_STATUS || "enabled "
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_13_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgyLFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0FMeHdhWm9SdGpQRjB0c0swV1NCQUxGZURXeE1DUFk2Tk1TV1F6Tjc2Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiejQ2OW40OHVULTZkcFRFZkN0WXZUUVwiLFxuICBcInBob25lSWRcIjogXCJmZDgwZDg0MS04ZTc0LTQ0YWItOTBlYS0xYmYwZDU2YmI4ZWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjcsXG4gICAgICAyMDIsXG4gICAgICAyMjYsXG4gICAgICAzNCxcbiAgICAgIDEyMixcbiAgICAgIDQ2LFxuICAgICAgMTUzLFxuICAgICAgMixcbiAgICAgIDE0MyxcbiAgICAgIDI4LFxuICAgICAgOTcsXG4gICAgICAxNjYsXG4gICAgICAzNSxcbiAgICAgIDEwOCxcbiAgICAgIDIsXG4gICAgICAyMzUsXG4gICAgICA5NyxcbiAgICAgIDY1LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE3MyxcbiAgICAgIDUwLFxuICAgICAgNzQsXG4gICAgICAyMTEsXG4gICAgICAxMjYsXG4gICAgICAyMDQsXG4gICAgICA2MSxcbiAgICAgIDMwLFxuICAgICAgODksXG4gICAgICAxMjUsXG4gICAgICAxODcsXG4gICAgICAxOTIsXG4gICAgICA0LFxuICAgICAgMTg1LFxuICAgICAgMTUxLFxuICAgICAgMTMyLFxuICAgICAgMjQ2LFxuICAgICAgMjIxLFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNBL3I4QkVPVFU5N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBSldYaXVORkpWU2hKZHBVNDE5c0dnWXNRcktoekdrc2JadG0wZUlabmg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInUzSTMwWXZKZXJTd0xTNU93SVdOcHV2NUNtNE5sMjNiaTRYUS9ubWI4bDl0d2xuYjAyRTNacWVzeUw3N2k3cTYzZXVCai9IeWRMclRqQm1XTnNsOUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjkyQURYdFNvZ2ZNTXhZOTFONEkzcWl6VThVTkU4VXdlUWgvU05QdGYvRnNSa0k1bHFjMkRFZGY2RE96enBrUUIweVVZbzhCcytNS1dEUWRESTI0NmlBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzkxODYyNTI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTU1Mzg0NTc2MDEzNjo4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzkxODYyNTI6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjI1MTkxXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "LOKUWA",
  packname: process.env.PACK_NAME || "LOKUWA",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "LOKUWA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE||"public",
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
