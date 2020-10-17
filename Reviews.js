const reviews = [
    {
        id:1,
        name:"Jane Doe",
        profession: "Web Developer",
        img: "",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus libero, hendrerit in urna lobortis, interdum pretium ante. Aliquam sodales velit sit amet tempor iaculis. Vivamus placerat est et arcu sodales, id venenatis nibh euismod. Pellentesque pretium gravida odio, vitae consequat sem dictum nec. Nulla a dui nec urna lacinia varius ac sit amet nulla. Vivamus varius nunc a volutpat faucibus. Mauris in tellus eget dui rutrum lacinia. Fusce feugiat massa sit amet erat aliquet, id pulvinar ipsum porta. Vivamus quam diam, laoreet id ex in, viverra sagittis nibh. Quisque sed condimentum ante. Curabitur enim purus, accumsan sed suscipit quis, feugiat dapibus risus. Quisque tincidunt, dolor sit amet posuere placerat, erat tellus elementum neque, id fermentum odio metus ornare diam."
    },
    {
        id:2,
        name:"John Doe",
        profession:"UI Designer",
        img:"",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus libero, hendrerit in urna lobortis, interdum pretium ante. Aliquam sodales velit sit amet tempor iaculis. Vivamus placerat est et arcu sodales, id venenatis nibh euismod. Pellentesque pretium gravida odio, vitae consequat sem dictum nec. Nulla a dui nec urna lacinia varius ac sit amet nulla. Vivamus varius nunc a volutpat faucibus. Mauris in tellus eget dui rutrum lacinia. Fusce feugiat massa sit amet erat aliquet, id pulvinar ipsum porta. Vivamus quam diam, laoreet id ex in, viverra sagittis nibh. Quisque sed condimentum ante. Curabitur enim purus, accumsan sed suscipit quis, feugiat dapibus risus. Quisque tincidunt, dolor sit amet posuere placerat, erat tellus elementum neque, id fermentum odio metus ornare diam."
    }
]

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//initialise counter
let currentItem = 0;

//loading first review
window.addEventListener("DOMContentLoader",function(){
    showPerson(currentItem);
});

//show person based on item 
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.profession;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem =0;
    }
    showPerson(currentItem);
})

//show prev person
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

//show random person 
randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length)
    console.log(currentItem);
    showPerson();
})