var calc = require('/Users/Raul/Documents/DiplomadoJSE8&JEE7/JavaScript/Jasmine/calc.js');

describe('prueba de sumas', function(){
	it('suma de dos enteros positivos', function(){
		var resultado = calc.sum(4,5);
		expect(resultado).toBe(9);
	});
	it('suma de dos enteros megativos', function(){
		var resultado = calc.sum(-4,-5);
		expect(resultado).toBe(-9);
	});
	it('suma de dos enteros igual a cadena', function(){
		var resultado = calc.sum(4,5);
		expect(resultado).toBe('9');
	});
});


