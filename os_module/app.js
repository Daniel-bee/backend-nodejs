const os = require("os");
const sysInfo = {
  current_user: os.userInfo(),
  os_type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  hostname: os.hostname(),
  platform: os.platform(),
};
console.log(sysInfo);
