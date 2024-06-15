var getUl = document.getElementById('ul');

function Add(){
    var userInp = document.getElementById('inp');
    if(userInp == ""){
        alert("Please enter something");
    }else{
        var createli = document.createElement('li')
        var litext = document.createTextNode(userInp.value)
        createli.appendChild(litext);
        getUl.appendChild(createli)
        userInp.value = ''
       var editButton = document.createElement('button')
       editButton.innerText = "Edit";
       createli.appendChild(editButton)
       editButton.setAttribute("onclick","editFunc(this)")

       var deleteBtn = document.createElement('button')
       deleteBtn.innerText = "Remove";
       createli.appendChild(deleteBtn)
       deleteBtn.setAttribute('onclick', 'delFunc()')
    }
 
}
function Del(){
    var index = 0;
    index++
var child = getUl.childNodes[index]
child.remove()
console.log(child)
}
function DelAll(){
   getUl.innerHTML = ''
}