const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ""){
        alert("YOU MUST WRITE SOMETHING!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    savedata();
}
listContainer.addEventListener("click", function(x){
    if(x.target.tagName === "LI"){
        x.target.classList.toggle("checked");
        savedata();
    }else if(x.target.tagName === "SPAN"){
        x.target.parentElement.remove();
        savedata();
    }

}, false);
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
};
function showContainer(){
    listContainer.innerHTML = localStorage.
    getItem("data");
}showContainer();