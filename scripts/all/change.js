var fs = require("fs");
var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./all/repos");

let index;
for (index = 0; index < repos.length; ++index) {
  (function(index) {
    try {
      process.chdir(`../${repos[index].slug}`);
      var datas = fs.readFileSync(process.cwd() + `/.bablerc`, "utf8");
      var result = datas;
      versions.forEach(function(version) {
        result = result.replace(version.old, version.new);
      });
      fs.writeFileSync(process.cwd() + `/package.json`, result, "utf8");
    } catch (err) {
      console.error(`chdir: ${err}`);
    }
  }.call(this, index));
}
