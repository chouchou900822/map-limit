### koa/async/await下控制并发数量

## Installation

```sh
$ npm install map-limit
```

```javascript
const mapLimit = require('map-limit');
let array = [],
    i = 0;
while (i < 100) {
  array.push(i);
  i++;
}

mapLimit(array, 10, async function (item) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(item)
      resolve();
    }, 1000)
  });
});
```

## test

```sh
$ npm test
```