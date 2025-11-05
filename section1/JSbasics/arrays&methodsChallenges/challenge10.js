

/*
10. You have an array named `cityBucketList containing
`"Kyoto"`, '"London", '"Cape Town", and
`"Vancouver".
Check if '"London"' is in the array and store the
result in a variable named 'isLondonInList .

*/

//My approach
// let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
// let isLondonInList = false;
// for(i in cityBucketList){
//     if(cityBucketList[i]  === "London"){
//         isLondonInList = true
//         break
//     }
// }
// if(isLondonInList){
//     console.log("yes, London is present in the city bucket list")
// }

//Better approach

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
if(isLondonInList){
    console.log("yes , london is present in the city bucket list")
}

