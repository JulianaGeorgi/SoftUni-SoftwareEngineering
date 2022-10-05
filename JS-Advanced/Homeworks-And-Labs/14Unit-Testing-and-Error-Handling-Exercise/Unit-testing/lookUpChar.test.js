let { assert } = require("chai");
let { lookupChar } = require("../03charLookUp");

describe("Test lookup with incorrect type", () => {
    it("result should be undefined with first parameter is incorrect", () => {
        assert.equal(lookupChar(5, 5), undefined);
    });

    it("result should be undefined with second parameter is incorrect", () => {
        assert.equal(lookupChar("Pesho", "Gosho"), undefined);
    });

    it("result should be undefined with second parameter is decimal number", () => {
        assert.equal(lookupChar("Pesho", 0.99), undefined);
    });

    it("result should be undefined with first parameter is array", () => {
        assert.equal(lookupChar([], 0), undefined);
    });

});

describe("Test lookupChar with correct type, but the value of the index is incorrect", () => {
    it ("result should be Incorrect index with bigger index", () => {
        assert.equal(lookupChar("Todor", 100), "Incorrect index");
    });

    it ("result should be Incorrect index with equal index", () => {
        assert.equal(lookupChar("Todor", 5), "Incorrect index");
    });

    it ("result should be Incorrect index with negative index", () => {
        assert.equal(lookupChar("Todor", -1), "Incorrect index");
    });
});

describe("Test lookupChar with correct type and value", () => {
    it ("result should be T index with zero index (Todor)", () => {
        assert.equal(lookupChar("Todor", 0), "T");
    });

    it ("result should be r index with last index (Todor)", () => {
        assert.equal(lookupChar("Todor", 4), "r");
    });
});