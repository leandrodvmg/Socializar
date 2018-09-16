function tocar(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    arquivo_de_midia.play();
}

function pausar(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    arquivo_de_midia.pause();
}

function parar(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    arquivo_de_midia.pause();
    arquivo_de_midia.currentTime = 0;
}

function tela_cheia(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    arquivo_de_midia.webkitEnterFullScreen();
}

function aumentar_vomume(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    arquivo_de_midia.volume += 0.1;
}

function diminuir_volume(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    arquivo_de_midia.volume -= 0.1;
}

function duracao(id_do_audio) {
    var arquivo_de_midia = document.getElementById(id_do_audio);
    alert("Duração: " + arquivo_de_midia.duration + " e tempo transcorrido: " + arquivo_de_midia.currentTime);
}

var vids = $("audio");
$.each(vids, function() {
    this.controls = false;
});
