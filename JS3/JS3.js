var counter = function(init){
	
	return function(){
		return ++init;
	}
}

var incre = counter(1);

console.log('Primeira chamada' + incre());
console.log('Segunda chamada' + incre());
console.log('Terceira chamada'+ incre());