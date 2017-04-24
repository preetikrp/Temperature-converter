console.log("Hellow JS");


function conTemperature() {
	//initializing variables.
	var inputtemp = document.getElementById("inputtemp");
	var fselected = document.getElementById("fselected");
	var cselected = document.getElementById("cselected");
	var submitbtn = document.getElementById("submitbtn");
	var clearbtn = document.getElementById("clearbtn");
	var convtemp = 0;
	var convtemp1 = document.getElementById("converted-temprature");

	if(fselected.checked){
		//Converting Celcius to Farenheit.
		
		convtemp = (inputtemp.value * 1.8) + 32;
		

		convtemp1.innerHTML = inputtemp.value +"C = " + convtemp + "F";
		changeColor(convtemp,"f");
	}
	else {
		//Converting Farenheit to Celcius.
		
			convtemp = (inputtemp.value - 32) / 1.8;
			convtemp1.innerHTML = inputtemp.value +"F = " + convtemp + "C";
			changeColor(convtemp,"c");



		}
		
	}
	function changeColor (temp, scale){

var convtemp = document.getElementById("converted-temprature");

		convtemp.classList.remove("red", "blue", "green")
		if (scale === "f") {
			//Assigning required color based on the output
			if(temp > 90){
				convtemp.classList.add("red");
			} else if (temp < 32){
				convtemp.classList.add("blue");
			} else {
				convtemp.classList.add("green");        
			}
		} else{
			if (temp > 32){
				convtemp.classList.add("red");
				}
				else if (temp < 0){
					convtemp.classList.add("blue");

				} else {
					convtemp.classList.add("green");
				}
			
			}
		}
