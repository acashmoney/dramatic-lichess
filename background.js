// console.log(document.getElementsByClassName('game__meta')[0]);

function callback() {
	console.log("test callback");

	const result = document.querySelector("#main-wrap > main > aside > div > section.status").innerHTML;
	computeResult(result);
}

// Determine result and play correct file
function computeResult(result) {
	if (result.includes("White is victorious")) {
		alert("white won");
	} else if (result.includes("Black is victorious")) {
		alert("black won");
	} else if (result.includes("Draw")) {
		alert("game drawn");
	} else {
		alert("Result not known");
	}
}

const myUsername = document.querySelector("#user_tag").innerHTML;
const game__meta = document.getElementsByClassName('game__meta')[0];
const config = { childList: true, subtree: true };

var soundLibrary = { win1: new Audio("assets/big_penis.mp3"), 
					 win2: new Audio("assets/lick_my_balls.mp3"),
					 loss1: new Audio("assets/didnt_mean_that.mp3"),
					 loss2: new Audio("assets/alright_tough_guy.mp3"),
					}

/*
const callback = function(mutationsList, observer) {
	console.log("test callback");

	result = document.querySelector("#main-wrap > maim > aside > div > section.status").innerHTML);

	for (const mutation of mutationsList) {
		if (mutation.type === 'childList') {
			result = document.querySelector("#main-wrap > maim > aside > div > section.status").innerHTML;
			computeResult();
		}
	}
}
*/

// Creating an observer instance linked to the defined callback function
const observer = new MutationObserver(callback);

//Begin observing the game__meta element for a result
observer.observe(game__meta, config);

// computeResult(result);