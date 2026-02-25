/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

const { promise } = require("zod");

function sleep(milliseconds) {
    let p = new Promise((resolve)=>{
        let start = Date.now();
        while(Date.now()-start<milliseconds){
            
        }
        resolve();
    });
    return p;
}

sleep(3000).then(()=>{
    console.log("finished")
});

module.exports = sleep;
