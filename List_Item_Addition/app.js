var listItems = document.getElementById("list-items");
var formSection = document.getElementById("form-section");
var btn = document.getElementById("btn");
var inputField = document.getElementById("input-field");
var currentInput;
var updateBtn= document.getElementById("update-btn");
var delBtn = document.getElementById("del-btn");


inputField.addEventListener("input", function(e){
    currentInput= e.target.value;
})

inputField.addEventListener("keyup",function(e){
if(e.keyCode===13){
    addItemList();
}});


function createNewNode(){
    var newElement = document.createElement("li");
    var text = currentInput;
    var addThis = document.createTextNode(text);
    newElement.appendChild(addThis);
    inputField.value = '';
    currentInput = '';
    return newElement;
}


function addItemList(){
    if(currentInput!== null && currentInput!== undefined && currentInput!== "")
    {
    var newElement = createNewNode();
    listItems.appendChild(newElement);
    
}
else{
    alert("You need to enter some value in input ");
}
}

btn.addEventListener("click", addItemList)



updateBtn.addEventListener("click",function(){
    if(currentInput!== null && currentInput!== undefined && currentInput!== ""){
    var firstElement = listItems.firstElementChild;
    var newListElement = createNewNode();
    listItems.replaceChild(newListElement,firstElement);
}
else{
    alert("You need to enter some value in input ");
}
})


delBtn.addEventListener("click", function(){
    var firstElement = listItems.firstElementChild;
    if(listItems.childElementCount===1){
        alert("Can't Remove Last Item")
    }
    else{
        listItems.removeChild(firstElement);
    }
})