//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09PWnFJa3hpaE54aVFZckZubjMzWmhlR2lROTc1bmEyZnkxZ3hYK24wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3Q1OHVyMk9tRFFyMXk0Ny9HQ2JYLzhUVU9tbjRCaHNMT0lHdHN1RkJ4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRTRLNGhUYkVRa3h1OStJUWYyaGJwYjVCc21kTzJ3U0RZOEVkSnlEYUhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3aEVqdnhjTHRmRlpqbXNwL2Z0MWYwUXB0Y1JEcWdhd3c5SEtzTkE0WEg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVEd29hTDBQYklZT3RBU0JudzNLK3l6Z2paQmRZeTNOU1ZIOHN3QlRmRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLZmFCeXBvYzVLc0d6ZkxqZ01NS1lyREVKV1phd2w2MzljWkltbmNUMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0k5dGlSLzQzeHBrMVlPYkszMXpVYmxCa1VXQVkvdUtSSzNta05haVZsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUMzRnJRSlZrTVhrbm9BMExlY25SNUd6VGJ0SEhMVnBIYzNJcGxDR2l5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpkVkRFWWl3Snd3OW1zNkZWODRsOE9TZFRNd1J4bWhvbGYrbVI5d3FMeVc0Zm14K3dvRUlXK1gyeXllM0hHZDlFeGh2NW1McU1WK0dEL0t6Wjk2QmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJHQkJpUmJ6aTkrdExZUjdiWG9GVVFYVzUvaEh4RDZtNWcvMWNsM1Z4SHBnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE0MzI0MDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcyNDBEN0U5Q0VDMEFFNUEwOUE2QzYyMzlCRjgyNzk3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTQ0MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE0MzI0MDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY0NDA1NEY3MTA0NzA0NEREQkQ3QUU5ODFBRjM5QzRDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTQ0MzV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE0MzI0MDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI4MDczMjAyODZEOTREMDU2QTEzMjMzN0QzMkYwQjZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTQ0Mzd9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE0MzI0MDM4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVCMEQyNUQxQjhDMDFFQTFGMjIxQTdCRDU3MjhDMEQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTQ0Mzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkYwWDlrdUdVUjdxQi1Kb0VTajRmanciLCJwaG9uZUlkIjoiNTFmMDFkNmQtYjQwYS00MzA2LWE5NWQtZmJiMTNhNDc0NzFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkI0SHI2ZWpIM3BNK3A4RWNYc2xMZ2x1Q0dQMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOV1RzekFVL0JBRDBpNi93TFZzZGF2cm1OcTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMjNUWkQzWEciLCJtZSI6eyJpZCI6Ijk0NzE0MzI0MDM4OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2F2aW5kdSBBbnVoYXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ091Snlla0NFTlh5enJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZiMVBhRnNuVmgwUGVMdmdDb3ArcklSTG1wSk02SW9xTXAyMmNla0c2Z3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkhUUjVLYXBmSVJKQmpEazk4cCtnNmVBTEdYNXZYeE5kZTh5NWREKzdxNExpRnovS0hMSnlqSnBYS2phcXVQSTAzUExYSlZ3cmFJUzRsZ0wxME9XUURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaRmRhWFNXTHNxZ3lWbkhOTFZUU0NSSWhDdGpJblk0OE9aYkswOHVhYllJK0NRVCtRQWxSa2hhbmlrQlF1eXJwSzIyYnErMyszRGpaMkdPR2VKc1Fqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE0MzI0MDM4OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDI5VDJoYkoxWWREM2k3NEFxS2ZxeUVTNXFTVE9pS0tqS2R0bkhwQnVvTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzA1NDQzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCSlAifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
