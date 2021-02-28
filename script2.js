(function (charAt) {
  var firstLetter = "";	
  var names = ["jaakov", "John", "jen", "Jason", "paul", "frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
  	if (names[i] === names[i].toLowerCase()) {
  		// console.log(names[i] + ": " + "lower");
  		firstLetter = "lower";
    } else {
  		// console.log(names[i] + ":" + "upper");
  		firstLetter = "upper";
  	}
  	return firstLetter;
  	console.log(names[i] + ": " + firstLetter);
  	// if (firstLetter === "J" || firstLetter === "j") {
  	// 	console.log("Goodbuy " + names[i]);
  	// } else {
  	// 	console.log("Hello " + names[i]);
  	// }
  }
 })();
