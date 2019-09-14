
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
var time_interval = 100;//10min * 60 = 600s * 1000 = 600.000
var time_total = 600000;
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
        if (n < time_total) {
            l.innerHTML = n; //tiempo
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
            console.log(n,n%5);
            if(n%5 == 0 && n >= 5){
                console.log('minuto chao');
                console.log('a:', bus_a)
                 console.log('b:', bus_b)
                 console.log('c:', bus_c)
                 console.log('d:', bus_d)

            }
            if(n%33 == 0){}
            n++;
        }
        if (tiempo_suma >= time_total) {
            clearInterval(im);
        }
        tiempo_suma = tiempo_suma + time_interval;

    }, time_interval);

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
        /*console.log('a:', bus_a)
         console.log('b:', bus_b)
         console.log('c:', bus_c)
         console.log('d:', bus_d)*/
    } else {
        //u++;
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
    //setTimeout(function(){
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
    /*console.log('a:', bus_a)
    console.log('b:', bus_b)
    console.log('c:', bus_c)
    console.log('d:', bus_d)*/

    //},100);
}

function style_person(color, movimiento, bus) {

    if (u > 1) {
        var at = document.getElementById('p_' + (u - 1));
        var cll = (at.getAttribute('class')).split(' ');
        //at.style.background = color;
        at.className = cll[0] + ' animated ' + movimiento;
        $(at).detach().appendTo('#' + bus);
        usu_actu--;
        //console.log(' resta usu_actu', usu_actu);
    }

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
