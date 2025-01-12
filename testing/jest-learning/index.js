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
module.exports = { sum, fetchData, myForEach };
