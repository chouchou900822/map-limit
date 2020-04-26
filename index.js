'use strict';

function splitTheArray(array, count) {
  let i = 0, j = 0;
  let response = [];
  while (i < count) {
    response.push([]);
    i++;
  }
  while (j < array.length) {
    let temp = array.slice(j, j + count);
    temp.map((item, key) => {
      response[key].push(item);
    });
    j += count;
  }
  return response;
}
module.exports = async (array, count, fn) => {
  let temp = splitTheArray(array, count);
  let res = [];
  await Promise.all(temp.map(async (splitArray) => {
    for (let i = 0; i < splitArray.length; i++) {
      res.push(await fn(splitArray[i]))
    }
  }));
  return res;
}