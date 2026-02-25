// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

let fs = require("fs").promises;

async function main(filePath){
    try{
        let data = await fs.readFile(filePath,"utf-8");
        data = data.replace(/\s+/g," ").trim();
        await fs.writeFile(filePath,data);
    }
    catch(err){
        console.log("Error : "+err);
    }
}

main("a.txt");

