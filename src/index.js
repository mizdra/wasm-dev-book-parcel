import { add, rand, sum } from './lib.rs'

const u32 = (num) => num >>> 0

console.log(add(1, 2))
console.log(u32(rand()))
console.log(sum(new Int32Array([1, 2, 3, 4, 5])))
