
function test({bigVariableName : prop = 10, b = 20} = {}) {

    console.log(prop);
    console.log(b);
}

test({bigVariableName: 300});