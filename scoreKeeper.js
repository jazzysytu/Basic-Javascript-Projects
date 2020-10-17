var quantity = document.querySelector("#quantity")
var finalscore = document.querySelector("#finalscore")

var p1score =  document.querySelector("#p1score")
var p2score =  document.querySelector("#p2score")

var p1 = 0
var p2 = 0
var matchOver = false

var p1Button = document.querySelector("#p1Button")
var p2Button = document.querySelector("#p2Button")
var resetButton = document.querySelector("#resetButton")


p1Button.addEventListener("click", function(){


	if((parseInt(p1score.textContent) < parseInt(finalscore.textContent)) && !matchOver) {
		p1score.textContent = ++p1

		if(parseInt(p1score.textContent) == parseInt(finalscore.textContent)) {
		matchOver =true
		p1score.style.color = "green"
		p2score.style.color = "red"
		}
	} 
	
})

p2Button.addEventListener("click", function(){

	
	if((parseInt(p2score.textContent) < parseInt(finalscore.textContent)) && !matchOver) {
		p2score.textContent = ++p2
		if(parseInt(p2score.textContent) == parseInt(finalscore.textContent)) {
		matchOver =true
		p2score.style.color = "green"
		p1score.style.color = "red"
		}
	}
	
})

quantity.addEventListener("change", function(){
	finalscore.textContent = quantity.value
})


resetButton.addEventListener("click" , function(){
	p1score.textContent = 0
	p2score.textContent = 0
	p1=0
	p2=0
	matchOver=false
	p1score.style.color = "black"
	p2score.style.color = "black"

})
