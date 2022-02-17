import Countdown from "./coutndown.js";

const tempoParaOWWB = new Countdown("12 mar 2022 00:01:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaOWWB.total[index];
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
