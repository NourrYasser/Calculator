function addChar(input,character) {
	if(input.value == "0")
		input.value = character
	else
		input.value += character
}

function compute(form) {
    form.display.value = eval(form.display.value);
}


