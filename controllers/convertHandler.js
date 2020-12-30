/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    let raw = input;

    const unitRegex = /[a-zA-Z]+/;
    const numRegex = /^\d+(\.\d+\/\d+\.\d+$|\/\d+\.\d+$|\.\d+\/\d+$|\/\d+$|\.\d+$)?$/;

    raw = raw.replace(unitRegex, '');
    if (!raw) {
      raw = '1';
    }

    if (numRegex.test(raw)) {
      const [nominator, denominator] = raw.split('/');
      if (denominator === '0') {
        return false;
      }
      return nominator / denominator;
    } else {
      return false;
    }
  };

  this.getUnit = function (input) {
    let result;
    let unit;

    let raw = input.toLowerCase();

    let textRegex = /[a-zA-Z]+$/;
    let unitRegex = /(gal|l|mi|km|lbs|kg)$/;

    if (textRegex.test(raw)) {
      unit = raw.match(unitRegex);
    }
    result = unit ? unit[0] : 'invalid unit';

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let lookup = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    let conversion = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];

    return conversion[lookup.indexOf(initUnit)];
  };

  this.spellOutUnit = function (unit) {
    let lookup = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    let spelling = [
      'gallons',
      'liters',
      'miles',
      'kilometers',
      'kilograms',
      'pounds',
    ];
    return spelling[lookup.indexOf(unit)];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (!initNum || !initUnit) return null;

    switch (initUnit) {
      case 'gal':
        return +(initNum * galToL).toFixed(5);
      case 'l':
        return +(initNum / galToL).toFixed(5);
      case 'mi':
        return +(initNum * miToKm).toFixed(5);
      case 'km':
        return +(initNum / miToKm).toFixed(5);
      case 'lbs':
        return +(initNum * lbsToKg).toFixed(5);
      case 'kg':
        return +(initNum / lbsToKg).toFixed(5);
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
