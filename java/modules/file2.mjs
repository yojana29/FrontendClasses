
// import {variable,greet} from "./file1.mjs";

// greet();
// console.log(variable);

import * as fromFile1 from "./file1.mjs";

fromFile1.greet();
console.log(fromFile1.variable);