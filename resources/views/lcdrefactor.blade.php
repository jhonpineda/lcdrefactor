@extends('layouts.home')

@section('section')
    <div class="container">
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="form-group">
                    <label for="entrada1">Entrada 1</label>
                    <input type="text" class="form-control" id="entrada1" placeholder="entrada 1" onchange="entrada1()">
                </div>
            </div>
            <div class="col-sm"></div>
        </div>

        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="form-group">
                    <label for="entrada2">Entrada 2</label>
                    <input type="text" class="form-control" id="entrada2" placeholder="entrada 2" onchange="entrada2()">
                </div>
            </div>
            <div class="col-sm"></div>
        </div>

        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <div class="form-group">
                    <label for="entrada1">Terminar</label>
                    <input type="text" class="form-control" id="terminar" placeholder="terminar" onchange="terminar()">
                </div>
            </div>
            <div class="col-sm"></div>
        </div>

        <center>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-sm">
                    <input type="button" class="btn btn-success" value="Aceptar" onclick="terminar()">
                </div>
                <div class="col-sm">
                    <input class="btn btn-primary" type="reset" value="Reset" onclick="reset()">
                </div> 
                <div class="col-sm"></div>
            </div>                        
        </center>       
    </div>
    <br><div class="container">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <div id="resultado_entrada_1" style="display:hidden;"></div>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>
    <br><div class="container">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
                <div id="resultado_entrada_2" style="display:hidden;"></div>
            </div>
            <div class="col-sm-2"></div>
        </div>
    </div>  
@endsection

<script>
    window.onload = function() {
        document.getElementById("entrada1").value="";
        document.getElementById("entrada2").value="";
        document.getElementById("terminar").value="";

        $("#resultado_entrada_1").empty();
        $("#resultado_entrada_2").empty();
    };
</script>
