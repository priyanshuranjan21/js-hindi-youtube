const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//object inside array and how to feach the object and from an array contaning the object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

/** call back function **/ //note this is importan the below part
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )


// | Feature           | `forEach()`                    | `filter()`                           |
// | ----------------- | ------------------------------ | ------------------------------------ |
// | Purpose           | Do something for each item     | Select/filter specific items         |
// | Return value      | ❌ Nothing (undefined)          | ✅ Returns a new filtered array       |
// | Changes original? | ❌ No                           | ❌ No                                 |
// | Use case example  | Log, update, call API per item | Get even numbers, users above age 18 |

const newnum=mynum.filter((num)=>{
    return num>4;
})//note in this if we use {} then it is necessary to write return if () will be there then its ok no need to write 
console.log(newnum);

