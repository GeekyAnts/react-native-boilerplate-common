var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./repos");

let index;
for (index = 0; index < repos.length; ++index) {
	spawnSync("git", ["add", "."], {
		cwd: path.join(path.dirname(process.cwd()), repos[index].slug),
		stdio: "inherit",
	});
	spawnSync("git", ["commit", "-m", process.argv[2]], {
		cwd: path.join(path.dirname(process.cwd()), repos[index].slug),
		stdio: "inherit",
	});
}
