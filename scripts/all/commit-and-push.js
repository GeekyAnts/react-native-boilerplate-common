const exec = require("child_process").exec;
var repos = require("./repos");

let index;
for (index = 0; index < repos.length; ++index) {
	exec(
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
