var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./all/repos");

let index;
for (index = 0; index < repos.length; ++index) {
	spawnSync("yarn", ["jest"], {
		cwd: path.join(path.dirname(process.cwd()), repos[index].slug),
		stdio: "inherit",
	});
}
