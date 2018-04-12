/* 
      Main JavaScript file 
      Project Hyre Coind Challenge.

  */

  // wait function
  function resolveAfterSeconds() {
			return new Promise(resolve => {
    		setTimeout(() => {
      		resolve('resolved');
    	}, 1000);
  });
}
// Async function that will finished process as per input
async function asyncCall() {
	var waitingTime = document.getElementById("timeAmount").value;
	if(waitingTime != ""){
  	for (var i = waitingTime; i > 0 ; i--) {
  		document.getElementById("demo").innerHTML = "Process will finished in " + i + " seconds.";
	    var result = await resolveAfterSeconds();
	}
	document.getElementById("demo").innerHTML ="Process finished";
  }
  	else{
    document.getElementById("errorMsg").innerHTML = "Please enter input!";
  	}
}

function validate(evt) {
  document.getElementById("demo").innerHTML = "";
  document.getElementById("errorMsg").innerHTML = "";
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    document.getElementById("errorMsg").innerHTML = "We only accept integer inputs.";
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
