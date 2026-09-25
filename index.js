let input = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector(".main")
let allli = document.querySelectorAll("li")
let box = document.querySelectorAll('#check')
let removebtn = document.querySelector('#remove')
console.log(box.type === false)
btn.addEventListener("click",()=>{
    return input.value === "" ? alert("value empty") :
 ul.innerHTML += `<li id="lis">${input.value}    <input type="checkbox" name="" id="check">
</li>` ,input.value = "" 
  

})

removebtn.addEventListener("click",(event)=>{
   if (ul.lastElementChild) {
    ul.lastElementChild.remove()
}


})


    document.querySelector("ul").addEventListener("change",(e)=>{
      
      if(e.target.type === "checkbox"){
        let li = e.target.parentElement
        li.classList.toggle("complete")
      }


    })

