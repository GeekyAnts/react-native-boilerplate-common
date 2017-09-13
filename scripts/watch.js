const execSync = require("child_process").execSync;
const exec = require("child_process").exec;
var repos = require("./all/repos");

let index;
for (index = 0; index < repos.length; ++index) {
	execSync("wml add ./common ../" + repos[index].slug, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});

	if (repos[index].type === "Flow") {
		execSync("wml add ./Flow ../" + repos[index].slug, (err, stdout, stderr) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(stdout);
		});
	} else {
		execSync("wml add ./TypeScript ../" + repos[index].slug, (err, stdout, stderr) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(stdout);
		});
	}
}

exec("wml start", (err, stdout, stderr) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(stdout);
});
