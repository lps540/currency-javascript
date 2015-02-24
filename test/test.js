
var p = require('../app/scripts/currency.js');

exports['calculate'] = function (test) {
    test.equal("Zero dollars", p.pronounce("0"));
    test.equal("One dollar", p.pronounce("1"));
    test.equal("Ten dollars", p.pronounce("10"));
    test.equal("Eleven dollars", p.pronounce("11"));
    test.equal("Twenty dollars", p.pronounce("20"));
    test.equal("Twenty-one dollars", p.pronounce("21"));
    test.equal("One hundred dollars", p.pronounce("100"));
    test.equal("One hundred dollars", p.pronounce("0100"));
    test.equal("One hundred ninety-nine dollars", p.pronounce("199"));
    test.equal("One million dollars", p.pronounce("1000000"));
    test.equal("One million one dollars", p.pronounce("1000001"));
    test.equal("One and 23/100 dollars", p.pronounce("1.23"));
    test.equal("Zero and 23/100 dollars", p.pronounce(".23"));

    test.done();
};
