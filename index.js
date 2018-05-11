'use strict';

Array.prototype.split = function (count) {
  let i = 0, j = 0;
  let response = [];
  while (i < count) {
    response.push([]);
    i++;
  }
  while (j < this.length) {
    let temp = this.slice(j, j + count);
    temp.map((item, key) => {
      response[key].push(item);
    });
    j += count;
  }
  return response;
}
module.exports = async (array, count, fn) => {
  let temp = array.split(count);
  await Promise.all(temp.map(async (splitArray) => {
    for (let i = 0; i < splitArray.length; i++) {
      console.log(splitArray[i]);
      await fn(splitArray[i])
    }
  }));
}