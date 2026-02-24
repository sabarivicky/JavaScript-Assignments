// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs = require("fs").promises;

async function main(filePath) {
    try{
        await(fs.writeFile(filePath,"Hello everyone"));
        
    }
    catch(err){
        console.log("error:"+err);
    }
}

main("a.txt");










// fs.writeFile("a.txt","Hello,sabari",(err,data)=>{
//     if(err){
//         console.log(err);
//         return ;
//     }
//     console.log("file written"+data);
// });
// console.log("end");