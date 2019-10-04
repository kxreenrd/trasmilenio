var habitantes = 300000;
var adultos = habitantes * 0.9; //espacio = 0.5m^2 //270.000
var discapacitados = habitantes * 0.05; //espacio = 1m^2 //13.500
let capacidad_estacion = 430; //430;
let capacidad_bus = 275; //275;


var h_pico1_i = '5:30am';
var h_pico1_f = '8:00am';
var h_pico2_i = '4:30pm';
var h_pico2_f = '8:00pm';

var time_interval = 100;
var time_total = 1140;


var usu_actu = 0; //usuarios actuales
var u = 0; //numero usuario

var bus_a = 0;
var bus_b = 0;
var bus_c = 0;
var bus_d = 0;

var buses_derecha = 0;
var buses_izquierda = 0;

var t_buses = {};

function tiempo() {
  
  console.log(g.arr());
     //d = data.split(',');
     //d = data;//.split(',');
     var n = 0;
     var l = document.getElementById("contador");
     var usu_ac = document.getElementById("usuarios_actuales");
     var im = window.setInterval(function() {
          hora(n);
          if (n < time_total) {
               l.innerHTML = n; //tiempo
               //console.log('>',d[n]);

               var ent = g.pedir_dato();
               //var ent = d[n] * 10;
               var round = enteros(ent);
               usu_actu += round;
               //console.log('usu_actu', usu_actu);
               if (usu_actu < capacidad_estacion) {
                    ingreso_estacion(usu_actu, g.pedir_dato(), round);
                    document.getElementById('c_estacion').innerHTML = usu_actu;
                    usu_ac.innerHTML = usu_actu; //usuarios actuales
               } else {
                    clearInterval(im);
                    ingreso_estacion(-1);
                    console.log('ACABO', usu_actu, u);
               }
               n++;
          } else {
               clearInterval(im);
          }
          /*if (tiempo_suma >= time_total) {
              clearInterval(im);
          }
          tiempo_suma = tiempo_suma + time_interval;*/

     }, time_interval);

}

function hora(n) {
     var div = document.getElementById('tiempo');
     //console.log(n);

     var horas = 4,
          minutos = Math.round(n);
     if (minutos % 5 == 0 && minutos > 4) {
          console.log(minutos, 'minuto chao', chai);
          t_buses[minutos + '_ida'] = {
               'bus_a': bus_a,
               'bus_b': bus_b,
               'bus_c': bus_c,
               'bus_d': bus_d
          };
          console.log(t_buses);
          buses(n, minutos);
     }
     if (minutos >= 60) {
          var min = Math.trunc(minutos / 60);
          horas += min;
          minutos -= (min * 60);

     }
     var v_m = (minutos < 10) ? '0' + minutos : minutos;
     div.innerHTML = horas + ':' + v_m;
     document.getElementById('time1').innerHTML = horas + ':' + v_m;
     //console.log('HORA:', horas, ':', v_m);
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
     //console.log('entero: ',round);
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
          //console.log('aqui que', usu_actu);
     } else {
          //u++;

          if (cant > 0) {
               var inter = time_interval / cant;
               var i = 1;
               var it = window.setInterval(function() {
                    u++;
                    var node = document.createElement("div");
                    node.id = 'p_' + u;
                    //console.log(,u)
                    //node.innerHTML = u;
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
     if (rnd > 0.6) { //adultos
          rt = 'rombo';
     } else if (rnd < 0.05) { //discapacitadas
          rt = 'cuadrado ';
     } else { //niños
          rt = 'circulo';
     }
     return rt;
}


function a_que_bus(rnd, node, u, i) {
     if (rnd > 0 && rnd <= 0.25) {
          if (bus_a < capacidad_bus) {
               style_person('#007bff', 'bounceInUp', 'busa');
               document.getElementById('c_ba').innerHTML = bus_a + ' A';
               bus_a++;
               buses_derecha++;
          }
     } else if (rnd > 0.25 && rnd <= 0.5) {
          if (bus_b < capacidad_bus) {
               style_person('#17a2b8', 'bounceInUp', 'busb');
               document.getElementById('c_bb').innerHTML = bus_b + ' B';
               bus_b++;
               buses_derecha++;
          }
     } else if (rnd > 0.5 && rnd <= 0.75) {
          if (bus_c < capacidad_bus) {
               style_person('#004085', 'bounceInDown', 'busc');
               document.getElementById('c_bc').innerHTML = bus_c + ' C';
               bus_c++;
               buses_izquierda++;
          }
     } else if (rnd > 0.75 && rnd <= 1) {
          if (bus_d < capacidad_bus) {
               style_person('#383d41', 'bounceInDown', 'busd');
               document.getElementById('c_bd').innerHTML = bus_d + ' D';
               bus_d++;
               buses_izquierda++;
          }
     }
}

function style_person(color, movimiento, bus) {
     //console.log('u->',u);
     if (u > 1) {
          var at = document.getElementById('p_' + (u - 1));
          var cll = (at.getAttribute('class')).split(' ');
          //at.style.background = color;
          at.className = cll[0] + ' animated ' + movimiento;
          $(at).detach().appendTo('#' + bus);
          //console.log('usu_actu1',usu_actu);
          usu_actu--;
          //console.log('usu_actu2',usu_actu);
          //console.log(' resta usu_actu', usu_actu);
     }

}
var chai = 0;

function buses(n, minutos) {
     chai++;
     document.getElementById('busa').classList.add('animated', 'bounceInLeft');
     document.getElementById('busb').classList.add('animated', 'bounceInLeft');
     document.getElementById('busc').classList.add('animated', 'bounceInRight');
     document.getElementById('busd').classList.add('animated', 'bounceInRight');
     setTimeout(function() {
          document.getElementById('busa').classList.remove('animated', 'bounceInLeft');
          //document.getElementById('busa').innerHTML = '';
          document.getElementById('busb').classList.remove('animated', 'bounceInLeft');
          //document.getElementById('busb').innerHTML = '';
          document.getElementById('busc').classList.remove('animated', 'bounceInRight');
          //document.getElementById('busc').innerHTML = '';
          document.getElementById('busd').classList.remove('animated', 'bounceInRight');
          //document.getElementById('busd').innerHTML = '';
     }, 900);
     //console.log('- ', pedir_dato(), n, u);

     /*bus_a = enteros(pedir_dato());
     bus_b = enteros(pedir_dato());
     bus_c = enteros(pedir_dato());
     bus_d = enteros(pedir_dato());*/
     //console.log('bus_a', bus_a, 'bus_b', bus_b, 'bus_c',bus_c, 'bus_d', bus_d);
     t_buses[minutos + '_llegada'] = {
          'bus_a': bus_a,
          'bus_b': bus_b,
          'bus_c': bus_c,
          'bus_d': bus_d
     };
     respuestas();
}

function respuestas() {
     document.getElementById('q_1').innerHTML = buses_derecha + buses_izquierda;
     document.getElementById('q_2').innerHTML = buses_derecha;
     document.getElementById('q_3').innerHTML = buses_izquierda;
}
