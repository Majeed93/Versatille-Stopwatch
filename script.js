window.onload = function (){
	 
	 //Global var 
	 
	 var seconds = 00;
	 var tens    = 00;
	 
	//Local var
	
	var appendTens    = document.getElementById("tens");
	var appendSeconds = document.getElementById("seconds");
	
	var buttonStart   = document.getElementById("button-start");
	var buttonStop    = document.getElementById("button-stop");
	var buttonReset   = document.getElementById("button-reset");
	
	var Interval;
	
	/* start Timer*/
	
	function startTimer(){
		tens++;
		if(tens < 9){
			appendTens.innerHTML = "0" + tens;
			}
			
		if(tens > 9){
			appendTens.innerHTML = tens;
			}
			
			if(tens >60){
				seconds++;
				appendSeconds.innerHTML = "0" +seconds;
				tens=0;
				appendTens.innerHTML ="0"+ tens;
				
			if (seconds > 9){
				appendSeconds.innerHTML = seconds;
			}
				
				}	
					
		}
		
	
		
		
	
	/*Button To  start Timer*/
	
	buttonStart.onclick = function(){
	clearInterval(Interval);
	Interval = setInterval(startTimer, 10); //startTimer is our function will make it right now	
		}
		
    /* Button to Stop Timer*/
	
	buttonStop.onclick = function(){
		clearInterval(Interval);
		}
		
	/*Button to Reset Timer*/
	buttonReset.onclick = function(){
		clearInterval(Interval);
		tens = "00";
		seconds = "00";
		appendTens.innerHTML = tens;
		appendSeconds.innerHTML = seconds;}	

	}