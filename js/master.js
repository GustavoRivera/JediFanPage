
function loadInicio() {
    $(".hiden").fadeIn(3000);

}
function soloLetras(e){
       key = e.keyCode || e.which;
       tecla = String.fromCharCode(key).toLowerCase();
       letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
       especiales = "8-37-39-46";

       tecla_especial = false
       for(var i in especiales){
            if(key == especiales[i]){
                tecla_especial = true;
                break;
            }
        }

        if(letras.indexOf(tecla)==-1 && !tecla_especial){
            return false;
        }
    }
    
    
function validate() {

    $("#formulario").validate({
        rules: {
            fono: {
                required: true,
                number: true
            },
            acepto:{
                required: true,                
            },
            
            
        },
        messages:{
            acepto:"Porfavor Acepte los terminos",
        }
    });
}