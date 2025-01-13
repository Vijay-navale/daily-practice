const { getChangedFilesForRoots } = require("./index");
// const { getChangedFilesForRoots } = require("jest-changed-files");
getChangedFilesForRoots(["./"], {
  lastCommit: true,
}).then((result) => console.log("result.changedFiles-==", result.changedFiles));
test("sdfsd", () => {});
// const axios = require("axios");

/**
 * mock functions
 */
// console.log("-=-=", jest.mock("./index"));
// test("testing mock", () => {
//   expect(bar()).toBe("b");
// });
// const myMockFn = jest
//   .fn(() => "default")
//   .mockImplementationOnce(() => "first call")
//   .mockImplementationOnce(() => "second call");

// console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// jest.mock("./index", () => {
//   const originalMod = jest.requireActual("./index");
//   console.log("originalModp0---", originalMod);
//   return {
//     __esModule: true,
//     ...originalMod,
//     foo: "mocked foo",
//     bar: jest.fn(() => "mocked bar"),
//   };
// });
// test("testing mock partials", () => {
//   console.log("foo0-0-0-", foo);
//   expect(foo).toBe("mocked foo");
//   expect(bar()).toBe("mocked bar");
// });

// jest.mock("axios");
// test("should fetch users", async () => {
//   const users = [{ name: "Bob" }];
//   const resp = { data: users };
//   axios.get.mockResolvedValue(resp);
//   try {
//     const data = await Users.all();
//     expect(data).toEqual(users);
//     console.log("data=-=--", data);
//   } catch (err) {
//     console.log("err-=--", err);
//   }
// });

// const mockCallback = jest.fn((x) => x);
// test("forEach mock function", () => {
//   mockCallback.mockReturnValueOnce(23);
//   myForEach([0, 1], mockCallback);
//   console.log("mockCallback-=-=-", mockCallback);
//   // The return value of the first call to the function was 42
//   expect(mockCallback.mock.results[0].value).toBe(23);
// });
/**
 * scoping code
 */
// test.only("this will be the only test that runs", () => {
//   expect(true).toBe(false);
// });

// test("this test will not run", () => {
//   expect("A").toBe("A");
// });
// beforeAll(() => console.log("1 - beforeAll"));
// afterAll(() => console.log("1 - afterAll"));
// beforeEach(() => console.log("1 - beforeEach"));
// afterEach(() => console.log("1 - afterEach"));

// test("", () => console.log("1 - test"));

// describe("Scoped / Nested block", () => {
//   beforeAll(() => console.log("2 - beforeAll"));
//   afterAll(() => console.log("2 - afterAll"));
//   beforeEach(() => console.log("2 - beforeEach"));
//   afterEach(() => console.log("2 - afterEach"));

//   test("", () => console.log("2 - test"));
// });

/**
 * async code
 */
// test("the data is peanut butter", (done) => {
//   // expect.assertions(1);
//   function callback(error, data) {
//     if (error) {
//       // done(error);
//       return;
//     }
//     try {
//       console.log("inside-=-=-=--");
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });
// test("plz expect one assertion", async () => {
//   expect.assertions(1);
//   try {
//     const data = await fetchData();
//   } catch (error) {
//     console.log("error-=-=", error);
//     expect(error).toBe("peanut butter error");
//   }
// });

// test("plz expect peanut butter", async () => {
//   const data = await fetchData();
//   expect(data).toBe("peanut butter");
// });

/**
 * matchers
 */

// const shoppingList = [
//   "diapers",
//   "kleenex",
//   "trash bags",
//   "paper towels",
//   "milk",
// ];

// test("the shopping list has milk on it", () => {
//   expect(shoppingList).toContain("milk");
//   expect(new Set(shoppingList)).toContain("milkk");
// });

// test("add func run", () => {
//   expect(sum(1, 2)).toBe(4);
// });
// test("object assignment", () => {
//   const data = { one: 1 };
//   data["two"] = 2;
//   expect(data).toEqual({ one: 1, two: 2, a: null });
// });
