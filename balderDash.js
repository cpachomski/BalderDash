(function(){

	//runner
	setTime();
	setDate();

	setInterval(function() {
		setTime();
	}, 1000)


	function setTime() {
		var currentTime = new Date();
		var mer = 'am';
		var h = currentTime.getHours();
			var m = currentTime.getMinutes();
		var wh = digits[h];
		var wm;

		//convert to 12 hour time and then into words
		//update am/pm
		if (h >= 12) {
			h -= 12;
			mer = 'pm';
			wh = digits[h];
		};

		//convert minutes to words
		switch (true) {
			case m === 0: 
				wm = '';
				break;
			case m < 10:
				wm = "o' " + digits[m];
				break;
			case m < 20:
				var lastDigit = m.toString().split('')[1];
				wm = teens[lastDigit-1];
				break;
			default:
				var digitsArray = m.toString().split('');
				tw = tens[digitsArray[0]-1];
				sw = digits[digitsArray[1]];
				wm = tw + ' ' + sw;
				break;
		};

		document.getElementById('time--hour').innerHTML = wh;
		document.getElementById('time--minutes').innerHTML = wm;
		document.getElementById('time--meridian').innerHTML = mer;
	};


	function setDate() {
		var currentDate = new Date();
		var d = currentDate.getDay();
		var m = currentDate.getMonth();
		var y = parseInt(currentDate.getFullYear().toString().substring(2));
		var date = (currentDate.getDate()) + 1;
		var wd = days[d];
		var wm = months[m];
		var wdate, wy;



		//convert date day into words
		switch (true) {
			case date < 10:
				wdate = digitsth[date]
				break;
			case date < 20:
				var lastDigit = date - 10;
				wdate = ths[lastDigit-1];
				break;
			case date < 30:
				var lastDigit = date - 20;

				if (date === 20) {
					wdate = 'twentieth';
					break;
				}

				wdate = 'twenty ' + digitsth[lastDigit-1];
				break;
			default:
				wdate = (date === 30) ? 'thirtieth' : 'thirty first';
				break;
		};

		//convert year into words
		var milleniumCentury = 'two thousand and ';
		//find the last two digits of the year
		switch (true) {
			case y < 20:
				wy = milleniumCentury + teens[y-11]
				break;
			case y < 30:

				break;
			case y < 40:

				break;
		}

		document.getElementById('date--year').innerHTML = wy;
		document.getElementById('date--weekday').innerHTML = wd;
		document.getElementById('date--month').innerHTML = wm;
		document.getElementById('date--date').innerHTML = wdate;
	};

})();