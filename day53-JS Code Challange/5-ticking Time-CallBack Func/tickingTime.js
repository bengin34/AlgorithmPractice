//! ticking clock document body
// !! Div with an id of clock
//!! Display the current hours minutes and seconds


function clock(){
    const clockNode = document.querySelector("#clock");
    return setInterval(()=> {
        let date = new Date();
        let tick = date.toLocaleTimeString();
        clockNode.textContent = tick
    },1000);
}

clock()