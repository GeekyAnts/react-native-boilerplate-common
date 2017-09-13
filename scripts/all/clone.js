const exec = require("child_process").exec;

exec("cd ../ && git clone https://github.com/GeekyAnts/react-native-boilerplate-basic-flow", (err, stdout, stderr) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(stdout);
});
exec("cd ../ && git clone https://github.com/GeekyAnts/react-native-boilerplate-redux-flow", (err, stdout, stderr) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(stdout);
});
// process.exit(0);
