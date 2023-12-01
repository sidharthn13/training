// function multiplicativePersistence(str) {
//   return reduceString(str, 0);
// }
// function reduceString(str, count) {
//   const arr = str.split("");
//   if (arr.length == 1) {
//     return [str, `number of steps: ${count}`];
//   }
//   let product = 1;
//   arr.forEach((element) => {
//     product *= element;
//   });
//   console.log(`step${count} --->  ${product}`);
//   return reduceString(`${product}`, count + 1);
// }
// console.log(multiplicativePersistence("277777788888899"));



//alternate method using Array.reduce:
// function reduce(str, steps = 0) {
//   if (str.length == 1) {
//     return [str, steps];
//   }
//   const product = str.split("").reduce((accumulator, value) => {
//     return accumulator * value;
//   });
//   console.log(`step${steps} ---> ${product}`);
//   return reduce(`${product}`, steps + 1);
// }
// console.log(reduce("277777788888899"));
