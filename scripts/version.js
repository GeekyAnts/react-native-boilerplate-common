// var pjson = require("../versions.json");
var versions = require("../versions.json");
var fs = require("fs");
// fs.readFile("versions.json", "utf8", function(err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace(pjson.expo, "24.0.0");

//   fs.writeFile("versions.json", result, "utf8", function(err) {
//     if (err) return console.log(err);
//   });
// });

var path = require("path");
const spawnSync = require("child_process").spawnSync;
var repos = require("./all/repos");

let index;
for (index = 0; index < repos.length; ++index) {
  (function(index) {
    try {
      process.chdir(`../${repos[index].slug}`);
      // fs.readFile(process.cwd() + `/package.json`, "utf8", function(err, data) {
      //   if (err) {
      //     return console.log(err);
      //   }
      var datas = fs.readFileSync(process.cwd() + `/package.json`, "utf8");
      var result = datas;
      versions.forEach(function(version) {
        result = result.replace(version.old, version.new);
      });
      // console.log(result, "result");
      fs.writeFileSync(process.cwd() + `/package.json`, result, "utf8");
      // });
    } catch (err) {
      console.error(`chdir: ${err}`);
    }
  }.call(this, index));
}
