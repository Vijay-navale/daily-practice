// "use strict";

// {

//   ID: 31,

//   ConditionID: "Condition8520241124",

//   ConditionName: "Aniket",

//   ConditionValue: "{\"condition\":\"and\",\"rules\":[{\"field\":\"Page Name\",\"operator\":\"==\",\"value\":\"home.html\"},{\"field\":\"Duration of Visit\",\"operator\":\">=\",\"value\":3}]}",

//   Sequence: 0,

//   Actions: "SendPopup",

//   SubActions: "ABSLI Popup",

//   IsDeleted: false,

//   ProcessBy: "",

//   BussinessHours: null,

//   Groups: null,

// }

// {
//   IPADDRESS: "182.75.218.110",
//   PAGESESSION: "tDUVSkpQnqMD6XpbRTv0",
//   MOBILENO: "",
//   LATTITUDE: "",
//   FILLER7: "",
//   SESSIONSTATUS: "ACTIVE",
//   LOCATION: "",
//   FILLER_5: "",
//   CITY: "",
//   CLINTINFO: "1",
//   DISTRICT: "",
//   FILLER_4: "",
//   CLIENTURL: "https://cx5.unfyd.com/site-demo/webchat/index.html?TenantId=1&ChannelSource=MyDemo",
//   LONGITUDE: "",
//   STATE: "",
//   STARTDATETIME: "2024-05-22 07:08:24.336",
//   FILLER6: "",
//   FILLER_3: "",
//   BROWSERID: "tDUVSkpQnqMD6XpbRTv0",
//   WEBENGAGEMENTCLIENTINFOID: "8c611913-4000-416f-bcbf-4f3f1e47de24",
//   UNIQUEID: "tDUVSkpQnqMD6XpbRTv0",
//   ISINTERACTIONPUSHED: "1",
//   CREATEDDATE: "2024-05-22 07:08:24.336",
//   BROWSERNAME: "Chrome",
//   BROWSERUID: "tDUVSkpQnqMD6XpbRTv0",
//   FILLER_1: "",
//   PAGETITLE: "Digital Transformation and Omnichannel Customer Experience CRM | UNFYDĀ®COMPASS.",
//   BROWSERVERSION: "124.0.0.0",
//   PINCODE: "",
//   SESSIONID: "tDUVSkpQnqMD6XpbRTv0",
//   ENDDATETIME: "2024-05-22 07:08:24.336",
//   CREATEDBY: "",
//   PUBLICIP: "114.143.247.122",
//   FILLER_2: "",
//   PAGENAME: "index.html",}

// validator for rules data and customer data

// const validatorObj = {

//     ">=": function (x, y) { return x >= y; },

//     "<=": function (x, y) { return x <= y; },

//     ">": function (x, y) { return x > y; },

//     "<": function (x, y) { return x < y; },

//     "==": function (x, y) { return x == y; },

//     and: function (x, y) { return x && y; },

//     or: function (x, y) { return x || y; },

//   };

//   const getFinalResult = ({ conditionRulesObj, STARTDATETIME, PAGENAME, COUNT_OF_VISIT, VISITOR_TYPE,CAMPAIGN}) => {

//     return new Promise(async(resolve, reject) => {

//       try {

//         if (!conditionRulesObj["rules"]?.length) {

//           resolve(false);

//         }

//         let booleanResult;

//         for (let rule of conditionRulesObj["rules"]) {

//           let result;

//           const { field, operator, value, condition } = rule || {};

//           if (condition) {

//             result = getFinalResult({ conditionRulesObj: rule, STARTDATETIME, PAGENAME, COUNT_OF_VISIT, VISITOR_TYPE,CAMPAIGN});

//           }

//           if (field === "Duration of Visit") {

//             function  (timeObj) {

//               const hoursInSeconds = timeObj.hour * 3600;

//               const minutesInSeconds = timeObj.minute * 60;

//               const totalSeconds = hoursInSeconds + minutesInSeconds + timeObj.second;

//               return totalSeconds;

//           }

//             let currenttime = await TimingRequest("1");

//             Log('info',`Duration of Visit TimingRequest() result :${currenttime}, variable result :${result}`)

//             if(currenttime){

//             let timeZone = currenttime

//             const deltaMs = new Date(timeZone) - new Date(STARTDATETIME).getTime();

//             const totalSeconds = parseInt(Math.floor(deltaMs / 1000), 10);

//             const totalMinutes = parseInt(Math.floor(totalSeconds / 60), 10);

//             // const valueInMinutes = parseFloat(value);

//             // const valueInSeconds = parseFloat(value) * 60;

//             const totalValueInSeconds = timeToSeconds(value);

//             Log('info',`validatorObj Request Data Sign:${operator},TotatlMin:${totalMinutes},Value:${value}`)

//             result = validatorObj[operator](totalSeconds, totalValueInSeconds);

//             Log('info',`validatorObj Request Data result :${result}`)

//             }

//             else{

//               result = false;

//             }

//           }

//           if (field === 'Page Name') {

//             result = validatorObj[operator](PAGENAME, value);

//           }

//           if (field === 'Count of Visit') {

//             result = validatorObj[operator](COUNT_OF_VISIT, value);

//           }

//           if (field === 'Visiter Type') {

//             result = validatorObj[operator](VISITOR_TYPE, value);

//           }

//           if (field === 'Campaign') {

//             result = validatorObj[operator](CAMPAIGN, value);

//           }

//           if (field === 'Visiter Score') {

//           }

//           if (typeof result !== "boolean") continue;

//           if (typeof booleanResult !== "boolean") {

//             booleanResult = result;

//             continue;

//           }

//           booleanResult = validatorObj[conditionRulesObj["condition"]](booleanResult, result);

//         }

//         resolve(booleanResult)

//       }

//       catch (error) {

//         Log('error', `getFinalResult() Error Occured message:${JSON.stringify(error?.stack || error?.message)}`);

//         resolve(false)

//       }

//     })

//   };

(function () {
  var a = (b = 5);
})();

console.log("b", b);

var isValid = function (s) {
  // const obj = {
  //   "(": ")",
  //   "{": "}",
  //   "[": "]",
  // };
  // if (s.length < 2) return false;
  // if (s.length % 2 !== 0) return false;
  // for (let i = 0; i < s.length - 1; i = i + 2) {
  //   if (obj[s[i]] !== s[i + 1]) {
  //     return false;
  //   }
  // }
  // return true;
};
// console.log(isValid("{[()]}"));
// console.log(isValid("([)]"));

function mapsAreEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    if (val !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  let freq_s1 = new Map(); // map to store frequency count of characters in s1
  let freq_s2 = new Map(); // map to store frequency count of characters in s2 for a window size equal to s1.length

  // Initialization
  for (let i = 0; i < s1.length; i++) {
    freq_s1.set(s1[i], (freq_s1.get(s1[i]) || 0) + 1);
    freq_s2.set(s2[i], (freq_s2.get(s2[i]) || 0) + 1);
  }

  // Initial comparison
  if (mapsAreEqual(freq_s1, freq_s2)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    let ch_out = s2[i - s1.length]; // character to remove
    if (freq_s2.get(ch_out) === 1) {
      freq_s2.delete(ch_out);
    } else {
      freq_s2.set(ch_out, freq_s2.get(ch_out) - 1);
    }

    let ch_in = s2[i]; // character to add
    freq_s2.set(ch_in, (freq_s2.get(ch_in) || 0) + 1);

    // Check final condition
    if (mapsAreEqual(freq_s1, freq_s2)) {
      return true;
    }
  }

  return false;
};
// console.log(checkInclusion("abc", "baxyzde"));
// console.log(checkInclusion("adc", "dcda"));
// console.log(checkInclusion("abc", "eidbaocbdaoo"));

var characterReplacement = function (s, k) {
  // if replacementCount === 0 handle algorithm littile differently

  // let current character = string[0]
  // start loop from index 1
  // if replacementCount !== 0, capture at which index we are changing character

  // if (s.length === 1) {
  //   return 1;
  // }
  // if (s.length === 2) {
  //   if (s[0] === s[1]) return 2;
  //   return 1;
  // }

  // let maxSize = 1;
  // let replacementCount = k;
  // let preIndexAndVal = null;
  // let m = new Map();
  // let maxCountsList = [];
  // for (let i = 1; i < s.length; i++) {
  //   if (s[i - 1] === s[i] || preIndexAndVal === s[i]) {
  //     preIndexAndVal = null;
  //     maxSize++;
  //     continue;
  //   }
  //   if (replacementCount !== 0) {
  //     replacementCount--;
  //     m.set(i, s[i]);
  //     preIndexAndVal = s[i - 1];
  //     maxSize++;
  //     continue;
  //   }
  //   replacementCount = k;
  //   maxCountsList.push(maxSize);
  //   maxSize = 1;
  //   const [index] = m.entries().next().value;
  //   i = index;
  //   console.log("i", i);
  //   m.clear();
  // }
  // return Math.max(...maxCountsList);

  // Time Complexity :  O(n)
  // Space Complexity : O(1)
  // Make a map of size 26...
  var map = [26];
  // Initialize largestCount, maxlen & beg pointer...
  let largestCount = 0,
    beg = 0,
    maxlen = 0;
  // Traverse all characters through the loop...
  for (let end = 0; end < s.length; end++) {
    const c = s[end];
    map[c] = (map[c] || 0) + 1;
    // Get the largest count of a single, unique character in the current window...
    largestCount = Math.max(largestCount, map[c]);
    // We are allowed to have at most k replacements in the window...
    // So, if max character frequency + distance between beg and end is greater than k...
    // this means we have considered changing more than k charactres. So time to shrink window...
    // Then there are more characters in the window than we can replace, and we need to shrink the window...
    if (end - beg + 1 - largestCount > k) {
      // The main equation is: end - beg + 1 - largestCount...
      map[s[beg]] -= 1;
      beg += 1;
    }
    // Get the maximum length of repeating character...
    maxlen = Math.max(maxlen, end - beg + 1); // end - beg + 1 = size of the current window...
    console.log("end", end);
    console.log("maxlen", maxlen);
    console.log("largestCount", largestCount);
  }
  // console.log("maxlen", maxlen);
  return maxlen; // Return the maximum length of repeating character...
};
// characterReplacement("AABABBA", 2);

//maxlen - 1
//maxlen - 2
//maxlen - 3

const numbers = [12, 12, 23, 4, 6, 6, 10, -35, 28];

const merge = (left, right) => {
  let sortedList = [];
  let min = 0;
  while (min < left.length) {
    if (!right.length) break;
    if (left[min] < right[0]) {
      sortedList.push(left[min]);
      min++;
    } else {
      sortedList.push(right.shift());
    }
  }
  if (!!right?.length) {
    sortedList = [...sortedList, ...right];
  } else {
    sortedList = [...sortedList, ...left.slice(min)];
  }
  return sortedList;
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const splitAtIndex = Math.ceil(array.length / 2);
  const left = array.slice(0, splitAtIndex);
  const right = array.slice(splitAtIndex);
  // Split Array in into right and left
  return merge(mergeSort(left), mergeSort(right));
};

const answer = mergeSort(numbers);
// console.log(answer);

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let min = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] < array[j]) {
        min = j;
      } else {
        break;
      }
    }
    if (min !== i) {
      const [deletedNum] = array.splice(i, 1);
      array.splice(min, 0, deletedNum);
    }
  }
  console.log("array", array);
};

// insertionSort(numbers);

// const numbers = [44, 6, 2, 99]; //1st iteration
// const numbers = [6, 2, 44, 99]; //2nd iteration
// const numbers = [2, 6, 44, 99]; //3rd iteration
// const numbers = [2, 6, 44, 99]; //4th iteration

const bubbleSort = (array) => {
  //Code here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {}
  }
};

bubbleSort(numbers);
// console.log(numbers);

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("yoyo master"));

let recurseStr = "";
function reverseStringRecursive(str) {
  if (str.length === 1) {
    return (recurseStr += str[0]);
  }
  recurseStr += str[str.length - 1];
  return reverseStringRecursive(str.substr(0, str.length - 1));
}
// console.log(reverseStringRecursive("yoyo"));

// 0, 1, 1, 2, 3, 5, 8

let fibonaccoSeriesHolder = [0, 1];
let indexHolder = null;
let index = 2;

const fibonacciRecursive = (n) => {
  // if (n < 0) return 0;
  // let firstValue = 0
  // let secondaValue = 1
  // if (n < 0) {
  //   return 0;
  // }
  if (n === 0) return fibonaccoSeriesHolder[0];
  if (n === 1) return fibonaccoSeriesHolder[1];
  if (!Number.isFinite(indexHolder)) {
    indexHolder = n;
  }
  let prevTwoIndexValSum =
    fibonaccoSeriesHolder[index - 2] + fibonaccoSeriesHolder[index - 1];
  if (index === indexHolder) {
    return prevTwoIndexValSum;
  }
  fibonaccoSeriesHolder.push(prevTwoIndexValSum);
  index++;
  return fibonacciRecursive();
};
// index 0 + index 1 = index 2
// index 1 + index 2 = index 3
// index 2 + index 3 = index 4

// console.log(fibonacciRecursive(8));

const findFactorial = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * findFactorial(number - 1);
};

// console.log(findFactorial(4));

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }
  addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      // console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MyBinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if (this.root === null) {
      return `root is not present`;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (!currentNode.left) {
          return `Value not present at left`;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return `Value not present at right`;
        }
        currentNode = currentNode.right;
      }
    }
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new MyBinarySearchTree();
// console.log(tree.lookup(5));
tree.insert(9);
tree.insert(4);
tree.insert(20);
// tree.insert(6);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log("tree", tree);
// tree.remove(170);
// JSON.stringify(traverse(tree.root));
// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
//     9
//  4     20
//1  6  15  170

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);

    return this;
  }

  dequeue() {
    const length = this.last.length;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop();

    return this;
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }

    return this.last[0];
  }
}

const myQueue = new CrazyQueue();
// console.log(myQueue.peek());
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// console.log("========");
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log("========");

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    let i = this.length - 1;
    let head, tail;
    while (i >= 0) {
      const nodeAtGivenIndex = this.traverseToIndex(i);
      const leadingNode = i !== 0 ? this.traverseToIndex(i - 1) : null;
      nodeAtGivenIndex.next = i === 0 ? null : leadingNode;
      if (i === this.length - 1) {
        head = nodeAtGivenIndex;
      }
      if (i === 0) {
        tail = nodeAtGivenIndex;
      }
      i--;
    }
    this.head = head;
    this.tail = tail;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(20);
myLinkedList.reverse();
// console.log(myLinkedList.printList());
// console.log(myLinkedList);

const data = {};
Object.defineProperty(data, "prop", {
  get: function () {
    console.log("Getter called");
  },
  set: function (value) {
    console.log("Setter called");
  },
});
// data.prop = "some value"; // triggers setter function
// const someValue = data.prop; // triggers getter function

function computeAmount() {
  let sum = 0;
  return {
    lacs: function (amt) {
      sum += amt * 100000;
      return this;
    },
    crore: function (amt) {
      sum += amt * 10000000;
      return this;
    },
    thousand: function (amt) {
      sum += amt * 1000;
      return this;
    },
    value: function () {
      console.log(sum);
      return sum;
    },
  };
}
// computeAmount()
//   .lacs(15)
//   .crore(5)
//   .crore(2)
//   .lacs(20)
//   .thousand(45)
//   .crore(7)
//   .value();

// let controller = new AbortController();

// setTimeout(() => {
//   controller.abort("some timeout error");
// }, 500);
// fetch("https://api.indoline.in/infrastructures", {
//   signal: controller.signal,
// })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err->", err);
//   });

// (async function () {
//   // Step 1: start the fetch and obtain a reader
//   let response = await fetch("https://api.indoline.in/infrastructures");

//   // let data = await response.json();

//   console.log(response);
//   const reader = response.body.getReader();

//   // Step 2: get total length
//   const contentLength = +response.headers.get("Content-Length");

//   // Step 3: read the data
//   let receivedLength = 0; // received that many bytes at the moment
//   let chunks = []; // array of received binary chunks (comprises the body)
//   while (true) {
//     const { done, value } = await reader.read();

//     if (done) {
//       break;
//     }
//     chunks.push(value);
//     receivedLength += value.length;

//     console.log("value", value);
//     console.log(`Received ${receivedLength} of ${contentLength}`);
//   }
//   console.log("chunks", chunks);

//   // Step 4: concatenate chunks into single Uint8Array
//   let chunksAll = new Uint8Array(receivedLength); // (4.1)
//   let position = 0;
//   for (let chunk of chunks) {
//     chunksAll.set(chunk, position); // (4.2)
//     position += chunk.length;
//   }
//   console.log("chunksAll", chunksAll);
//   // Step 5: decode into a string
//   let result = new TextDecoder("utf-8").decode(chunksAll);

//   // We're done!
//   let commits = JSON.parse(result);
//   // console.log(commits[0].author.login);
// })();

let webFilterFinalResult = [];
const someFunc = async (webFilterData, redisFilterData) => {
  let customerdata = "";

  for (let webFilterObj of webFilterData) {
    const mathItUp = {
      ">=": function (x, y) {
        return x >= y;
      },
      "<=": function (x, y) {
        return x <= y;
      },
      ">": function (x, y) {
        return x > y;
      },
      "<": function (x, y) {
        return x < y;
      },
      "==": function (x, y) {
        return x == y;
      },
      and: function (x, y) {
        return x && y;
      },
      or: function (x, y) {
        return x || y;
      },
    };

    const getFinalResult = ({ conditionRulesObj, ENDDATETIME, PAGENAME }) => {
      console.log({ conditionRulesObj, ENDDATETIME, PAGENAME });
      return new Promise((resolve, reject) => {
        console.log('conditionRulesObj["rules"]', conditionRulesObj["rules"]);
        try {
          if (!conditionRulesObj["rules"]?.length) {
            console.log("wesdfcwefd");
            resolve(false);
          }
          let booleanResult;
          let parseJsonData = JSON.parse(conditionRulesObj);
          console.log("parseJsonData", parseJsonData);
          for (let rule of parseJsonData["rules"]) {
            console.log("rule", rule);
            let result;
            const { field, operator, value, condition } = rule || {};
            if (condition) {
              result = getFinalResult({
                conditionRulesObj: rule,
                ENDDATETIME,
                PAGENAME,
              });
            }

            if (field === "Duration of Visit") {
              const deltaMs =
                new Date().getTime() - new Date(ENDDATETIME).getTime();
              const totalSeconds = parseInt(Math.floor(deltaMs / 1000), 10);
              const totalMinutes = parseInt(Math.floor(totalSeconds / 60), 10);
              result = mathItUp[operator](totalMinutes, value);
            }
            if (field === "Website Page") {
              result = mathItUp[operator]("index.html", PAGENAME);
            }
            if (field === "Visiter Type") {
            }
            if (field === "Visiter Score") {
            }
            if (field === "Count of Visit") {
            }
            if (field === "Compaign Page") {
            }
            console.log("resultt", result);
            if (typeof result !== "boolean") continue;

            if (typeof booleanResult !== "boolean") {
              booleanResult = result;
              continue;
            }
            booleanResult = mathItUp[conditionRulesObj["condition"]](
              booleanResult,
              result
            );
          }
          console.log("booleanResult", booleanResult);

          resolve(booleanResult);
        } catch (error) {
          resolve(false);
        }
      });
    };

    const customerValidationRule = (customerData, ruleData) => {
      return new Promise(async (resolve, reject) => {
        try {
          let data = await getFinalResult({
            conditionRulesObj: JSON.parse(ruleData.ConditionValue),
            ENDDATETIME: customerData.ENDDATETIME,
            PAGENAME: customerData.PAGENAME,
          })
            .then((result) => {
              console.log("result", result);
              if (result) {
                return result;
              } else {
                return false;
              }
            })
            .catch((error) => {
              return false;
            });
          resolve(data);
        } catch (error) {
          resolve(false);
        }
      });
    };

    for (let redisObj of redisFilterData) {
      if (redisObj && redisObj?.ruleKey) {
        let customerConditionArray = redisObj?.ruleKey;
        if (!Array.isArray(customerConditionArray)) {
          customerConditionArray = [customerConditionArray];
        }
        let filtercustomerConditionArray = customerConditionArray.filter(
          (b) => b == webFilterObj.ConditionName
        );
        if (
          filtercustomerConditionArray &&
          filtercustomerConditionArray.length > 0
        ) {
          continue;
        } else {
          customerdata = await customerValidationRule(redisObj, webFilterObj);
        }
      } else {
        customerdata = await customerValidationRule(redisObj, webFilterObj);
      }

      let customerArray = redisObj.ruleKey;
      console.log("customerdata", customerdata);
      if (webFilterObj.ConditionName == customerArray) {
        continue;
      }

      if (customerdata) {
        console.log("insideeeee");
        let conditionArrayname = [];
        if (redisObj && redisObj?.ruleKey && redisObj?.ruleKey) {
          let ruledata = redisObj?.ruleKey;
          ruledata.push(webFilterObj.ConditionName);
          conditionArrayname = ruledata;
        } else {
          conditionArrayname.push(webFilterObj.ConditionName);
        }

        redisObj.ruleKey = conditionArrayname;

        // let redisReturn = await insertRuleKeyInCustomerData(redisObj)
        //   .then((result) => {
        //     return result;
        //   })
        //   .catch((error) => {
        //     return false;
        //   });

        // redisObj.MASTERRULE = webFilterObj;

        // let validateData = await axiosCalles(
        //   redisObj,
        //   "POST",
        //   "http://localhost:8010/api/v1/retrieveDataFromRuleEngine"
        // );
        // console.log("Validate Data-------------------", validateData);
      }
    }
  }
};

// someFunc(
//   [
//     // {
//     //   ID: 31,
//     //   ConditionID: "Condition8520241124",
//     //   ConditionName: "Aniket",
//     //   ConditionValue:
//     //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"Existing"},{"field":"Duration of Visit","operator":">=","value":3}]}',
//     //   Sequence: 0,
//     //   Actions: "SendPopup",
//     //   SubActions: "ABSLI Popup",
//     //   IsDeleted: false,
//     //   ProcessBy: "",
//     //   BussinessHours: null,
//     //   Groups: null,
//     // },
//     // {
//     //   ID: 32,
//     //   ConditionID: "Condition8520241125",
//     //   ConditionName: "Aniket One",
//     //   ConditionValue:
//     //     '{"condition":"and","rules":[{"field":"Duration of Visit","operator":"==","value":4}]}',
//     //   Sequence: 0,
//     //   Actions: "SendPopup",
//     //   SubActions: "test22",
//     //   IsDeleted: false,
//     //   ProcessBy: "",
//     //   BussinessHours: null,
//     //   Groups: null,
//     // },
//     {
//       ID: 33,
//       ConditionID: "Condition8520241250",
//       ConditionName: "AadeshRule",
//       ConditionValue:
//         '{"condition":"or","rules":[{"field":"Visiter Type","operator":"==","value":"Existing"},{"field":"Duration of Visit","operator":">","value":32},{"field":"Duration of Visit","operator":"==","value":12}]}',
//       Sequence: 0,
//       Actions: "SendPopup",
//       SubActions: "ABSLI Popup",
//       IsDeleted: false,
//       ProcessBy: "",
//       BussinessHours: null,
//       Groups: null,
//     },
//     // {
//     //   ID: 34,
//     //   ConditionID: "Condition8520241251",
//     //   ConditionName: "KamleshRule",
//     //   ConditionValue:
//     //     '{"condition":"and","rules":[{"field":"Duration of Visit","operator":"<=","value":2},{"field":"Visiter Type","operator":"==","value":"Existing"},{"field":"Duration of Visit","operator":">=","value":20}]}',
//     //   Sequence: 0,
//     //   Actions: "SendPopup",
//     //   SubActions: "ABSLI Popup",
//     //   IsDeleted: false,
//     //   ProcessBy: "",
//     //   BussinessHours: null,
//     //   Groups: null,
//     // },
//     // {
//     //   ID: 35,
//     //   ConditionID: "Condition8520241254",
//     //   ConditionName: "DevRule",
//     //   ConditionValue:
//     //     '{"condition":"or","rules":[{"field":"Duration of Visit","operator":"<","value":1},{"field":"Visiter Type","operator":"==","value":"New"},{"field":"Website Page","operator":"=="}]}',
//     //   Sequence: 0,
//     //   Actions: "SendPopup",
//     //   SubActions: "Popup6",
//     //   IsDeleted: false,
//     //   ProcessBy: "",
//     //   BussinessHours: null,
//     //   Groups: null,
//     // },
//     // {
//     //   ID: 36,
//     //   ConditionID: "Condition8520241255",
//     //   ConditionName: "SmartRule",
//     //   ConditionValue:
//     //     '{"condition":"or","rules":[{"field":"Duration of Visit","operator":"!=","value":1}]}',
//     //   Sequence: 0,
//     //   Actions: "SendPopup",
//     //   SubActions: "ABSLI Popup",
//     //   IsDeleted: false,
//     //   ProcessBy: "",
//     //   BussinessHours: null,
//     //   Groups: null,
//     // },
//   ],
//   [
//     {
//       FILLER_1: "",
//       CREATEDBY: "",
//       WEBENGAGEMENTCLIENTINFOID: "fcf983d4-ac93-45c3-b73a-bfc84e0ee5c7",
//       FILLER_5: "",
//       CREATEDDATE: "2024-05-10 03:06:27.723",
//       PAGESESSION: "dU_pUcAIZJlrbkswV7g2",
//       UNIQUEID: "dU_pUcAIZJlrbkswV7g2",
//       PINCODE: "400604",
//       FILLER_3: "",
//       FILLER_2: "",
//       CLINTINFO: "1",
//       CLIENTURL:
//         "https://cx5.unfyd.com/site-demo/webchat/chat.html?TenantId=1&ChannelSource=CAROUSEL_FLOW&Debug=true",
//       ENDDATETIME: "2024-05-10 03:06:27.723",
//       LOCATION:
//         "B2/104, RAJTARA CHS, Ambika Nagar No 3, Thane West, Thane, Maharashtra 400604, India",
//       SESSIONID: "dU_pUcAIZJlrbkswV7g2",
//       STARTDATETIME: "2024-05-10 03:06:27.723",
//       BROWSERUID: "dU_pUcAIZJlrbkswV7g2",
//       STATE: "Maharashtra",
//       LONGITUDE: "72.957856",
//       CITY: "Thane",
//       BROWSERVERSION: "124.0.0.0",
//       SESSIONSTATUS: "ACTIVE",
//       DISTRICT: "Konkan Division",
//       FILLER7:
//         "B2/104, RAJTARA CHS, Ambika Nagar No 3, Thane West, Thane, Maharashtra 400604, India",
//       // ruleKey: "Aniket",
//       PAGETITLE: "",
//       PAGENAME: "chat.html",
//       MOBILENO: "",
//       FILLER6: "India",
//       ISINTERACTIONPUSHED: "1",
//       BROWSERID: "dU_pUcAIZJlrbkswV7g2",
//       IPADDRESS: "114.143.247.122",
//       BROWSERNAME: "Chrome",
//       FILLER_4: "",
//       LATTITUDE: "19.1962183",
//       PUBLICIP: "182.75.218.110",
//     },
//     // {
//     //   FILLER_1: "",
//     //   CREATEDBY: "",
//     //   WEBENGAGEMENTCLIENTINFOID: "b5eb5980-a62d-42be-93f8-9173fa681259",
//     //   FILLER_5: "",
//     //   CREATEDDATE: "2024-05-10 03:06:19.731",
//     //   PAGESESSION: "f9gFBvNT9IybyaGXqzKu",
//     //   UNIQUEID: "f9gFBvNT9IybyaGXqzKu",
//     //   PINCODE: "400604",
//     //   FILLER_3: "",
//     //   FILLER_2: "",
//     //   CLINTINFO: "1",
//     //   CLIENTURL:
//     //     "https://cx5.unfyd.com/site-demo/webchat/chat.html?TenantId=1&ChannelSource=CAROUSEL_FLOW&Debug=true",
//     //   ENDDATETIME: "2024-05-10 03:06:19.731",
//     //   LOCATION:
//     //     "B2/104, RAJTARA CHS, Ambika Nagar No 3, Thane West, Thane, Maharashtra 400604, India",
//     //   SESSIONID: "f9gFBvNT9IybyaGXqzKu",
//     //   STARTDATETIME: "2024-05-10 03:06:19.731",
//     //   BROWSERUID: "f9gFBvNT9IybyaGXqzKu",
//     //   STATE: "Maharashtra",
//     //   LONGITUDE: "72.957856",
//     //   CITY: "Thane",
//     //   BROWSERVERSION: "124.0.0.0",
//     //   SESSIONSTATUS: "ACTIVE",
//     //   DISTRICT: "Konkan Division",
//     //   FILLER7:
//     //     "B2/104, RAJTARA CHS, Ambika Nagar No 3, Thane West, Thane, Maharashtra 400604, India",
//     //   // ruleKey: "Aniket",
//     //   PAGETITLE: "",
//     //   PAGENAME: "chat.html",
//     //   MOBILENO: "",
//     //   FILLER6: "India",
//     //   ISINTERACTIONPUSHED: "1",
//     //   BROWSERID: "f9gFBvNT9IybyaGXqzKu",
//     //   IPADDRESS: "182.75.218.110",
//     //   BROWSERNAME: "Chrome",
//     //   FILLER_4: "",
//     //   LATTITUDE: "19.1962183",
//     //   PUBLICIP: "114.143.247.122",
//     // },
//     // {
//     //   FILLER_1: "",
//     //   CREATEDBY: "",
//     //   WEBENGAGEMENTCLIENTINFOID: "e0ca7bb9-7d29-4d1a-837a-8339b3166d28",
//     //   FILLER_5: "",
//     //   CREATEDDATE: "2024-05-10 03:06:24.737",
//     //   PAGESESSION: "tDUVSkpQnqMD6XpbRTv0",
//     //   UNIQUEID: "tDUVSkpQnqMD6XpbRTv0",
//     //   PINCODE: "400070",
//     //   FILLER_3: "",
//     //   FILLER_2: "",
//     //   CLINTINFO: "1",
//     //   CLIENTURL:
//     //     "https://cx5.unfyd.com/site-demo/webchat/index.html?TenantId=1&ChannelSource=MyDemo",
//     //   ENDDATETIME: "2024-05-10 03:06:24.737",
//     //   LOCATION:
//     //     "Alex Cottage, Gurunath Warda Marg, Nav Pada, Kurla, Mumbai, Maharashtra 400070, India",
//     //   SESSIONID: "tDUVSkpQnqMD6XpbRTv0",
//     //   STARTDATETIME: "2024-05-10 03:06:24.737",
//     //   BROWSERUID: "tDUVSkpQnqMD6XpbRTv0",
//     //   STATE: "Maharashtra",
//     //   LONGITUDE: "72.8851",
//     //   CITY: "Mumbai",
//     //   BROWSERVERSION: "124.0.0.0",
//     //   SESSIONSTATUS: "ACTIVE",
//     //   DISTRICT: "Konkan Division",
//     //   FILLER7:
//     //     "Alex Cottage, Gurunath Warda Marg, Nav Pada, Kurla, Mumbai, Maharashtra 400070, India",
//     //   // ruleKey: "Aniket",
//     //   PAGETITLE:
//     //     "Digital Transformation and Omnichannel Customer Experience CRM | UNFYDĀ®COMPASS.",
//     //   PAGENAME: "index.html",
//     //   MOBILENO: "",
//     //   FILLER6: "India",
//     //   ISINTERACTIONPUSHED: "1",
//     //   BROWSERID: "tDUVSkpQnqMD6XpbRTv0",
//     //   IPADDRESS: "182.75.218.110",
//     //   BROWSERNAME: "Chrome",
//     //   FILLER_4: "",
//     //   LATTITUDE: "19.0842",
//     //   PUBLICIP: "182.75.218.110",
//     // },
//   ]
// );

// console.log("webFilterFinalResult", webFilterFinalResult);

// Upper-left, outer corner (that’s simple). - 28:83
// Bottom-right, outer corner (simple too). - 247:252
// Upper-left, inner corner (a bit harder). - 47:102
// Bottom-right, inner corner (there are several ways, choose one). - 228:233

const redisData = [
  {
    FILLER_3: "",
    FILLER7: "",
    PINCODE: "",
    PAGESESSION: "tDUVSkpQnqMD6XpbRTv0",
    STATE: "",
    LONGITUDE: "",
    SESSIONID: "tDUVSkpQnqMD6XpbRTv0",
    CLIENTURL:
      "https://cx5.unfyd.com/site-demo/webchat/index.html?TenantId=1&ChannelSource=MyDemo",
    CREATEDBY: "",
    BROWSERNAME: "Chrome",
    BROWSERVERSION: "124.0.0.0",
    UNIQUEID: "tDUVSkpQnqMD6XpbRTv0",
    ENDDATETIME: "2024-05-01 15:14:15.802",
    ISINTERACTIONPUSHED: "1",
    FILLER_4: "",
    FILLER6: "",
    MOBILENO: "",
    PUBLICIP: "114.143.247.122",
    WEBENGAGEMENTCLIENTINFOID: "dee62e1b-06c9-4aa2-b8a1-558175777528",
    LATTITUDE: "",
    PAGENAME: "index.html",
    STARTDATETIME: "2024-05-01 15:14:15.802",
    CITY: "",
    DISTRICT: "",
    BROWSERUID: "tDUVSkpQnqMD6XpbRTv0",
    LOCATION: "",
    CLINTINFO: "1",
    FILLER_1: "",
    IPADDRESS: "114.143.247.122",
    FILLER_2: "",
    PAGETITLE:
      "Digital Transformation and Omnichannel Customer Experience CRM | UNFYDĀ®COMPASS.",
    FILLER_5: "",
    SESSIONSTATUS: "ACTIVE",
    BROWSERID: "tDUVSkpQnqMD6XpbRTv0",
    CREATEDDATE: "2024-05-01 15:14:15.802",
  },
];

const webFilterData = [
  {
    ID: 12,
    ConditionID: "Condition19420241653",
    ConditionName: "Rule 1",
    ConditionValue:
      '{"condition":"and","rules":[{"field":"Count of Visit","operator":">=","value":"3"},{"condition":"or","rules":[{"field":"Page Name","operator":"==","value":"home"},{"field":"Page Name","operator":"==","value":"cart"}]}]}',
    Sequence: 0,
    Actions: "SendPopup",
    SubActions: "ABSLI Popup",
    IsDeleted: false,
    ProcessBy: "",
    BussinessHours: null,
    Groups: null,
  },
  // {
  //   ID: 13,
  //   ConditionID: "Condition19420241657",
  //   ConditionName: "Rule 1",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"New"},{"condition":"and","rules":[{"field":"Duration of Visit","operator":"==","value":5}]}]}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 14,
  //   ConditionID: "Condition23420241453",
  //   ConditionName: "",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"New"}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 15,
  //   ConditionID: "Condition23420241455",
  //   ConditionName: "AniketRule",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"New"},{"condition":"and","rules":[{"field":"Duration of Visit","operator":"<=","value":10}]}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 16,
  //   ConditionID: "Condition23420241536",
  //   ConditionName: "",
  //   ConditionValue: '{"condition":"and","rules":[]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 17,
  //   ConditionID: "Condition23420241537",
  //   ConditionName: "",
  //   ConditionValue: '{"condition":"or","rules":[]}',
  //   Sequence: 0,
  //   Actions: "InitiateWebchat",
  //   SubActions: "Testing",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 18,
  //   ConditionID: "Condition2342024177",
  //   ConditionName: "AniketS",
  //   ConditionValue: '{"condition":"or","rules":[]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 19,
  //   ConditionID: "Condition23420241712",
  //   ConditionName: "AniketS",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":">=","value":"Existing"}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 20,
  //   ConditionID: "Condition23420241750",
  //   ConditionName: "Aniket WebEngage",
  //   ConditionValue: '{"condition":"and","rules":[],"collapsed":false}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 21,
  //   ConditionID: "Condition23420241827",
  //   ConditionName: "AniketDev Rule",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Duration of Visit","operator":"==","value":21}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 22,
  //   ConditionID: "Condition2442024163",
  //   ConditionName: "MySmartRule",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Duration of Visit","operator":">","value":11},{"field":"Visiter Type","operator":"==","value":"New"},{"field":"Count of Visit","operator":"==","value":"3"}],"collapsed":false}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 23,
  //   ConditionID: "Condition24420241626",
  //   ConditionName: "MySmartRule",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Duration of Visit","operator":">","value":11},{"field":"Visiter Type","operator":"==","value":"New"},{"field":"Count of Visit","operator":"==","value":"3"}],"collapsed":false}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "ABSLI Popup",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 24,
  //   ConditionID: "Condition26420241033",
  //   ConditionName: "",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Count of Visit","operator":"<","value":"4"},{"field":"Visiter Type","operator":"==","value":"New"},{"field":"Duration of Visit","operator":">=","value":32}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "Popup7",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 25,
  //   ConditionID: "Condition26420241254",
  //   ConditionName: "Rule1",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Duration of Visit","operator":">","value":23}]}',
  //   Sequence: 0,
  //   Actions: "",
  //   SubActions: "",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 26,
  //   ConditionID: "Condition26420241254",
  //   ConditionName: "Rule2",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"New"}]}',
  //   Sequence: 0,
  //   Actions: "",
  //   SubActions: "",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 27,
  //   ConditionID: "Condition26420241254",
  //   ConditionName: "Rule3",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"Existing"}]}',
  //   Sequence: 0,
  //   Actions: "",
  //   SubActions: "",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 28,
  //   ConditionID: "Condition2942024825",
  //   ConditionName: "VijayRule",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"Existing"},{"condition":"and","rules":[{"field":"Count of Visit","operator":"<","value":"4"}]}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "Popup5",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
  // {
  //   ID: 29,
  //   ConditionID: "Condition2942024825",
  //   ConditionName: "AniketRule",
  //   ConditionValue:
  //     '{"condition":"and","rules":[{"field":"Visiter Type","operator":"==","value":"New"},{"condition":"or","rules":[{"field":"Website Page","operator":"=="},{"field":"Duration of Visit","operator":">","value":2333}]}]}',
  //   Sequence: 0,
  //   Actions: "SendPopup",
  //   SubActions: "Test33",
  //   IsDeleted: false,
  //   ProcessBy: "",
  //   BussinessHours: null,
  //   Groups: null,
  // },
];

const mathItUp = {
  ">=": function (x, y) {
    return x >= y;
  },
  "<=": function (x, y) {
    return x <= y;
  },
  ">": function (x, y) {
    return x > y;
  },
  "<": function (x, y) {
    return x < y;
  },
  "==": function (x, y) {
    return x == y;
  },
  and: function (x, y) {
    return x && y;
  },
  or: function (x, y) {
    return x || y;
  },
};

const getFinalResult = ({ conditionRulesObj, ENDDATETIME }) => {
  if (!conditionRulesObj["rules"]?.length) {
    return false;
  }
  let booleanResult;

  for (let x of conditionRulesObj["rules"]) {
    let result;
    const { field, operator, value, condition } = x || {};
    if (condition) {
      result = getFinalResult({
        conditionRulesObj: x,
        ENDDATETIME,
      });
    }

    if (field === "Duration of Visit") {
      const deltaMs = new Date().getTime() - new Date(ENDDATETIME).getTime();
      const totalSeconds = parseInt(Math.floor(deltaMs / 1000), 10);
      const totalMinutes = parseInt(Math.floor(totalSeconds / 60), 10);
      result = mathItUp[operator](totalMinutes, value);
    }
    if (field === "Page Name") {
      result = mathItUp[operator]("home", value);
    }

    if (field === "Count of Visit") {
      result = mathItUp[operator]("2", value);
    }

    if (typeof result !== "boolean") continue;

    if (typeof booleanResult !== "boolean") {
      booleanResult = result;
      continue;
    }
    booleanResult = mathItUp[conditionRulesObj["condition"]](
      booleanResult,
      result
    );
  }

  return booleanResult;
};

// let webFilterFinalResult = [];

for (let webFilterObj of webFilterData) {
  const { ConditionValue } = webFilterObj || {};
  for (let redisObj of redisData) {
    const { ENDDATETIME } = redisObj || {};
    console.log(
      "insideee",
      getFinalResult({
        conditionRulesObj: JSON.parse(ConditionValue),
        ENDDATETIME,
      })
    );
    if (
      getFinalResult({
        conditionRulesObj: JSON.parse(ConditionValue),
        ENDDATETIME,
      })
    ) {
      webFilterFinalResult.push({ webFilterObj, redisObj });
    }
  }
}
// console.log("webFilterFinalResult", webFilterFinalResult);

// var math_it_up = {
//   '+': function (x, y) { return x + y },
//   '-': function (x, y) { return x - y }
// }​​​​​​​;

// math_it_up['+'](1, 2) == 3;

// for (let key in ConditionValue) {
//   if (key === "condition") {
//     let booleanResult = null;
//     rules.forEach((x) => {
//       let conditionResult;
//       if (x?.field === "Duration of Visit") {
//         var deltaMs = newDate().getTime() - newDate(ENDDATETIME).getTime();
//         var totalSeconds = parseInt(Math.floor(deltaMs / 1000), 10);
//         var totalMinutes = parseInt(Math.floor(totalSeconds / 60), 10);
//       }
//       if (x?.field === "Visiter Type") {
//       }
//       if (typeof booleanResult !== "Boolean") {
//         booleanResult = conditionResult;
//       } else {
//         booleanResult = booleanResult && conditionResult;
//       }
//     });
//   }
// }

// const webFilterData = [
//   {
//     ID: 12,
//     ConditionID: "Condition19420241653",
//     ConditionName: "Rule 1",
//     ConditionValue: {
//       condition: "and",
//       rules: [
//         {
//           field: "Duration of Visit",
//           operator: ">=",
//           value: 45,
//         },
//         {
//           field: "Visiter Type",
//           operator: "==",
//           value: "New",
//         },
//         {
//           condition: "or",
//           rules: [
//             {
//               field: "Website Page",
//               operator: "==",
//             },
//             {
//               field: "Duration of Visit",
//               operator: ">",
//               value: 40,
//             },
//           ],
//         },
//       ],
//     },
//     Sequence: 0,
//     Actions: "SendPopup",
//     SubActions: "ABSLI Popup",
//     IsDeleted: false,
//     ProcessBy: "",
//     BussinessHours: null,
//     Groups: null,
//   },
// ];

// const redisData = [
//   {
//     FILLER6: "India",
//     FILLER7:
//       "B2/104, RAJTARA CHS, Ambika Nagar No 3, Thane West, Thane, Maharashtra 400604, India",
//     LONGITUDE: "72.957856",
//     SESSIONID: "ulxw06NyJd5S7_ocX9PX",
//     PAGESESSION: "ulxw06NyJd5S7_ocX9PX",
//     UNIQUEID: "ulxw06NyJd5S7_ocX9PX",
//     PINCODE: "400604",
//     FILLER_2: "",
//     ISINTERACTIONPUSHED: "1",
//     CITY: "Thane",
//     IPADDRESS: "114.143.247.122",
//     BROWSERID: "ulxw06NyJd5S7_ocX9PX",
//     LOCATION:
//       "B2/104, RAJTARA CHS, Ambika Nagar No 3, Thane West, Thane, Maharashtra 400604, India",
//     STARTDATETIME: "2024-04-24 09:59:43.974",
//     BROWSERNAME: "Chrome",
//     FILLER_1: "",
//     BROWSERUID: "ulxw06NyJd5S7_ocX9PX",
//     BROWSERVERSION: "123.0.0.0",
//     PUBLICIP: "114.143.247.122",
//     CLINTINFO: "1",
//     DISTRICT: "Konkan Division",
//     MOBILENO: "",
//     FILLER_5: "",
//     CREATEDBY: "",
//     STATE: "Maharashtra",
//     CLIENTURL:
//       "https://cx5.unfyd.com/site-demo/webchat/chat.html?TenantId=1&ChannelSource=MyDemo&Debug=true",
//     WEBENGAGEMENTCLIENTINFOID: "8a49832c-3ac4-4611-8bb2-cc0e7c6bf921",
//     FILLER_3: "",
//     ENDDATETIME: "2024-04-24 09:59:43.974",
//     PAGENAME: "chat.html",
//     FILLER_4: "",
//     LATTITUDE: "19.1962183",
//     CREATEDDATE: "2024-04-24 09:59:43.974",
//     SESSIONSTATUS: "ACTIVE",
//     PAGETITLE: "",
//   },
// ];

const chatDiv = document.getElementById("chatDiv");
// chatDiv.innerHTML += "<div>Hello<img src='smile.gif'/> !</div>";
// console.log(chatDiv.innerHTML);
// chatDiv.innerHTML += "How goes?";

const curry = (callback) => {
  // write your solution here
  let argsList = [];
  const fn = function (...args) {
    argsList.push(...args);
    if (callback.length !== argsList.length) {
      return fn;
    }
    const finalRes = callback(...argsList);
    argsList = [];
    return finalRes;
  };
  return fn;
};

const add = (a, b, c) => {
  return a + b + c;
};

// const curriedAdd = curry(add);

// console.log("curry", curriedAdd(1, 2));
// console.log("curry", curriedAdd(1)(2));
// console.log("curry", curriedAdd(1)(2)(3));

// window.originalSetTimeout = window.setTimeout;

let timerIds = [];

// window.setTimeout = function (func, delay) {
//   const timerId = window.originalSetTimeout(func, delay);
//   timerIds.push(timerId);
//   return timerId;
// };

// window.clearAllTimeout = () => {
//   timerIds.forEach((id) => {
//     clearTimeout(id);
//   });
//   timerIds = [];
// };

// setTimeout(() => {
//   console.log("One");
// }, 4000);
// setTimeout(() => {
//   console.log("Two");
// }, 5000);
// setTimeout(() => {
//   console.log("Three");
// }, 6000);
// setTimeout(() => {
//   console.log("Four");
// }, 7000);

// clearAllTimeout();

// const id2 = setTimeout(() => {
//   console.log("some settimeout");
// }, 2000);
// console.log("id2", id2);

class MyEmitter {
  // write your code here
  constructor() {
    this.emitterData = {};
    this.id = 1;
  }
  subscribeToEvent(fnName, callback) {
    if (!fnName || !callback) {
      throw new Error("Invalid Input");
    }
    if (!this.emitterData[fnName]) {
      this.emitterData[fnName] = [];
      this.emitterData[fnName].push({ callback, id: this.id });
    } else {
      this.emitterData[fnName].push({ callback, id: this.id });
    }
    return {
      release: this.release,
      emitterData: this.emitterData,
      fnName,
      callbackId: this.id++,
    };
  }
  emitEvent(fnName, ...args) {
    if (!this.emitterData[fnName]) {
      throw new Error("No such event registerd");
    }
    if (!this.emitterData[fnName].length) {
      throw new Error("No more callbacks registerd");
    }
    this.emitterData[fnName][0].callback(...args);
  }
  release() {
    if (!this.emitterData[this.fnName]) {
      throw new Error("No such event registerd");
    }
    if (!this.emitterData[this.fnName].length) {
      throw new Error("No more callbacks registerd");
    }
    const index = this.emitterData[this.fnName].findIndex(
      ({ id }) => id === this.callbackId
    );
    this.emitterData[this.fnName].splice(index, 1);
  }
}

// const emitter = new MyEmitter();
// console.log("emitter", emitter);

// var sub1 = emitter.subscribe("hello", (text) => {
//   console.log(`hello1 ${text}`);
// });
// var sub2 = emitter.subscribe("hello", (text) => {
//   console.log(`hello2 ${text}`);
// });

// emitter.emit("hello", "foo");
// sub1.release();
// emitter.emit("hello", "bar");

var apiCall1 = () =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve("data1"));
  });
var apiCall2 = () =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve("data2"));
  });

Promise.series = function (promises) {
  let totalCountOfResolvedPromises = promises.length;
  let resultsArr = [];
  return new Promise((resolve) => {
    promises.forEach((p, index) => {
      p.then((result) => {
        resultsArr[index] = result;
        totalCountOfResolvedPromises--;
        if (totalCountOfResolvedPromises === 0) {
          resolve(resultsArr);
        }
      });
    });
  });
};
// Promise.series([apiCall1(), apiCall2()]).then((results) => {
//   console.log("results-->", results);
// });

function getUserById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  // setTimeout(() => {
  //   callback("User" + id);
  // }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // write your solution here
  let choppedArr = [[1, 2], [3, 4], [5]];
  const reduceResult = choppedArr.reduce((acc, curr) => {
    return new Promise((resolve) => {
      let arr = [];
      curr.forEach((x, i) => {
        iterateeFn(x, (callbackVal) => {
          arr.push(callbackVal);
          //   console.log("arr", arr);
          if (curr.length === arr.length) {
            acc.then((accRes) => {
              resolve([...accRes, ...arr]);
            });
          }
        });
      });
    });
  }, Promise.resolve([]));
  reduceResult.then((results) => {
    // console.log("results", results);
  });
}

mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
  console.print("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
// sayHi();
// function sayHi() {
//   alert('Hello');
// }

// var foo = function bar() {
//   return 'BFE';
// };

// console.log(foo());
// console.log(bar());

// var a = 1;
// var a = 2;
// console.log(a); //2 with var

// function fun(from) {
//   var from = 'ajay';
//   console.log(from); //'ajay with var
// }
// fun('vijay');
// console.log();

// let i = 0;
// while (i < 3) {
//   // shows 0, then 1, then 2
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
//   // shows 0, then 1, then 2
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   // 0, 1, 2
// }
// console.log(i);
// error, no such variable

// let i = 0; // we have i already declared and assigned

// for (; i < 3; ) {
// no need for "begin"
//   console.log(i);
// }
// function func() {
//   let i = 2;
//   console.log(i);
// }
// func();

// let sum = 0;

// while (true) {
//   let value = +prompt('Enter a number', '');

//   if (!value) break; // (*)

//   sum += value;
// }
// alert('Sum: ' + sum);

// for (let i = 0; i < 10; i++) {
//   // if true, skip the remaining part of the body
//   //   if (i % 2 == 0) continue;
//   if (i > 5) {
//     console.log(i);
//   } else {
//     continue;
//   }
//   //   console.log(i); // 1, then 3, 5, 7, 9
// }

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, '');

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }

// alert('Done!');

// 1;
// 2
// 3
// 4

// 1
// 2
// 3
// 4
// 5

// let i = 0;
// while (++i < 5) console.log(i);
// console.log('==================');
// let j = 0;
// while (j++ < 5) console.log(j);
// for (let i = 0; i < 5; i++) console.log(i);
// for (let i = 0; i < 5; ++i) console.log(i);

// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }
// let i = 0;

// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }
// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert('Too small');
//     break;
//   case 4:
//     alert('Exactly!');
//   // break;
//   case 5:
//     alert('Too big');
//   // break;
//   default:
//     alert("I don't know such values");
// }

// const browser = 'Firefo';
// if (browser === 'edge') {
//   alert("You've got the Edge!");
// } else if (
//   'Chrome' === browser ||
//   'Firefox' === browser ||
//   'Safari' === browser ||
//   'Opera' === browser
// ) {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function showMovie(age) {
//   console.log('age', age);

//   return;
//   // if (!checkAge(age)) {
//   // }

//   // alert('Showing you the movie'); // (*)
//   // ...
// }
// let a = showMovie();
// console.log(a);
