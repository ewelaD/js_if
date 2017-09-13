var a = prompt('Enter a'),
	b = prompt('Enter b'),
	value = (a * a) + (2 * a * b) - (b * b);
if (!(typeof(a) === 'number') && (typeof(b) === 'number')) {	
	alert('Nieprawidłowe dane');
} else {
	alert('Result of calculating is: ' + value);
}
alert('Result of calculating is: ' + value);
if (typeof(value) === 'NaN') {
	alert('Nieprawidłowe dane');
} else if (value < 0) {
	alert('Wynik ujemny');
} else if (value == 0) {
	alert('Wyszło zero');
} else {
	alert('Wynik dodatni');
};

