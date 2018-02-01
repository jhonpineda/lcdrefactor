<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class mostrarlcdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function ajaxRequestPost()
    {
       $e1 = $_POST["e1"];
       $e2 = $_POST["e2"];

       $out1 = $this->mostrarEntrada1($e1);
       $out2 = $this->mostrarEntrada2($e2);

       $array = array(
            "out1" => $out1,
            "out2" => $out2
        );

        echo json_encode($array);
    }

    public function mostrarEntrada1($e1){        
        $val = explode(",", $e1);
        $numeros = str_split($val[1]);

        switch ($val[0]){
            case '2':
                include("entrada/dos.php");                  
                break;
            case '3':
                include("entrada/tres.php");                  
                break;
            case '4':
                include("entrada/cuatro.php");                  
                break;
            case '5':
                include("entrada/cinco.php");                  
                break;
            case '6':
                include("entrada/seis.php");                  
                break;
            case '7':
                include("entrada/siete.php");                  
                break;
            case '8':
                include("entrada/ocho.php");                  
                break;
            case '9':
                include("entrada/nueve.php");                  
                break;
            case '10':
                include("entrada/diez.php");                  
                break;
        }

        $string_num = [];
        for($i = 0; $i < count($numeros); ++$i) {
            $string_num[$i] = $numero[$numeros[$i]];
        }
        return $string_num;
    }

    public function mostrarEntrada2($e2){
        $val = explode(",", $e2);
        $numeros = str_split($val[1]);

        switch ($val[0]){
            case '2':
                include("entrada/dos.php");                  
                break;
            case '3':
                include("entrada/tres.php");                  
                break;
            case '4':
                include("entrada/cuatro.php");                  
                break;
            case '5':
                include("entrada/cinco.php");                  
                break;
            case '6':
                include("entrada/seis.php");                  
                break;
            case '7':
                include("entrada/siete.php");                  
                break;
            case '8':
                include("entrada/ocho.php");                  
                break;
            case '9':
                include("entrada/nueve.php");                  
                break;
            case '10':
                include("entrada/diez.php");                  
                break;
        }

        $string_num = [];
        for($i = 0; $i < count($numeros); ++$i) {
            $string_num[$i] = $numero[$numeros[$i]];
        }
        return $string_num;
        
    }

}
