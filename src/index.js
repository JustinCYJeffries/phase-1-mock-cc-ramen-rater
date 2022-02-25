// write your code here
document.addEventListener("DOMContentLoaded", () =>{
    //set values and listeners
const ramenMenu = document.querySelector("#ramen-menu")
const newRamen = document.querySelector("#new-ramen")
newRamen.addEventListener("submit", (e) =>{
    e.preventDefault()
    let ramenObj = {}
    ramenObj.name = document.querySelector('#new-name').value
    ramenObj.restaurant = document.querySelector('#new-restaurant').value
    ramenObj.image = document.querySelector('#new-image').value
    ramenObj.rating = document.querySelector('#new-rating').value
    ramenObj.comment = document.querySelector('#new-comment').value
    renderRamens(ramenObj)

})
                  
//fetch data
    function init(){
        fetch("http://localhost:3000/ramens")
        .then(r => r.json())
        .then(displayRamens)
    }


    //functions
    function displayRamens(ramens){
        ramens.forEach(ramen => renderRamens(ramen) )
    }
    function renderRamens(ramen){
        const image = document.createElement('img')
        image.src = ramen.image
        image.id = ramen.id
        ramenMenu.appendChild(image)
        image.addEventListener("click", () =>{
            document.querySelector('.name').innerHTML = ramen.name
            document.querySelector('.restaurant').innerHTML = ramen.restaurant
            document.querySelector('.detail-image').src = ramen.image
            document.querySelector('#rating-display').innerHTML = ramen.rating
            document.querySelector('#comment-display').innerHTML = ramen.comment
          })
    
          
        
    }

// run function

init()





})