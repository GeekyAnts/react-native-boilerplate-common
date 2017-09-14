var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./repos");

let index;
for (index = 0; index < repos.length; ++index) {
	spawnSync("git", ["clone", repos[index].sshUrl], {
		cwd: path.dirname(process.cwd()),
		stdio: "inherit",
	});
}
