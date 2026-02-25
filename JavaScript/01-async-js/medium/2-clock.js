// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showTime(){

    setInterval(()=>{
        let now = new Date();
        let hours = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let ampm = hours>=12 ? "pm" : "am";
        hours = hours%12===0 ? 12 : hours;
        hours = String(hours).padStart(2,"0");
        min = String(min).padStart(2,"0");
        sec = String(sec).padStart(2, "0");
        
        console.log(`${hours}:${min}:${sec} ${ampm}`);

    },1000);
}

showTime();

