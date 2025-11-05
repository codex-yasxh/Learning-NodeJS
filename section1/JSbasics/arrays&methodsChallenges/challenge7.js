


/*
6. You have an array named `popularTeas' containing
`"green tea"`, '"oolong tea"`, and '"chai"'.
Create a soft copy of this array named
hardCopyTeas'.

*/


// let popularTeas = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = popularTeas.slice();
// console.log(softCopyTeas);

//another better approach

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = [...popularTeas]
console.log(softCopyTeas);
