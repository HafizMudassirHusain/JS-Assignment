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
       editButton.setAttribute("onclick","edit(this)")


       var deleteBtn = document.createElement('button')
       deleteBtn.innerText = "Remove";
       createli.appendChild(deleteBtn)
       deleteBtn.setAttribute('onclick', 'del(this)')
    }
 
}
function edit(data){
    // update the list item with the help of prompt box
       var getPrompt = prompt('Enter value which you want to update', data.parentNode.firstChild.textContent)
       console.log(getPrompt)
       data.parentNode.firstChild.textContent=getPrompt
}

function DelAll(){
    getUl.innerHTML = ''
 }

function del(data){
    data.parentNode.remove()
}