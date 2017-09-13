const exec = require("child_process").exec;
var repos = require("./repos");

let index;
for (index = 0; index < repos.length; ++index) {
	exec("cd ../ && git clone " + repos[index].gitUrl, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});
}
