var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./repos");
const execSync = require("child_process").execSync;

let index;
for (index = 0; index < repos.length; ++index) {
  execSync(
    "rm -rf node_modules/",
    {
      cwd: path.join(path.dirname(process.cwd()), repos[index].slug)
    },
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );
  execSync(
    "rm -rf yarn.lock",
    {
      cwd: path.join(path.dirname(process.cwd()), repos[index].slug)
    },
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );
  execSync(
    "rm -rf android/",
    {
      cwd: path.join(path.dirname(process.cwd()), repos[index].slug)
    },
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );
  execSync(
    "rm -rf ios/",
    {
      cwd: path.join(path.dirname(process.cwd()), repos[index].slug)
    },
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
    }
  );
}
