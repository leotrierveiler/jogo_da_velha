const casas = document.getElementsByTagName ('input');
const btn_reiniciar = document.getElementById ('reiniciar');
const label_jogador = document.getElementById ('jogador');

var jogador = '_';
var vencedor = '_';

for (var i=0; i<9; i++) {
    casas[i].addEventListener('click', (event) => {
        if ((event.target.value == "_") && (vencedor == "_")){
            event.target.value = jogador;
            event.target.style.color = label_jogador.style.color;

            trocaJogador ();

            vencedor = vitoria();
        }
    });
};

btn_reiniciar.addEventListener('click', (event) => {
    for (var i=0;i<9;i++){
        casas[i].value = "_";
        casas[i].color = "white";
        casas[i].style.backgroundColor = 'white';
    }

    vencedor = "_";

    sortearJogador ();
})

var sortearJogador = function () {
    if (Math.floor(Math.random() * 2) == 0) {
        jogador = "O";
        label_jogador.innerText = "O";
        label_jogador.style.color = "#F00"
    } else {
        jogador = "X";
        label_jogador.innerText = "X";
        label_jogador.style.color = "#00F"
    }
}

sortearJogador();

var trocaJogador = function () {
    if (jogador == "X") {
        jogador = "O";
        label_jogador.innerText = "O";
        label_jogador.style.color = "#F00";
    } else {
        jogador = "X";
        label_jogador.innerText = "X";
        label_jogador.style.color = "#00F"
    }
}

var vitoria = function () {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#00FF00';
		casas[1].style.backgroundColor='#00FF00';
		casas[2].style.backgroundColor='#00FF00';
        casas[0].style.color = 'white';
        casas[1].style.color = 'white';
        casas[2].style.color = 'white';
        casas[3].style.color = 'black';
        casas[4].style.color = 'black';
        casas[5].style.color = 'black';
        casas[6].style.color = 'black';
        casas[7].style.color = 'black';
        casas[8].style.color = 'black';

		return casas[0].value;

	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.backgroundColor='#00FF00';
		casas[4].style.backgroundColor='#00FF00';
		casas[5].style.backgroundColor='#00FF00';
        casas[3].style.color = 'white';
        casas[4].style.color = 'white';
        casas[5].style.color = 'white';
        casas[0].style.color = 'black';
        casas[1].style.color = 'black';
        casas[2].style.color = 'black';
        casas[6].style.color = 'black';
        casas[7].style.color = 'black';
        casas[8].style.color = 'black';

		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.backgroundColor='#00FF00';
		casas[7].style.backgroundColor='#00FF00';
		casas[8].style.backgroundColor='#00FF00';
        casas[6].style.color = 'white';
        casas[7].style.color = 'white';
        casas[8].style.color = 'white';
        casas[0].style.color = 'black';
        casas[1].style.color = 'black';
        casas[2].style.color = 'black';
        casas[3].style.color = 'black';
        casas[4].style.color = 'black';
        casas[5].style.color = 'black';

		return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#00FF00';
		casas[3].style.backgroundColor='#00FF00';
		casas[6].style.backgroundColor='#00FF00';
        casas[0].style.color = 'white';
        casas[3].style.color = 'white';
        casas[6].style.color = 'white';
        casas[1].style.color = 'black';
        casas[2].style.color = 'black';
        casas[4].style.color = 'black';
        casas[5].style.color = 'black';
        casas[7].style.color = 'black';
        casas[8].style.color = 'black';

		return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.backgroundColor='#00FF00';
		casas[4].style.backgroundColor='#00FF00';
		casas[7].style.backgroundColor='#00FF00';
        casas[1].style.color = 'white';
        casas[4].style.color = 'white';
        casas[7].style.color = 'white';
        casas[0].style.color = 'black';
        casas[2].style.color = 'black';
        casas[3].style.color = 'black';
        casas[5].style.color = 'black';
        casas[6].style.color = 'black';
        casas[8].style.color = 'black';

		return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#00FF00';
		casas[5].style.backgroundColor='#00FF00';
		casas[8].style.backgroundColor='#00FF00';
        casas[2].style.color = 'white';
        casas[5].style.color = 'white';
        casas[8].style.color = 'white';
        casas[0].style.color = 'black';
        casas[1].style.color = 'black';
        casas[3].style.color = 'black';
        casas[4].style.color = 'black';
        casas[6].style.color = 'black';
        casas[7].style.color = 'black';

		return casas[2].value;

	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#00FF00';
		casas[4].style.backgroundColor='#00FF00';
		casas[8].style.backgroundColor='#00FF00';
        casas[0].style.color = 'white';
        casas[4].style.color = 'white';
        casas[8].style.color = 'white';
        casas[1].style.color = 'black';
        casas[2].style.color = 'black';
        casas[3].style.color = 'black';
        casas[5].style.color = 'black';
        casas[6].style.color = 'black';
        casas[8].style.color = 'black';

		return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#00FF00';
		casas[4].style.backgroundColor='#00FF00';
		casas[6].style.backgroundColor='#00FF00';
        casas[2].style.color = 'white';
        casas[4].style.color = 'white';
        casas[6].style.color = 'white';
        casas[0].style.color = 'black';
        casas[1].style.color = 'black';
        casas[3].style.color = 'black';
        casas[5].style.color = 'black';
        casas[7].style.color = 'black';
        casas[8].style.color = 'black';

		return casas[2].value;
	}
	
    return '_';
}