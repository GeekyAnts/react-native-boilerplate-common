const execSync = require("child_process").execSync;
var repos = require("./repos");

let index;
for (index = 0; index < repos.length; ++index) {
	execSync(
		"cd ../ && cd " +
			repos[index].slug +
			" && git add . && git commit -m '" +
			process.argv[2] +
			"'" +
			" && git push origin master",
		(err, stdout, stderr) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log(stdout);
		}
	);
}
