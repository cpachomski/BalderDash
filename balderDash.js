(function(){

	//runner
	setTime();
	setInterval(function() {
		setTime();
	}, 1000)


	function setTime() {
		var currentTime = new Date();
		var mer = 'pm'
		var h = currentTime.getHours();
		var m = currentTime.getMinutes();
		var wh, wm;

		//convert to 12 hour time and then into words
		//update am/pm
		if (h > 12) {
			h -= 12;
			mer = 'am';
			wh = digits[h-1];
		};

		//convert minutes to words
		switch (true) {
			case m < 10:
				wm = "O' " + digits[m-1];
				break;
			case m < 20:
				var lastDigit = m.toString().split('')[1];
				wm = teens[lastDigit-1];
				break;
			default:
				var digitsArray = m.toString().split('');
				tw = tens[digitsArray[0]-1];
				sw = digits[digitsArray[1]-1];
				wm = tw + ' ' + sw;
				break;
		};

		document.getElementById('time--hour').innerHTML = wh;
		document.getElementById('time--minutes').innerHTML = wm;
		document.getElementById('time--meridian').innerHTML = mer;
	};

})();