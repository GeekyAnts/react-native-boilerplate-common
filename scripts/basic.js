var path = require("path");

const exec = require("child_process").exec;

var cmd = process.argv[2];
console.log(cmd, "cj");
// exec(
// 	"cd ../ && git clone -b Flow-Basic git@github.com:GeekyAnts/react-native-boilerplate-common.git Flow-Basic && cd react-native-boilerplate-common"
// );
// exec("cd ../");
exec("git clone -b Flow-Basic git@github.com:GeekyAnts/react-native-boilerplate-common.git Flow-Basic");
// exec("wml add ./common ../Flow-Basic && wml start");
process.exit(0);

// wml add ./common ../Flow-Basic && wml start
