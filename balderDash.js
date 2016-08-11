(function(){




	function setTime() {
		var currentTime = new Date();
		var mer = 'am'
		var h = currentTime.getHours();
		var m = currentTime.getMinutes();

		if (h > 12) {
			h -= 12;
			mer = 'pm';
		};

		document.getElementById('time--hour').innerHTML = h;
		document.getElementById('time--minutes').innerHTML = m;
		document.getElementById('time--meridian').innerHTML = mer;
	};



	setTime();
	setInterval(function() {
		setTime();
	}, 1000)

		

})();