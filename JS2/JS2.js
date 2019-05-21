
var pedrapapeltesoura = [
	"Pedra",
	"Papel",
	"Tesoura"
];

score = 0

while(true) {
	comp = pedrapapeltesoura[Math.ceil(Math.random()*3)]
	console.log("Escolha sua jogada: ")
	console.log("1-Pedra")
	console.log("2-Papel")
	console.log("3-Tesoura")
	option = pedrapapeltesoura[parseInt(prompt()) - 1]
	console.log("O computador jogou " + comp)
	if (option == comp) {
		console.log("A rodada empatou")
	}else if ((option == "Pedra" && comp == "Papel") ||  (option == "Papel" && comp == "Tesoura") || (option == "Tesoura" && comp == "Pedra")) {
		console.log("Você perdeu! A sua pontuação foi de " + score)
		break;
	}else{
		score++
		console.log("Pont = " + score)
	 	console.log("Você ganhou!")
	 }
}