const path =require('path');

//base file name

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.isAbsolute(__filename));

console.log(path.parse(__filename));