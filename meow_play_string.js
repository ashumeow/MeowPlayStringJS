// @ashumeow - 2015
function meow_play_string(meowConvert, meowType) {
	////////////////////////////
	// for binary conversion
	///////////////////////////
	if(meowType == 'binary') {
		// for removing whitespace
		meowConvert = meowConvert.replace(/ /g,'');
		// for removing line space
		meowConvert = meowConvert.replace(/\n/g,'');
		var meow_ascii = '';
		var meow_cur_byte;
		//if binary doesn't reach upto 8 digit chunks (bytes)
		if (meowConvert.length % 8 != 0) {
			return 'Binary length is not divisible by eight.';
		} else {
			//splitting into bytes
			for (var x=0; x < meowConvert.length/8; x++) {
				// Fetching the current byte
				meow_cur_byte = meowConvert.substring(x*8, (x*8)+8);
				// Fetching the charcode from meow_cur_byte and then, adding it to meow_ascii
				meow_ascii += String.fromCharCode(parseInt(meow_cur_byte, 2));
			}
			return meow_ascii;
		}
	}
	//////////////////////////////////////
	// For ASCII (i.e. text) conversion
	/////////////////////////////////////
	if (meowType == 'ascii') {
		var meow_binary = '';
		var meow_cur_alpha;
		// Separating the letters
		for (var x=0; x < meowConvert.length; x++) {
			// Fetching current alphabet, then pulling out the charcode and then, converting it to binary
			meow_cur_alpha = meowConvert.substring(x, x + 1).charCodeAt(0).toString(2);
			// if the byte is less than eight values, then prepend some zeros
			if (meow_cur_alpha.length < 8) {
				while(meow_cur_alpha.length < 8) {
					meow_cur_alpha = '0' + meow_cur_alpha;
				}	
			}
			meow_binary += meow_cur_alpha;
		}
		return meow_binary;
	}
}