function ToInt(id) {
  var x = $('#' + id).val();
  return parseInt(x);
}
function row(k, i, c, output) {
  if (k > i) return output;
  let b = c + ", ";
  let a = c * (i-k)/(k+1);
  return row(k+1, i, a, output+b);
}
function col(i, n, output) {
  if (i > n) return output;
  let b = row(0, i, 1, "") + "\n";
  return col(i+1, n, output+b);
}
function pascalTriangle(n) {
  return col(0, n, "");
}
