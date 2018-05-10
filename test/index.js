'use strict';
require('should');
const mapLimit = require('../index');

describe("limit test", function () {
  it("max count should little then 11", function () {
    let array = [],
      i = 0,
      maxCount = 0,
      count = 0;
    while (i < 100) {
      array.push(i);
      i++;
    }

    mapLimit(array, 10, async function sleep(item) {
      count++;
      maxCount = count > maxCount ? count : maxCount;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          count--;
          resolve();
        }, 1000)
      });
    });
    maxCount.should.lessThan(11);
  });
});

