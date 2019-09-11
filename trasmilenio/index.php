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
        <script type="text/javascript" src="./js/operaciones.js"></script>
        <script type="text/javascript" src="./js/generador.js"></script>

        <title></title>
    </head>
    <body>

        <div class="jumbotron text-center">
            <h1>My First Bootstrap Page</h1>
            <p>Resize this responsive page to see the effect!</p>
        </div>

        <div class="container" >
            <div class="row">
                <div class="col amrg" >
                    Estación
                    <div id="estacion" class="col amrg">
                        ingresan:
                    </div>
                </div>
                <div class="col amrg" >
                    Bus 1
                    <div id="bus1" class="col amrg">
                        ingresan:
                    </div>
                </div>
                <div class="col amrg">
                    Bus 2
                    <div id="bus2" class="col amrg">
                        ingresan:
                    </div>
                </div>
                <div class="col amrg">
                    Bus 3
                    <div id="bus3" class="col amrg">
                        ingresan:
                    </div>
                </div>
                <div class="col amrg">
                    Bus 4
                    <div id="bus4" class="col amrg">
                        ingresan:
                    </div>
                </div>
                <div class="col amrg">
                    Tiempo: <span class="badge badge-info" id="contador"> </span>
                    Usuarios actuales:<span class="badge badge-info" id="usuarios_actuales"> </span>
                    <div class="btn btn-primary" style="display:none"> <a id="descargar">descarga</a> </div>
                </div>
            </div>


        </div>


        <script>

        var elem = document.getElementById('descargar');

        function exportar(contenidoDeArchivo){
          //console.log('contenidoDeArchivo',contenidoDeArchivo);
          var obj = contenidoDeArchivo.toString();
          //console.log('obj',obj);
          elem.download = "aleatorios.txt";
          elem.href = "data:application/octet-stream,"+ encodeURIComponent(contenidoDeArchivo);

        }


        <?php

          $nombre_fichero = "C:\Users\Karen Rodriguez\Downloads\aleatorios.txt";
          if (file_exists($nombre_fichero)) {
            $f = fopen($nombre_fichero, "r");
            ?>
              var data = "<?php echo fgets($f);?>";
              //console.log('la data',data);
              tiempo(data);
            <?php
          } else {
            ?>
            console.log(elem);
            funcion(1);
                setTimeout(function(){elem.click();});

             <?php
          }
         ?>
        </script>
    </body>
</html>
