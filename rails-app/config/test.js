for(var i = 100; 0 < i; i--){
	if ( i % 3 === 0 && i % 5 === 0 ){
		console.log("FizzBuzz")
	} else if (i % 5 === 0 ){
		console.log("buzz")
	} else if (i % 3 === 0){
		console.log("fizz")
	}
}