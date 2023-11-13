let output = [];
function generate_combination(num) {
  output = [];
  generate(num, num, "");
  console.log(output);
}
function generate(open, closed, str) {
  if (open == 0 && closed == 0) {
    //exit condition
    output.push(str);
  }
  if (open == closed && open != 0) {
    str += "(";

    generate(open - 1, closed, str);
  }

  if (open < closed) {
    str += ")";
    generate(open, closed - 1, str);
    if (open != 0) {
      str = str.slice(0, str.length - 1);
      str += "(";
      generate(open - 1, closed, str);
    }
  }
}
generate_combination(2);
