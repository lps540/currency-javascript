
var pronounce = require('../app/scripts/currency.js');

exports['calculate'] = function (test) {
    test.equal("Zero dollars", pronounce("0"));
    test.equal("One dollar", pronounce("1"));
    test.equal("Ten dollars", pronounce("10"));
    test.equal("Eleven dollars", pronounce("11"));
    test.equal("Twenty dollars", pronounce("20"));
    test.equal("Twenty-one dollars", pronounce("21"));
    test.equal("One hundred dollars", pronounce("100"));
    test.equal("One hundred dollars", pronounce("0100"));
    test.equal("One hundred ninety-nine dollars", pronounce("199"));
    test.equal("One million dollars", pronounce("1000000"));
    test.equal("One million one dollars", pronounce("1000001"));
    test.equal("One and 23/100 dollars", pronounce("1.23"));
    test.equal("Zero and 23/100 dollars", pronounce(".23"));

    test.done();
};
