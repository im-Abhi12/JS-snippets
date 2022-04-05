var listItems = document.getElementById("list-items");
var formSection = document.getElementById("form-section");
var btn = document.getElementById("btn");
var inputField = document.getElementById("input-field");
var currentInput;

inputField.addEventListener("input", function(e){
    currentInput= e.target.value;
})

inputField.addEventListener("keyup",function(e){
if(e.keyCode===13){
    addItemList();
}});


function addItemList(){
    if(currentInput!== null && currentInput!== undefined && currentInput!== "")
    {
    var newElement = document.createElement("li");
    var text = currentInput;
    var addThis = document.createTextNode(text);
    newElement.appendChild(addThis);
    listItems.appendChild(newElement);
    inputField.value = '';
    currentInput = '';
}
else{
    alert("You need to enter some value in input ");
}
}

btn.addEventListener("click", addItemList)