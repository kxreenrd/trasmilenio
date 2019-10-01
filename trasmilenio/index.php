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
        <link rel="stylesheet" href="./css/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="./css/sunset.css">
        <link rel="stylesheet" href="./css/animate.css">
        <script type="text/javascript" src="./js/operaciones.js"></script>
        <script type="text/javascript" src="./js/generador.js"></script>

        <title>Transmilenio</title>
    </head>
    <body>
        <!-- <div id="sol"></div>
        <div id="luna"></div> -->

        <div id="sky"></div>
        <div id="sun"></div>


        <div class="espacio" >
            <!-- Button to Open the Modal -->

            <div class="row">
                <div class="col amrg" style="text-align: center;">
                    <div class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Informe
                    </div>
                    <span class="badge badge-info" ><i class="fa fa-clock-o"></i> <span id="tiempo"></span> </span>
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




        <!-- The Modal -->
        <div class="modal" id="myModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Informe Transmilenio</h4>

                        <button type="button" class="close" data-dismiss="modal">&times;</button>

                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">

                        <div >
                            <!--<h2>Basic Table</h2>
                            <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>-->
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Pregunta</th>
                                        <th>Respuesta</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>¿Cuántas personas salieron salieron del sector?</td>
                                        <td id="q_1">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas se fueron hacia la derecha?</td>
                                        <td id="q_2">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas se fueron a la izquierda?</td>
                                        <td id="q_3">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas llegaron al sector?</td>
                                        <td id="q_4">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas llegaron desde la derecha?</td>
                                        <td id="q_5">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas llegaron desde la izquierda?</td>
                                        <td id="q_6">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas discapacitadas fueron sacadas del sector?</td>
                                        <td id="q_7">0</td>
                                    </tr>
                                    <tr>
                                        <td>¿Cuántas personas discapacitadas llegaron al sector?</td>
                                        <td id="q_8">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <!--<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>-->
                        <span class="badge badge-info" ><i class="fa fa-clock-o"></i><span id="time1"></span> </span>
                    </div>

                </div>
            </div>
        </div>


        <script>
            var elem = document.getElementById('descargar');

            function exportar(contenidoDeArchivo) {
                //console.log('contenidoDeArchivo',contenidoDeArchivo);
                var obj = contenidoDeArchivo.toString();
                //console.log('obj',obj);
                elem.download = "aleatorios.txt";
                elem.href = "data:application/octet-stream," + encodeURIComponent(contenidoDeArchivo);

            }


<?php
//echo __FILE__;
//echo getcwd();
$nombre_fichero = getcwd() . "\aleatorios.txt";
if (file_exists($nombre_fichero)) {
    $f = fopen($nombre_fichero, "r");
    ?>
                var data = "<?php echo fgets($f); ?>";
                //console.log('la data',data);
                //tiempo(data);
    <?php
} else {
    ?>
                //console.log(elem);
                generar(1);
                //setTimeout(function(){elem.click();});
    <?php
}
?>
        </script>
    </body>
</html>
