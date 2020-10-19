const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal")

//open modal when click on btn
modalBtn.onclick = function(){
    modal.style.display = "block";
}
//close modal
closeBtn.onclick = function(){
    modal.style.display = "none";
}
//close when click outside of modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none"
    }
}

/* EXAMPLE HTML IMPLEMENTATION
<button class="modal-btn">Open Modal</button>
<div class="modal">
    <div class="modal-content">
        <span class="close-modal">&times</span>
        <p>Modal content goes here ...</p>
    </div>
</div>
*/