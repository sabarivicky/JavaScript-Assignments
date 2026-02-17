let obj = { A: [80, 90,100], B: [70, 75, 85] };

function fun(obj){

    let higheststudent = "";
    let highestavg = -Infinity;

    Object.keys(obj).forEach(student=>{
        let marks = obj[student];
        let avg = marks.reduce((sum,marks)=>sum+marks,0)

        if(avg>highestavg){
            highestavg = avg;
            higheststudent = student;
        }
    })
    return higheststudent;
}

console.log(fun(obj))