const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        //creating li html
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
 }   
 else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
 }
}, false);


//saves data event after browser is refreshed
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//shows the saved data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();