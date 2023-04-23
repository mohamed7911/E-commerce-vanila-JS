let navBar = document.querySelector(".nav-bar .menu").addEventListener("click",function() {
    document.querySelector(".nav-bar ul").style.cssText="right:0"
})

document.querySelector(".nav-bar i").addEventListener("click",function() {
    document.querySelector(".nav-bar ul").style.cssText="right:-300"
})


// document.querySelectorAll(".products-container i").forEach(function(e,ind1){
//     e.addEventListener("click",function(){
//         document.querySelectorAll(".products-container i").forEach(function(e1,ind2){
//             ind1>=ind2 ? e1.classList.add("active") : e1.classList.remove("active");
//         })
//     })
// })


document.querySelectorAll(".products-container").forEach(function(e){
e.addEventListener("mouseover",function(){
Array.from(e.getElementsByClassName("fa-star")).forEach(function(e1,index1) {

    e1.addEventListener("click",function(){
        Array.from(e.getElementsByClassName("fa-star")).forEach(function(e2,index2){
            index1>=index2 ?e2.classList.add("active") : e2.classList.remove("active");
        })
        })
    })
})
})

// let gag = document.querySelector(".gag");
// document.addEventListener("contextmenu",function(e){
//     e.preventDefault();
//     let x = e.offsetX, y = e.offsetY;
//     gag.style.left=`${x}px`;
//     gag.style.top=`${y}px`;
//     gag.style.visibility="visible";
// })