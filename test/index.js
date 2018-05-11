'use strict';
require('should');
const mapLimit = require('../index');

describe("limit test", async function () {
  this.timeout(30000);
  it("max count should little then 11", async () => {
    let array = [],
      i = 0,
      count = 0,
      maxCount = 0;
    while (i < 100) {
      array.push(i);
      i++;
    }
    async function sleep(item) {
      count++;
      maxCount = count > maxCount ? count : maxCount;
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          count--;
          resolve(item);
        }, 10)
      });
    }
    await mapLimit(array, 10, sleep);
    maxCount.should.lessThan(11);
  });
});