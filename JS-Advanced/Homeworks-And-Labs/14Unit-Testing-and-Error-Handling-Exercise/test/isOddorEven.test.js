let { assert } = require("chai");
let { isOddOrEven } = require("../02evenOrdOdd");

describe("Test isOddOrEven functionality", () =>{

    describe("Test isOddOrEven with incorrect value", () => {
        it("Result should be undefined with array argument", () => {
            assert.equal(isOddOrEven([]), undefined);
        });
    
        it("Result should be undefined with empty object argument", () => {
            assert.equal(isOddOrEven({}), undefined);
        });
    
        it("Result should be undefined with object argument", () => {
            assert.equal(isOddOrEven({ name: "Pesho" }));
        });
    
        it("Result should be undefined with number argument", () => {
            assert.equal(isOddOrEven(1), undefined);
        });
    
        it("Result should be undefined with boolean argument", () => {
            assert.equal(isOddOrEven(true), undefined);
        })
    });

    describe("Test isOddOrEven with correct value", ()=>{
        it("Result should be even with `Love`", ()=>{
            assert.equal(isOddOrEven("love"), "even");
        });

        it("Result should be even with `Todor`", ()=>{
            assert.equal(isOddOrEven("Todor"), "odd");
        })
    })
});