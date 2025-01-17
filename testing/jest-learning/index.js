const axios = require("axios");
const { getChangedFilesForRoots } = require("jest-changed-files");
const { diff } = require("jest-diff");
const a = { a: { b: { c: 5 } } };
const b = { a: { b: { c: 6 } } };

const request = () => {
  console.log("actual insidee");
  return new Promise((resolve, _) => {
    resolve("actual resolve");
  });
};

const getUserName = (userID) => {
  console.log("caalling ?");
  return request(`/users/${userID}`).then((user) => "abc");
};

// const result = diff(a, b);

// print diff
// console.log("diff", result);

// getChangedFilesForRoots(["./"], {
//   lastCommit: true,
// }).then((result) => console.log("result.changedFiles-==", result.changedFiles));

const foo = "foo";
const bar = () => "bar";

class Users {
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}

const myForEach = (items, callback) => {
  for (const item of items) {
    callback(item);
  }
};

function sum(a, b) {
  return a + b;
}
const fetchData = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(null, "peanut butter");
      // reject("peanut butter error");
    }, 0);
  });
};
module.exports = {
  sum,
  fetchData,
  myForEach,
  Users,
  foo,
  bar,
  getUserName,
  request,
};
//test
