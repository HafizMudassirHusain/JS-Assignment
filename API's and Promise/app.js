fetch('https://jsonplaceholder.typicode.com/users')
.then(function (data) { 
    return data.json()
    })

    .then(function (data){
    var getDiv = document.querySelector('#getdiv')
    console.log(data)
    data.filter(function (data){
        getDiv.innerHTML += `<div class="card m-10" style="width: 18rem;">
           <div class="card-body">
             <h5 class="card-title">${data.id}</h5>
             <p class="card-text">${data.name}</p>
             <p class="card-text">${data.username}</p>
             <p class="card-text">${data.name}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>`
    })

    // for (var i =0 ;i<= data.length;i++){
    //       getDiv.innerHTML += `<div class="card m-10" style="width: 18rem;">
    //   <div class="card-body">
    //     <h5 class="card-title">${data[i].id}</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>`
    //  }
   
})

.catch(function (error) {
    return error
})


// var pro = new Promise(function(resolve, reject){
//     var eat = 'mango';
//     if(eat === 'mango'){
//         resolve('I am eating mango');
//         } else{
//             reject('I am not eating mango');
//             }
// });