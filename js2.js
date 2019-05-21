
var jokenpo = [
	"Pedra",
	"Papel",
	"Tesoura"
];

pont = 0

while(true) {
	comp = jokenpo[Math.ceil(Math.random()*3)]
	console.log("Escolha sua jogada: ")
	console.log("1-Pedra")
	console.log("2-Papel")
	console.log("3-Tesoura")
	option = jokenpo[parseInt(prompt()) - 1]
	console.log("O computador jogou " + comp)
	if (option == comp) {
		console.log("A rodada empatou")
	}else if ((option == "Pedra" && comp == "Papel") ||  (option == "Papel" && comp == "Tesoura") || (option == "Tesoura" && comp == "Pedra")) {
		console.log("Você perdeu! A sua pontuação foi de " + pont)
		break;
	}else{
		pont++
		console.log("Pont = " + pont)
	 	console.log("Você ganhou!")
	 }
}