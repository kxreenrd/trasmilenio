
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
var time_interval = 6000;
var usu_actu = 0;
var d;
var u = 0;

function tiempo(data){
  d = data.split(',');
  //console.log(d);
    var sum = 0;
    var n = 0;

    var semilla = 8;
    var l = document.getElementById("contador");
    var usu_ac = document.getElementById("usuarios_actuales");;
    window.setInterval(function(){
        if(n < d.length){
            l.innerHTML = n;

            //console.log(n, d[n], d[n]*10);
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
              ingreso_estacion(sum, d[n], round);
            } else {
                ingreso_estacion(-1);
            }
        }
    },time_interval);
}

function ingreso_estacion(ingreso, n, cant){

    //console.log('ingreso',ingreso);
    if(ingreso < 0){
        /*document.getElementById('estacion').innerHTML =
                        '<span class="badge badge-danger" style="white-space: normal;"> La estación se lleno </span>';*/
        console.log('a:',bus_a)
        console.log('b:',bus_b)
        console.log('c:',bus_c)
        console.log('d:',bus_d)
    } else {

      if(cant>0){
        var inter = Math.round(time_interval/cant);
        var i = 0;
          console.log("cant", cant);
          window.setInterval(function(){
            document.getElementById("estacion").innerHTML =document.getElementById("estacion").innerHTML+ '<div class="circulo animated bounceInLeft class'+u+'" id="p_'+u+'_'+i+'"></div>';
            setTimeout(function(){
              var div_1 = document.getElementById('p_'+u+'_'+i);
              console.log('i',i, div_1);
              if(div_1){
                div_1.className = 'circulo';
              }

            },(inter+400))
            i++
          },inter);
         //

      }
      //delete_class_element(u);
      u++;
      //console.log(cant)
        //document.getElementById('estacion').innerHTML = ingreso;
/*





          //continue;

        }*/
        a_que_bus(n);
    }


}

function delete_class_element(u){
  var u_class = document.getElemetsByClassName('class'+u);
  for(var k in u_class){
    u_class[k].className = 'circulo';
  }



}

function tipo_persona(){

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

var bus_a = 0;
function entra_busA(){
  bus_a++;
  document.getElementById('busa').innerHTML = bus_a;
    //console.log('entro A', bus_a);
}
var bus_b = 0;
function entra_busB(){
  bus_b++;
  document.getElementById('busb').innerHTML = bus_b;
    //console.log('entro B', bus_b);
}
var bus_c = 0;
function entra_busC(){
  bus_c++;
  document.getElementById('busc').innerHTML = bus_c;
    //console.log('entro C', bus_c);
}
var bus_d = 0;
function entra_busD(){
  bus_d++;
  document.getElementById('busd').innerHTML = bus_d;
    //console.log('entro D', bus_d);
}


function clic(){
  document.getElementById('mover').className = 'btn btn-primary animated bounceInLeft';
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
