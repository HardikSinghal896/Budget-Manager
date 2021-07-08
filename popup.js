const f=document.getElementById("spendAmount");
const q=document.getElementById("amount");

if(localStorage.getItem('total')==null)
{
    document.getElementById('total').textContent=0;
}
else
{
    document.getElementById('total').textContent=localStorage.getItem('total');
}
if(localStorage.getItem('limit'))
document.getElementById('limit').textContent=localStorage.getItem('limit');
else
document.getElementById('limit').textContent=0;

f.addEventListener('click',function(){
    if(localStorage.getItem('total')==null)
    {
        var newTotal=0;
        newTotal=parseInt(q.value);
        localStorage.setItem('total',newTotal);
    }
    else{
        var newTotal = 0;
        if(localStorage.getItem('total'))
        {
            newTotal+=parseInt(localStorage.getItem('total'));
        }
        if(Number.isInteger(parseInt(amount.value))==true&&amount.value!="")
        newTotal+=parseInt(amount.value);
        localStorage.setItem('total',newTotal);

    }
    document.getElementById('total').textContent=localStorage.getItem('total');
    amount.value="";
    if(parseInt(localStorage.getItem('total'))>=parseInt(localStorage.getItem('limit')))
    {
        notifications();
    }
    function notifications(){
        
        chrome.notifications.create(
            {
            type: "basic",
            iconUrl: 'icon48.png',
            title: "Limit reached",
            message: "looks like you reached your limit"
            }
        )
    }
})