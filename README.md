[![Build Status](https://travis-ci.org/chouchou900822/map-limit.svg?branch=master)](https://travis-ci.org/chouchou900822/map-limit)

### The same as map but runs a maximum of limit operations at the same time use await/yield

## Installation

```sh
$ npm install koa-map-limit
```

```javascript
mapLimit(arr, limit, async callback)
```

```javascript
const mapLimit = require('koa-map-limit');
let array = [],
    i = 0;
while (i < 100) {
  array.push(i);
  i++;
}

let reuslt = await mapLimit(array, 10, async (item) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(item)
      resolve();
    }, 1000)
  });
});
```


# 中文

### 用 await/yield 的时候控制并发数量

## test

```sh
$ npm test
```