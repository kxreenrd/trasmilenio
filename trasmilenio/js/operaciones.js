
var habitantes = 300000;
var adultos = habitantes * 0.9; //espacio = 0.5m^2 //270.000
var discapacitados = habitantes * 0.05; //espacio = 1m^2 //13.500
let capacidad_estacion = 430;//430;
let capacidad_bus = 275;//275;
var tiempo_llegada = 5;
var tiempo_espera = 1;
var h_inicio = 4; //4am
var h_fin = 23; // 11pm
var h_pico1_i = '5:30am';
var h_pico1_f = '8:00am';
var h_pico2_i = '4:30pm';
var h_pico2_f = '8:00pm';
var time_interval = 1000;//10min * 60 = 600s * 1000 = 600.000
var time_total = 600;
var tiempo_suma = 0;
var usu_actu = 0; //usuarios actuales
var d;
var u = 0; //numero usuario

var bus_a = 0;
var bus_b = 0;
var bus_c = 0;
var bus_d = 0;

function tiempo(data) {

    //d = data.split(',');
    d = data;//.split(',');
    var n = 0;
    var l = document.getElementById("contador");
    var usu_ac = document.getElementById("usuarios_actuales");
    var im = window.setInterval(function () {
      hora(n);
        if (n < time_total) {
            l.innerHTML = n; //tiempo
            //console.log(d[n]);
            var ent = d[n] * 10;
            var round = enteros(ent);
            usu_actu += round;
            //console.log('usu_actu', usu_actu);
            if (usu_actu < capacidad_estacion) {
                ingreso_estacion(usu_actu, d[n], round);
                document.getElementById('c_estacion').innerHTML = usu_actu;
                usu_ac.innerHTML = usu_actu; //usuarios actuales
            } else {
                clearInterval(im);
                ingreso_estacion(-1);
                console.log('ACABO', usu_actu, u);
            }



            n++;
        }
        /*if (tiempo_suma >= time_total) {
            clearInterval(im);
        }
        tiempo_suma = tiempo_suma + time_interval;*/

      }, time_interval);

}

function hora(n){
  var div = document.getElementById('tiempo');
  //console.log(n);

  var horas = 4, minutos = Math.round(n);
  //console.log('minutos1',minutos)
  if(minutos%5==0 && minutos > 4){
    console.log(minutos,'minuto chao', chai);
    buses();
  }
  if(minutos >= 60){
      var min = Math.trunc(minutos/60);
      horas += min;
      minutos -= (min*60);

  }
  //console.log('minutos2',minutos)

  //console.log('horas',horas,'minutos',minutos)
  var v_m = (minutos < 10)? '0'+minutos: minutos;
  div.innerHTML = horas+':'+v_m;
}
/*
 Devuelve el numero aleatorio decimal en entero
 */
function enteros(ent) {

    var round = 0;
    if (ent >= 1) {
        round = Math.round(ent);
    } else {
        ent *= 10;
        round = Math.round(ent);
    }
    //console.log(round);
    return round;
}
/*
 Valida el ingreso a la estación
 */
function ingreso_estacion(ingreso, n = null, cant = null) {
    var div = document.getElementById('estacion');

    if (ingreso < 0) {
        div.style.border = '2px solid #ec7c0d';
        div.classList.add('animated', 'flash');
        console.log('aqui que', usu_actu);
    } else {
        //u++;
        console.log('u1->', u);
        console.log(cant);
        if (cant > 0) {
            var inter = time_interval / cant;
            var i = 1;
            var it = window.setInterval(function () {
                u++;
                var node = document.createElement("div");
                node.id = 'p_' + u;
                //console.log(,u)
                node.innerHTML = u;
                node.className = tipo_persona(n) + ' animated bounceInLeft';
                document.getElementById("estacion").appendChild(node);
                if (i == cant) {
                    clearInterval(it);
                }
                a_que_bus(n, node, u, i);
                i++
                //clearInterval(it);
            }, inter);
            //console.log('it',it);
        }
        //u++;
    }
}


/*

 */
function tipo_persona(rnd) {
    var rt;
    if (rnd > 0.6) {
        rt = 'rombo';
    } else if (rnd < 0.05) {
        rt = 'cuadrado ';
    } else {
        rt = 'circulo';
    }
    return rt;
}


function a_que_bus(rnd, node, u, i) {
    if (rnd > 0 && rnd <= 0.25) {
        if (bus_a < capacidad_bus) {
            style_person('#007bff', 'bounceInUp', 'busa');
            document.getElementById('c_ba').innerHTML = bus_a+' A';
            bus_a++;
        }
    } else if (rnd > 0.25 && rnd <= 0.5) {
        if (bus_b < capacidad_bus) {
            style_person('#17a2b8', 'bounceInUp', 'busb');
            document.getElementById('c_bb').innerHTML = bus_b+' B';
            bus_b++;
        }
    } else if (rnd > 0.5 && rnd <= 0.75) {
        if (bus_c < capacidad_bus) {
            style_person('#004085', 'bounceInDown', 'busc');
            document.getElementById('c_bc').innerHTML = bus_c+' C';
            bus_c++;
        }
    } else if (rnd > 0.75 && rnd <= 1) {
        if (bus_d < capacidad_bus) {
            style_person('#383d41', 'bounceInDown', 'busd');
            document.getElementById('c_bd').innerHTML = bus_d+' D';
            bus_d++;
        }
    }
}

function style_person(color, movimiento, bus) {
  console.log('u->',u);
    if (u > 1) {
        var at = document.getElementById('p_' + (u - 1));
        var cll = (at.getAttribute('class')).split(' ');
        //at.style.background = color;
        at.className = cll[0] + ' animated ' + movimiento;
        $(at).detach().appendTo('#' + bus);
        console.log('usu_actu1',usu_actu);
        usu_actu--;
        console.log('usu_actu2',usu_actu);
        //console.log(' resta usu_actu', usu_actu);
    }

}
var chai=0;
function buses(){
  chai++;
  document.getElementById('busa').classList.add('animated',  'bounceInLeft');
  document.getElementById('busb').classList.add('animated',  'bounceInLeft');

  document.getElementById('busc').classList.add('animated',  'bounceInRight');
  document.getElementById('busd').classList.add('animated',  'bounceInRight');
  setTimeout(function(){
    document.getElementById('busa').classList.remove('animated',  'bounceInLeft');
    document.getElementById('busb').classList.remove('animated',  'bounceInLeft');
    document.getElementById('busc').classList.remove('animated',  'bounceInRight');
    document.getElementById('busd').classList.remove('animated',  'bounceInRight');
  }, 900)
}


window.onload = function () {
    //tiempo();
    //setInterval(tiempo, 1000);
}


/*
 * Se definen 4 buses A,B,C y D
 * Donde A & B son de salida y C & D son de llegada
 *
 */
