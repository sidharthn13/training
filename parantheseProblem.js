let output = [];
function generate_combination(num) {
  output = [];
  generate(num, num, "");
  console.log(output);
}
function generate(numberOfOpenBrackets, numberOfClosedBrackets, str) {
  if (numberOfOpenBrackets == 0 && numberOfClosedBrackets == 0) {
    //exit condition
    output.push(str);
    return
  }
  if (numberOfOpenBrackets == numberOfClosedBrackets && numberOfOpenBrackets != 0) {
    str += "(";

    generate(numberOfOpenBrackets - 1, numberOfClosedBrackets, str);
  }
  else{
    str += ")";
    generate(numberOfOpenBrackets, numberOfClosedBrackets - 1, str);
    if (numberOfOpenBrackets != 0) {
      str = str.slice(0, str.length - 1);
      str += "(";
      generate(numberOfOpenBrackets - 1, numberOfClosedBrackets, str);
    }}
  
}
generate_combination(5);
