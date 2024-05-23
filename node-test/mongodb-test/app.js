const { MongoClient } = require("mongodb");

const uri = `mongodb://localhost:27017/`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("inventory");
  const items = database.collection("items");

  const itemList = [
    {
      item: "journal",
      qty: 25,
      tags: ["black", "red"],
      size: { h: 14, w: 21, uom: "cm" },
    },
    {
      item: "mat",
      qty: 85,
      tags: ["gray"],
      size: { h: 27.9, w: 35.5, uom: "cm" },
    },
    {
      item: "mousepad",
      qty: 25,
      tags: ["gel", "blue"],
      size: { h: 19, w: 22.85, uom: "cm" },
    },
  ];
  const itemsData = await items.insertMany(itemList);
  // const itemsData = await items.insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" },
  // });

  console.log("result", itemsData);

  // const database = client.db("firstDB");
  // const users = database.collection("users");

  //추가(한개)
  // const userData = await users.insertOne({ name: "ssu", age: 23 });
  // console.log("result", userData);

  //추가 (여러개)
  // const userList = [
  //   { name: "ssu", age: 23 },
  //   { name: "min", age: 25 },
  // ];
  // const userListResult = await users.insertMany(userList);
  // console.log("result", userListResult);

  //찾기
  // const findUser = await users.findOne({ age: { $gt: 20 } });
  // console.log("result", findUser);

  //업데이트
  // const updateUser = await users.updateOne(
  //   { name: "ssu" },
  //   { $set: { age: 19 } }
  // );
  // console.log("aaa", updateUser);

  //삭제
  // const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  // console.log("dd", deleteUsers);

  // const userData = await users
  //   .find({ name: "ssu" })
  //   //0은 빼는거 1은 더하는거
  //   .project({ name: 1, _id: 0 })
  //   .toArray();
  // console.log("userdata", userData);
}
run();
