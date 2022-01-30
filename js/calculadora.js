$(document).ready(function(){
    var memoria = 0;
    var operador = "";
    $(".btnsuma").click(function(){
        $(".pantalla").val($(".pantalla").val().replace(",","."));
        if (operador=="+"){
            memoria=parseFloat(memoria)+parseFloat($(".pantalla").val());
            operador="+";
        } else if (operador=="-"){
            memoria=memoria-parseFloat($(".pantalla").val());
            operador="+";
        } else if (operador=="*"){
            memoria=memoria*parseFloat($(".pantalla").val());
            operador="+";
        } else if (operador=="/"){
            memoria=memoria/parseFloat($(".pantalla").val());
            operador="+";
        } else if(operador==""){
            memoria=parseFloat($(".pantalla").val());
            operador="+";
        }
        $(".historia").text($(".historia").text()+$(".pantalla").val()+"+");
        $(".pantalla").val("");
        
    });
    $(".btnresta").click(function(){
        $(".pantalla").val($(".pantalla").val().replace(",","."));
        if (operador=="+"){
            memoria=parseFloat(memoria)+parseFloat($(".pantalla").val());
            operador="-";
        } else if (operador=="-"){
            memoria=memoria-parseFloat($(".pantalla").val());
            operador="-";
        } else if (operador=="*"){
            memoria=memoria*parseFloat($(".pantalla").val());
            operador="-";
        } else if (operador=="/"){
            memoria=memoria/parseFloat($(".pantalla").val());
            operador="-";
        } else if(operador==""){
            memoria=parseFloat($(".pantalla").val());
            operador="-";
        }
        $(".historia").text($(".historia").text()+$(".pantalla").val()+"-");
        $(".pantalla").val("");
        
    });
    $(".btndivi").click(function(){
        $(".pantalla").val($(".pantalla").val().replace(",","."));
        if (operador=="+"){
            memoria=parseFloat(memoria)+parseFloat($(".pantalla").val());
            operador="/";
        } else if (operador=="-"){
            memoria=memoria-parseFloat($(".pantalla").val());
            operador="/";
        } else if (operador=="*"){
            memoria=memoria*parseFloat($(".pantalla").val());
            operador="/";
        } else if (operador=="/"){
            memoria=memoria/parseFloat($(".pantalla").val());
            operador="/";
        } else if(operador==""){
            memoria=parseFloat($(".pantalla").val());
            operador="/";
        }
        $(".historia").text($(".historia").text()+$(".pantalla").val()+"/");
        $(".pantalla").val("");
        
    });
    $(".btnmult").click(function(){
        $(".pantalla").val($(".pantalla").val().replace(",","."));
        if (operador=="+"){
            memoria=parseFloat(memoria)+parseFloat($(".pantalla").val());
            operador="*";
        } else if (operador=="-"){
            memoria=memoria-parseFloat($(".pantalla").val());
            operador="*";
        } else if (operador=="*"){
            memoria=memoria*parseFloat($(".pantalla").val());
            operador="*";
        } else if (operador=="/"){
            memoria=memoria/parseFloat($(".pantalla").val());
            operador="*";
        } else if(operador==""){
            memoria=parseFloat($(".pantalla").val());
            operador="*";
        }
        $(".historia").text($(".historia").text()+$(".pantalla").val()+"*");
        $(".pantalla").val("");
        
    });
    $(".btnc").click(function(){
        var texto = $(".pantalla").val();
        if(texto.length>1){
            $(".pantalla").val(texto.substring(0,texto.length-1));
        } else {
            $(".pantalla").val("");
        }
        $(".pantalla").val($(".pantalla").val().substring(-1));
    });
    $(".btnce").click(function(){
        $(".pantalla").val("");
        $(".historia").text("");
        memoria=0;
        operador="";
    });
    $(".btnigual").click(function(){
        $(".pantalla").val($(".pantalla").val().replace(",","."));
        if (operador=="+"){
            memoria=parseFloat(memoria)+parseFloat($(".pantalla").val());
            operador="=";
        } else if (operador=="-"){
            memoria=memoria-parseFloat($(".pantalla").val());
            operador="=";
        } else if (operador=="*"){
            memoria=memoria*parseFloat($(".pantalla").val());
            operador="=";
        } else if (operador=="/"){
            memoria=memoria/parseFloat($(".pantalla").val());
            operador="=";
        }
        $(".historia").text($(".historia").text()+$(".pantalla").val()+"="+parseFloat(memoria,2));
        $(".pantalla").val("");
        memoria=0;
        operador="";
    });
    $(".btnnum").click(function(){
        if(memoria==0){
            $(".historia").text("");
        }
        $(".pantalla").val($(".pantalla").val()+$(this).text());
    });

    //Controlamos las teclas pulsadas en pantalla
    $(".pantalla").keyup(function(event){
        if (event.key == "+"){ 
            $(".pantalla").val($(".pantalla").val().replace("+",""));
            $(".btnsuma").trigger("click");
        } else if (event.key == "-"){ 
            $(".pantalla").val($(".pantalla").val().replace("-",""));
            $(".btnresta").trigger("click");
        } else if (event.key == "*"){ 
            $(".pantalla").val($(".pantalla").val().replace("*",""));
            $(".btnmult").trigger("click");
        } else if (event.key == "/"){ 
            $(".pantalla").val($(".pantalla").val().replace("/",""));
            $(".btndivi").trigger("click");
        } else if (event.key == "Enter"){ 
            $(".pantalla").val($(".pantalla").val());
            $(".btnigual").trigger("click");
        } else {
            if(memoria==0){
                $(".historia").text("");
            }
        }
    });
    $(".calculadoraboton").click(function(){
        $(this).fadeOut(100);
        $(".calculadora").fadeIn(300);
    });
    $(".textright").click(function(){
        $(".calculadora").fadeOut(100);
        $(".calculadoraboton").fadeIn(300);
    });
});
