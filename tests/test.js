const tape = require("tape");

const { dbBuild } = require("../server/database/config/build");
const { getData } = require("../server/database/queries/getData");
const { postData } = require("../server/database/queries/postData");

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("get data method", t => {
  const ex = [
    { id: 1, name: "Ali", location: "Gaza" },
    { id: 2, name: "Mo", location: "Canada" },
    { id: 3, name: "John", location: "USA" }
  ];
  dbBuild();
  const rx = getData().then(res => {
    t.deepEqual(ex, res.rows, "ex should be equal res");
    t.end();
  });
});

tape.onFinish(() => process.exit(0));
