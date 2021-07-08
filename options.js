const f1=document.getElementById('limit');
const q1=document.getElementById('savelimit');

q1.addEventListener('click',function(){
        localStorage.setItem('limit',f1.value);
        limit.value=""; 
})

document.getElementById('resettotal').addEventListener('click',function(){
        localStorage.setItem('total',0);
})