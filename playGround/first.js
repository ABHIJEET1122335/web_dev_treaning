let modeBtn = document.querySelector("#mode");

let curetmode ="light";

modeBtn.addEventListener("click" ,() => {
    if (curetmode === "light") {
        curetmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        curetmode = "light";
        document.querySelector("body").style.backgroundColor                                               = "white"
    }
    console.log(curetmode)
});
let x = 1;
let allnum = x;
if(allnum % 2 == 0 ){
    console.log("even")
}else{
    console.log("odd")
}
