var flag = document.getElementById('flag');

flag.addEventListener('change',()=>{
    ans = flag.value;
    if(ans=='yes') alert("ohh, i dont like this game");
    else if(ans=='no'){
         alert("You dont like, but a make this game for youuuu gru gru. But now i am very happy then...the game is end if you have 1000 point");       
    }
    else alert("không biết đọc à, nhập cho đúng đi")
})
