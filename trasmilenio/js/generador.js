var arr_mixto = [];
var a = 5;
var c = 7;
var m = 8;
var x1 = 4;

function funcion(op) {

    for (var i = 0; i < 1000; i++) {
      //console.log(i);
        if (op == 1) { //mixto
          //console.log('x1',x1);
          var div = x1/m;
          //console.log('div',div);
          repetidos(arr_mixto,div);
          arr_mixto.push(div);
            x1 = mixto(x1, a, c, m);
            //console.log('x1-2',x1);



        } else if(op == 2){ //multi
            x1 = multi(x1, a, m);
        }
    }
    console.log(arr_mixto)
    exportar(arr_mixto);

}

function mixto(semilla, a, c, m) {
    //x1 = (aX + c) mod m
    var mul = a * semilla;
    var sum = mul + c;
    var x1 = sum % m;
    //console.log( x1 / m);
    return x1;

}

function multi(semilla, a, m) {
    //x1 = (aX ) mod m
    var multi = a * semilla;
    var x1 = multi % m;
    return x1;
}

function repetidos(arr, n){
  //console.log('arr',arr);
  for(var i in arr){
    if(arr[i] == n){
      console.log('es repetido', n, arr[i], i, m);
      m = m*2;
    }
  }
}


function prueba_promedio(){

}





window.onload = function() {
    //funcion(1);
}
