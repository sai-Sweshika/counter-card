CountValues=document.getElementById("count")
let a=document.getElementById("increase");
let b=document.getElementById("decrease");
let c=document.getElementById("reset");

let count=0

function display(){
    CountValues.textContent = count;
}
a.addEventListener("click",function (){
    count++
    console.log(count);
    display();
})

b.addEventListener("click",function(){
    count--
    console.log(count);
    display();
})

c.addEventListener("click",function(){
    count=0
    console.log(count);
    display();
})


