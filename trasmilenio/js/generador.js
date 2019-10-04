var arr_mixto = [];
var a = Math.floor(Math.random() * 10) + 1
var c = Math.floor(Math.random() * 10) + 1
var m = 7;
var x1 = Math.floor(Math.random() * 10) + 1
var n = 10;
var p = 0;
var opcion = 1;


class generador {
  generar(op) {
    opcion = op;
    console.log('2-> a ', a, 'c ', c, 'm ', m, 'semilla ', x1, 'opcion ', opcion);

    for (var i = 0; i < n; i++) {
      if (op == 1) { //mixto

        var div = x1 / m;
        g.repetidos(arr_mixto, div);
        arr_mixto.push(div);
        x1 = g.mixto(x1, a, c, m);

      } else if (op == 2) { //multi
        arr_mixto.push(x1);
        x1 = multi(x1, a, m);
      }
    }
    g.prueba_promedio();

  }

  mixto(semilla, a, c, m) {
    //x1 = (aX + c) mod m
    //console.log('a',a,'c', c, 'm', m, 'x1', x1, 'semilla', semilla);
    var mul = a * semilla;
    var sum = mul + c;
    var x1 = sum % m;
    //console.log('r mixto', x1, (x1/m));
    return x1;

  }

  multi(semilla, a, m) {
    //x1 = (aX ) mod m
    var multi = a * semilla;
    var x1 = multi % m;
    return x1;
  }

  repetidos(arr, n) {
    //console.log('arr',arr.length);
    for (var i in arr) {
      if (arr[i] == n) {
        //console.log('es repetido', n, arr[i], i, m);
        m = m * 3;
        a = Math.floor(Math.random() * 10) + 1
        c = Math.floor(Math.random() * 10) + 1
        //var x1 = Math.random(10);
      }
    }
  }


  prueba_promedio() {
    console.log('arr_mixto ', arr_mixto);
    var sum = 0;
    for (var i in arr_mixto) {
      sum += arr_mixto[i];
    }
    var promedio = sum / n;
    var raiz = Math.sqrt(n);
    var denom = Math.sqrt((1 / 12));

    var numerador = (promedio - (1 / 2)) * raiz;

    var resul = numerador / denom;
    resul = Math.abs(resul);
    //console.log('resul',resul);
    if (resul < 1.96) {
      console.log('si que si');
      //tiempo();
      g.prueba_frecuencia();
    } else {
      console.log('no que no');
      arr_mixto = [];
      g.generar(opcion);
    }


  }

  prueba_frecuencia() {
    var pq1 = 0,
      pq2 = 0,
      pq3 = 0,
      pq4 = 0,
      pq5 = 0;
    for (var i in arr_mixto) {
      if (arr_mixto[i] >= 0 && arr_mixto[i] < 0.2) {
        pq1++;
      } else if (arr_mixto[i] >= 0.2 && arr_mixto[i] < 0.4) {
        pq2++;
      } else if (arr_mixto[i] >= 0.4 && arr_mixto[i] < 0.6) {
        pq3++;
      } else if (arr_mixto[i] >= 0.6 && arr_mixto[i] < 0.8) {
        pq4++;
      } else if (arr_mixto[i] >= 0.8 && arr_mixto[i] <= 1) {
        pq5++;
      } else {
        console.log('no esta en ningun rango, ', arr_mixto[i]);
      }
    }
    var fe = n / 5;
    for (var i = 0; i < 5; i++) {

    }
    var resta = pq1 - fe;
    var den = Math.pow(resta, 2);
    var res = den / fe;
    console.log('paquete 1:', pq1);
    console.log('paquete 2:', pq2);
    console.log('paquete 3:', pq3);
    console.log('paquete 4:', pq4);
    console.log('paquete 5:', pq5);
    console.log('fe:', fe, 'res: ', res, 'x2: ', Math.pow(res, 2));
    document.getElementById('aprobar').style.display = 'block';
    

  }

  prueba() {
    for (var i = 0; i < 100; i++) {
      console.log(i, '->', g.pedir_dato());
    }
  }


  pedir_dato() {
    console.log('pos: ', p);
    p++;
    return arr_mixto[p];

  }


  vista(id) {
    opcion = id;
    if (id == 1) {
      document.getElementById('g_c').style.display = 'block';
    } else {
      document.getElementById('g_c').style.display = 'none';
    }
  }

  definir() {
    a = document.getElementById('a').value;
    c = document.getElementById('c').value;
    m = document.getElementById('m').value;
    x1 = document.getElementById('semilla').value;
    if (!a || !m || !x1) {
      console.log('vaciooooo');
      document.getElementById('alert').style.display = 'block';
    } else {
      document.getElementById('alert').style.display = 'none';
      console.log('a ', a, 'c ', c, 'm ', m, 'semilla ', x1, 'opcion ', opcion);
      //g.arr();
      g.generar(opcion);


    }

  }

  arr(){
    console.log(arr_mixto);
    return arr_mixto;
  }
}
const g = new generador();
