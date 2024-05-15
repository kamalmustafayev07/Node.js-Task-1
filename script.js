let arr=[];
let body=document.querySelector('body');
let workersList=document.getElementById('workers-list');

fetch('http://localhost:5000/workers')
.then(res=>res.json())
.then(data=>{
arr=[...data];
arr.forEach((item)=>{
    let li = document.createElement('li');
    workersList.appendChild(li);
    li.innerHTML=`
    <h1>Worker ${item.id}</h1>
    <p>id : ${item.id}</p>
    <p>name : ${item.name}</p>
    <p>age : ${item.age}</p>
    `;
})
})
.catch(err=>console.log(err));



