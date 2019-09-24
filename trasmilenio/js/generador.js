var arr_mixto = [];
var a = Math.floor(Math.random() * 10) + 1
var c = Math.floor(Math.random() * 10) + 1
var m = 7;
var x1 = Math.floor(Math.random() * 10) + 1

function generar(op) {

    for (var i = 0; i < 1000; i++) {
        if (op == 1) { //mixto

          var div = x1/m;
          repetidos(arr_mixto,div);
          arr_mixto.push(div);
            x1 = mixto(x1, a, c, m);

        } else if(op == 2){ //multi
            x1 = multi(x1, a, m);
        }
    }
    //console.log(arr_mixto)
    tiempo(arr_mixto);
    //exportar(arr_mixto);

}

function mixto(semilla, a, c, m) {
    //x1 = (aX + c) mod m
    //console.log('a',a,'c', c, 'm', m, 'x1', x1, 'semilla', semilla);
    var mul = a * semilla;
    var sum = mul + c;
    var x1 = sum % m;
    //console.log('r mixto', x1, (x1/m));
    return x1;

}

function multi(semilla, a, m) {
    //x1 = (aX ) mod m
    var multi = a * semilla;
    var x1 = multi % m;
    return x1;
}

function repetidos(arr, n){
  //console.log('arr',arr.length);
  for(var i in arr){
    if(arr[i] == n){
      //console.log('es repetido', n, arr[i], i, m);
      m = m*3;
      a = Math.floor(Math.random() * 10) + 1
      c = Math.floor(Math.random() * 10) + 1
      //var x1 = Math.random(10);
    }
  }
}


function prueba_promedio(){

}





window.onload = function() {
    //funcion(1);
}
