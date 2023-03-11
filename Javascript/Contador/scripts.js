const incrementar = document.getElementById('incrementar')
const numerospan = document.getElementById('contador')
const decrementar = document.getElementById('decrementar')
const zerar = document.getElementById('zerar')

let contador = 0;
numerospan.innerHTML = contador;

incrementar.addEventListener('click', function(){
    contador++
    numerospan.innerHTML = contador;
});

decrementar.addEventListener('click', function(){
    contador--
    numerospan.innerHTML = contador;
});

zerar.addEventListener('click', function(){
    numerospan.innerHTML = contador = 0;
})
