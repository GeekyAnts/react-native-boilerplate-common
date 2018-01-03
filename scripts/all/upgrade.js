var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./repos");

let index;
for (index = 0; index < repos.length; ++index) {
  spawnSync("react-native", ["upgrade"], {
    cwd: path.join(path.dirname(process.cwd()), repos[index].slug),
    stdio: "inherit"
  });
  spawnSync("react-native", ["link"], {
    cwd: path.join(path.dirname(process.cwd()), repos[index].slug),
    stdio: "inherit"
  });
  spawnSync("react-native", ["link", "react-native-vector-icons"], {
    cwd: path.join(path.dirname(process.cwd()), repos[index].slug),
    stdio: "inherit"
  });
}
