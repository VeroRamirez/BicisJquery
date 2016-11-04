var patron = /^[A-Z][a-zA-Z]*$/;
var patronEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$(document).ready( function() {
    validaForm();
    $('button').on('click',validaSubmit);
});

function validaSubmit(){
    validaNombre();
    validaApellido();
    validaMail();
    validaPassword();
    validaCombo();
}

function validaForm(){
    $('#name').on('input',validaNombre);
    $('#lastname').on('input',validaApellido);
    $('#input-email').on('input',validaMail);
    $('#input-password').on('input', validaPassword);
    $('select').on('change',validaCombo);
};

function validaNombre() {
        $('.name-container span').each( function(){$(this).remove(); })
        var texto = $('#name').val();
        if( texto.trim() == "" ){
            var span = $('<span class="error" >Campo Vacio</span>');
            $(".name-container").append(span);
            
        }else if(!patron.test(texto)){
            var span = $('<span class="error" >Texto invalido</span>');
            $(".name-container").append(span);
            
        }
}

function validaApellido() {
        $('.lastname-container span').each( function(){$(this).remove(); })
        var texto = $('#lastname').val();
        if( texto.trim() == ""){
            var span = $('<span class="error" >Campo Vacio</span>');
            $(".lastname-container").append(span);
        }else if( !patron.test(texto) ){
            var span = $('<span class="error" >Texto invalido</span>');
            $(".lastname-container").append(span);
        }
}

function validaMail() {
        $('.email-container span').each( function(){ $(this).remove(); })
        var texto = $('#input-email').val();
        if(texto.trim()==""){
            var span = $('<span class="error" >Campo Vacio</span>');
            $(".email-container").append(span);
        }else if(!patronEmail.test(texto)){
            var span = $('<span class="error" >Email invalido</span>');
            $(".email-container").append(span);
        }
    }
function validaPassword() {
        $('#input-password').parent().find('span').each( function() { $(this).remove(); });
        var texto = $('#input-password').val();
        if ( texto.trim() == "" ) {
            var span = $('<span class="error" >Campo Vacio</span>');
            $('#input-password').parent().append(span);
        }else if( texto.length<6 ) {
            var span = $('<span class="error" >Password debe tener al menos 6 caracteres</span>');
            $('#input-password').parent().append(span);
        }
    }

function validaCombo() {
        $('select').parent().find('span').each( function() { $(this).remove(); });
         if($("select").val()=="0"){
            var span = $('<span class="error" >Elige una opcion valida</span>');
            $('select').parent().append(span);
         }
    }


