var arr_mixto = [];
var a = Math.floor(Math.random() * 10) + 1
var c = Math.floor(Math.random() * 10) + 1
var m = 7;
var x1 = Math.floor(Math.random() * 10) + 1
var n = 10000;
var p = 0;

function generar(op) {

    for (var i = 0; i < n; i++) {
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
    //tiempo(arr_mixto);
    //exportar(arr_mixto);
    prueba_promedio();

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
  console.log(arr_mixto);
  var sum = 0;
  for(var i in arr_mixto){
    sum += arr_mixto[i];
  }
  var promedio = sum / n;
  var raiz = Math.sqrt(n);
  var denom = Math.sqrt((1/12));

  var numerador = (promedio - (1/2))*raiz;

  var resul = numerador / denom;
  resul = Math.abs(resul);
  //console.log('resul',resul);
  if(resul < 1.96){
    console.log('si que si');
    tiempo();
    //prueba();
  } else {
    console.log('no que no');
    location.reload();
  }


}

function prueba_frecuencia(arr){

}

function prueba(){
  for (var i = 0; i < 100; i++) {
    console.log(i,'->', pedir_dato());
  }
}


function pedir_dato(){
  //console.log('pos: ',p,' numero:', arr_mixto[p]);
  p++;
  return arr_mixto[p];

}





window.onload = function() {
    //funcion(1);
}
