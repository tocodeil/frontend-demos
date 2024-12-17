import { twice } from './utils.js';
import _ from 'https://underscorejs.org/underscore-esm-min.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.0/esm/index.js';

const siteName = 'tocode';

for (let i=0; i < twice(4); i++) {
  console.log(`Welcome to ${siteName}`);
}

console.log(`my random number is: ${_.random(10)}`);
console.log(dayjs('2018-08-08').format());
