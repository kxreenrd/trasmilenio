<!DOCTYPE html>
<html lang="es" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>


        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/animate.css">
        <script type="text/javascript" src="./js/operaciones2.js"></script>
        <script type="text/javascript" src="./js/generador.js"></script>

        <title></title>
    </head>
    <body>
      <div id="sol"></div>
      <div id="luna"></div>
      <div class="row"></div>
        <div class="espacio" >
            <div class="row">

              <div class="btn btn-info" onclick="generar(1);"> Iniciar </div>
                <div class="col amrg" style="text-align: center;">
                  <span class="badge badge-info" id="tiempo"> Hora </span>
                    Tiempo: <span class="badge badge-info" id="contador"> </span>
                    Usuarios actuales en la estacion:<span class="badge badge-info" id="usuarios_actuales"> </span>
                    <div class="btn btn-primary" style="display:none"> <a id="descargar">descarga</a> </div>
                </div>
            </div>
            <div class="row">



            </div>
            <div class="row">
              <!--<div class="col-sm-1 " ></div>-->
              <div class="col amrg" >
                   <span class="badge badge-primary cantidad" id="c_ba">0 </span>
                  <div id="busa" class="col bus" ></div>
              </div>

              <div class="col amrg" >
                   <span class="badge badge-primary cantidad" id="c_bb">0 </span>
                  <div id="busb" class="col bus"></div>
              </div>

            </div>
            <div class="row">
              <div class="col-sm-1 amrg" ></div>
              <div class="col  estacion" >
                  <span class="badge badge-primary cantidad" id="c_estacion" >0 </span>
                  <div id="estacion" class="col amrg" style="height: 150px;">    </div>
              </div>

            </div>
            <div class="row">
              <!--<div class="col-sm-1 " ></div>-->
              <div class="col amrg" >
                  <span class="badge badge-primary cantidad" id="c_bc">0 </span>
                  <div id="busc" class="col bus " ></div>
              </div>
              <div class="col amrg" >
                  <span class="badge badge-primary cantidad" id="c_bd">0 </span>
                  <div id="busd" class="col bus" ></div>
              </div>

            </div>


        </div>
    </body>
</html>
