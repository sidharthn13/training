function multiplicativePersistence(str) {
  return reduceString(str, 0);
}
function reduceString(str, count) {
  const arr = str.split("");
  if (arr.length == 1) {
    return [str, `number of steps: ${count}`];
  }
  let product = 1;
  arr.forEach((element) => {
    product *= element;
  });
  console.log(`step${count} --->  ${product}`);
  return reduceString(`${product}`, count + 1);
}
console.log(multiplicativePersistence("277777788888899"));
