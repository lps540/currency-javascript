'use strict';

var onesMap = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
};

var teensMap = {
    '0': 'ten',
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen'
};

var tensMap = {
    '0': '',
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
};

var clusterMap = {
    1: '',
    2: 'thousand',
    3: 'million',
    4: 'billion',
    5: 'trillion'
};

var convertDecimal = function(s) {
    return (s === '') ? '' : ' and ' + s + '/100';
};

var lastThree = function(s) {
    var c = s.length;
    return (c < 4) ? s : s.substr(c - 3, c);
};

var validate = function(s) {
    if (s.indexOf('-') === 0) {
        return 'Negative amounts not allowed.';
    } else if (s.length > 13) {
        return 'Amount too large, quadrillion not supported.';
    } else if (! /^\d{0,13}(\.\d{2})?$/.test(s)) {
        return 'Amount not recognized.';
    } else {
        return null;
    }
};

var chunkify1 = function(s, a) {
    a.push(lastThree(s));
    if (s.length > 3) {
        chunkify1(s.substring(0, s.length - 3), a);
    }
    return a;
};

var chunkify = function(s) {
    return chunkify1(s, []).reverse();
};

var pronounceBase = function(s) {
    var size = s.length;
    switch (size) {
    case 3:
        if (s.substring(0, 1) === '0') {
            return pronounceBase(s.substring(1));
        } else {
            return onesMap[s.substring(0, 1)] + ' hundred ' + pronounceBase(s.substring(1));
        }
        break;
    case 2:
        if(s.substring(0, 1) === '0') {
            return pronounceBase(s.substring(1));
        } else if (s.substring(0, 1) === '1') {
            return teensMap[s.substring(1)];
        } else if (s.substring(0, 1).trim() === '0') {
            return teensMap[s.substring(0, 1)] + pronounceBase(s.substring(1));
        } else {
            return tensMap[s.substring(0, 1)] + '-' + pronounceBase(s.substring(1));
        }
        break;
    case 1:
        return onesMap[s];
    default:
        return '';
    }
};

var pronounce1 = function(list) {
    var size = list.length;
    if (size === 1) {
        return pronounceBase(list[0]);
    } else if (list[0] === '000') {
        return pronounce1(list.slice(1));
    } else {
        return pronounceBase(list[0]) + ' ' + clusterMap[size] + ' ' + pronounce1(list.slice(1));
    }
};

var pronounce = function(currency) {

    var s = currency.replace(new RegExp(',', 'g'), '');
    var errors = validate(s);
    if (errors) {
        return errors;
    }

    var index = s.indexOf('.');
    var firstPart = (index > -1) ? s.substring(0, index) : s;
    var decimalPart = (index > -1) ? s.substring(index + 1, index + 3) : '';
    var t = pronounce1(chunkify(firstPart)).trim() + convertDecimal(decimalPart);

    if (t === '') {
        return 'Zero dollars';
    } else if (t === 'one') {
        return 'One dollar';
    } else {
        return t.substring(0, 1).toUpperCase() + t.substring(1) + ' dollars';
    }
};
