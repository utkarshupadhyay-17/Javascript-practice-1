//console.dir(document.body.childNodes[3])
//document.body.style.background="green";
//document.body.childNodes[3].innerText="utkarsh"

// let button=document.getElementById("myid");
// console.log(button);

// let headings = document.getElementsByClassName("myclass")
// console.log(headings);
// console.dir(headings);

// let parahs=document.getElementsByTagName("p")
// console.log(parahs);
// console.dir(parahs);

// let elements = document.querySelector("p");
// console.dir(elements)

// let allEl = document.querySelectorAll(".myclass")
// console.dir(allEl) 



// let h2=document.querySelector("h2")
// console.dir(h2.innerText)

// h2.innerText=h2.innerText + " from apna college student"

// let divs = document.querySelectorAll(".box");
// console.dir(divs)

// let i=1;
// for(div of divs){
//     div.innerText=`new inner66 value of div ${i}`
//     i++;
// }

// divs[0].innerText="new inner value of div 1"
// divs[1].innerText="new inner value of div 2"
// divs[2].innerText="new inner value of div 3"

// let div = document.querySelector("div");
// console.log(div);

// let id =div.getAttribute("id");
// console.log(id);

// let det=document.querySelector("div");
// det.style.background="green"
// det.style.fontSize="20px"
// det.innerText="utkarsh"

//let class1= det.setAttribute();

// let newBtn = document.createElement("button");
// newBtn.innerText="click me!";
// newBtn.style.background="green"
// console.log(newBtn)

// let div=document.querySelector("p")
// div.after(newBtn)

// let newHeading= document.createElement("h1")
// newHeading.innerHTML ="<i>hey baby!</i>"
// console.log(newHeading)
// document.querySelector("body").append(newHeading)

// let doc=document.querySelector("h1")
// doc.remove()
// newHeading.remove()


// EVENTS IN JS

let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
    // let a = 5;
    // for(let i=1;i<=a;i++){
    //     console.log(i);
    //}
//}

btn1.addEventListener("click",(evt)=>{
    console.log("btn1 was clicked");
    
})

const handler=()=>{
    console.log("btn1 was clicked-handler2");
}
btn1.addEventListener("click",handler)


btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked-handler3");
})

btn1.removeEventListener("click",handler)

// let div = document.querySelector("div");
// div.onmouseover = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
//     console.log("you are inside div")
// }