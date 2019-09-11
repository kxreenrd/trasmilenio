
var habitantes = 300000;
var adultos = habitantes*0.6; //espacio = 0.5m^2
var discapacitados = habitantes*0.05; //espacio = 1m^2
var p_usan = habitantes*0.9;
var capacidad_estacion = 430;
var capacidad_bus = 275;
var tiempo_llegada = 5;
var tiempo_espera = 1;
var h_inicio = 4; //4am
var h_fin = 23; // 11pm
var h_pico1_i = '5:30am';
var h_pico1_f = '8:00am';
var h_pico2_i = '4:30pm';
var h_pico2_f = '8:00pm';

var usu_actu = 0;
var d;

function tiempo(data){
  d = data.split(',');
  //console.log(d);

    var sum = 0;
    var n = 0;

    var semilla = 8;
    var l = document.getElementById("contador");
    var usu_ac = document.getElementById("usuarios_actuales");;
    console.log();
    window.setInterval(function(){
        if(n < d.length){
            l.innerHTML = n;

            console.log(n, d[n], d[n]*10);
            var ent = d[n]*10;
            n++;
            var round = 0;
            if(ent >= 1){
              round = Math.round(ent);
            } else {
              ent *= 10;
              round = Math.round(ent);
            }

            sum += round;
            usu_actu = sum;
            usu_ac.innerHTML = usu_actu;
            if(sum < capacidad_estacion){
                ingreso_estacion(sum, d[n]);
            } else {
                ingreso_estacion(-1);
            }
        }

    },100);
}

function ingreso_estacion(ingreso, n){
    //console.log('ingreso',ingreso);
    if(ingreso < 0){
        document.getElementById('estacion').innerHTML =
                        '<span class="badge badge-danger" style="white-space: normal;"> La estación se lleno </span>';
    } else {
        document.getElementById('estacion').innerHTML = ingreso;
        a_que_bus(n);
    }


}

function a_que_bus(rnd){
    if(rnd > 0 && rnd <= 0.25){
        entra_busA();
    } else if(rnd > 0.25 && rnd <= 0.5){
        entra_busB();
    }else if(rnd > 0.5 && rnd <= 0.75){
        entra_busC();
    }else if(rnd > 0.75 && rnd <= 1){
        entra_busD();
    }
}
function entra_busA(){

    console.log('entro A');
}
function entra_busB(){
    console.log('entro B');
}
function entra_busC(){
    console.log('entro C');
}
function entra_busD(){
    console.log('entro D');
}

window.onload = function() {
    //tiempo();
    //setInterval(tiempo, 1000);
}


/*
 * Se definen 4 buses A,B,C y D
 * Donde A & B son de salida y C & D son de llegada
 *
 */
