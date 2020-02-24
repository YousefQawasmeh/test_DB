const { readFileSync } = require("fs");
const { join } = require("path");

const connection = require("./connection");

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  connection.query(sql, (err, res) => {
    if (err) throw new Error("err bd build.js");
    else console.log("build sucsess");
  });
};

module.exports = { dbBuild };
