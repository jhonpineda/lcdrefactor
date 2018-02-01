var wde1;
var wde2;
var wdt;

/*XXXXXXXXXXXXXXXXX*/
/* Entrada 1  */
/*XXXXXXXXXXXXXXXXX*/
function entrada1(){
	var result=0;
	clearTimeout(wde1);
	var e1 = document.getElementById("entrada1").value;	
	if(e1==""){
		result=0;
		alert("Por favor, ingrese un valor en la Entrada 1");
	}
	else{
		var res1 = e1.split(',');				
		if(res1.length!=2){
			result=0;
			alert("Por favor, ingrese el valor de la entrada 1 correctamente");
		}
		else{
			if ((isNaN(res1[0])) || (isNaN(res1[1]))){
				result=0;
		        alert ("Por favor, los valores de la entrada 1 deben ser números");
		    } 
		    else {
		        if(res1[0] % 1 != 0){
		        	result=0;
		            alert ("Por favor, el valor size de la entrada 1 " + res1[0] + " debe ser un número entero entre 2 - 10");
		        }
		        else if((res1[0]<2) || (res1[0]>10)) {
		        	result=0;
					alert("Por favor, el valor size de la entrada 1 debe estar entre 2 - 10");
				}
				else{
					result=1;
					var num = res1[1].split('');
					for(i = 0; i < num.length; i++){
						if(num[i] % 1 != 0){
							result=0;
						}
					}
					if(result==0){
						alert("Por favor, el segundo valor de la entrada 1 debe ser un número entero entre 1 - 9");
					}					
				}
		    }				
		}				
	}

	return result;	
}

$("#entrada1").focus(function(){	
	clearTimeout(wde1);		
    wde1 = setTimeout(function(){ entrada1() }, 6000);
});

$("#entrada1").click(function(){
	clearTimeout(wde1);	
    wde1 = setTimeout(function(){ entrada1() }, 6000);
});

$("#entrada1").change(function(){
	clearTimeout(wde1);	
    wde1 = setTimeout(function(){ entrada1() }, 6000);
});

/*XXXXXXXXXXXXXXXXX*/
/* Entrada 2  */
/*XXXXXXXXXXXXXXXXX*/
function entrada2(){
	var result=0;
	clearTimeout(wde2);
	var e2 = document.getElementById("entrada2").value;
	if(e2 ==""){
		result=0;
		alert("Por favor, ingrese un valor en la Entrada 2");
	}
	else{
		var res2 = e2.split(',');				
		if(res2.length!=2){
			result=0;
			alert("Por favor, ingrese el valor de la entrada 2 correctamente");
		}
		else{
			if ((isNaN(res2[0])) || (isNaN(res2[1]))){
				result=0;
		        alert ("Por favor, los valores de la entrada 2 deben ser números");
		    } 
		    else {
		        if(res2[0] % 1 != 0){
		        	result=0;
		            alert ("Por favor, el valor size de la entrada 2 " + res2[0] + " debe ser un número entero entre 2 - 10");
		        }
		        else if((res2[0]<2) || (res2[0]>10)) {
		        	result=0;
					alert("Por favor, el valor size de la entrada 2 debe estar entre 2 - 10");
				}
				else{
					result=1;
					var num = res2[1].split('');
					for(i = 0; i < num.length; i++){
						if(num[i] % 1 != 0){
							result=0;
						}
					}
					if(result==0){
						alert("Por favor, el segundo valor de la entrada 2 debe ser un número entero entre 1 - 9");
					}
				}
		    }				
		}				
	}

	return result;
}

$("#entrada2").focus(function(){	
	clearTimeout(wde2);	
    wde2 = setTimeout(function(){ entrada2() }, 6000);
});

$("#entrada2").click(function(){
	clearTimeout(wde2);	
    wde2 = setTimeout(function(){ entrada2() }, 6000);
});

$("#entrada2").change(function(){
	clearTimeout(wde2);	
    wde2 = setTimeout(function(){ entrada2() }, 6000);
});
/*XXXXXXXXXXXXXXXXX*/
/*  Entrada terminar   */
/*XXXXXXXXXXXXXXXXX*/
function terminar(){
	clearTimeout(wdt);
	var e1 = document.getElementById("entrada1").value;
	var e2 = document.getElementById("entrada2").value;
	var t = document.getElementById("terminar").value;

	if((e1 == "") || (e2 == "") || (t == "")){
		alert("Por favor, ingrese los valores en todas las entradas");
	}
	else if(t=="0,0"){
		var result1 = entrada1();
		var result2 = entrada2();
		if((result1!=1) || (result2!=1)){
			alert("Por favor, ingrese los valores de las entradas 1 y 2 correctamente");
		}
		else{
			var parametros = {                          
                "e1" : e1,
                "e2" : e2
            };

			$.ajaxSetup({
		        headers: {
		            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		        }
		    });

			var url = "/mostrarlcd";
			$.ajax({			
		        data: parametros,
		        type: 'POST',
		        url: url,
		        dataType: 'html',	        
		        success: function(data) { 		        	
		        	var jsonData = JSON.parse(data); 
		        	var previsual1="";
		        	var previsual2=""; 
		        	for (i = 0; i < jsonData.out1.length; i++) {					    
					    previsual1 += "<pre style='margin:0;padding:0;list-style:none;text-decoration:none;border:none;outline:none;float:left;'>"+jsonData.out1[i]+"   </pre>";
					} 
					
					for (i = 0; i < jsonData.out2.length; i++) { 
					    previsual2 += "<pre style='margin:0;padding:0;list-style:none;text-decoration:none;border:none;outline:none;float:left;'>"+jsonData.out2[i]+"   </pre>";
					}         
		            document.getElementById("resultado_entrada_1").innerHTML=previsual1;
		            document.getElementById("resultado_entrada_2").innerHTML=previsual2;
		        },
		        error: function(e, ts, et) {
		            alert("Problemas al momento de enviar la información \npor favor intente de nuevo");
		        }					        
		    });
		}
	}
	else{
		alert("Por favor, ingrese el valor de la entrada terminar correctamente 0,0");
	}			
}

$("#terminar").focus(function(){	
	clearTimeout(wdt);		
    wdt = setTimeout(function(){ terminar() }, 6000);
});

$("#terminar").click(function(){
	clearTimeout(wdt);	
    wdt = setTimeout(function(){ terminar() }, 6000);
});

$("#terminar").change(function(){
	clearTimeout(wdt);	
    wdt = setTimeout(function(){ terminar() }, 6000);
});

/*XXXXXXXXXXXXXXXXX*/
/*  Reset entradas   */
/*XXXXXXXXXXXXXXXXX*/
function reset(){
	clearTimeout(wde1);
	clearTimeout(wde2);
	clearTimeout(wdt);
	
	document.getElementById("entrada1").value="";
	document.getElementById("entrada2").value="";
	document.getElementById("terminar").value="";

	$("#resultado_entrada_1").empty();
    $("#resultado_entrada_2").empty();
}