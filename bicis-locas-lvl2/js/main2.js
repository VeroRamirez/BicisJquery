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
        var texto = $('#name').val();
        if( texto.trim() == "" ){
            $('.name-container span').each(function(){$(this).remove();})
            var span = $('<span class="error" >Campo Vacio</span>');
            $(".name-container").append(span);
            
        }else if(!patron.test(texto)){
            $('.name-container span').each(function(){$(this).remove();})
            var span = $('<span class="error" >Texto invalido</span>');
            $(".name-container").append(span);
            
        }else{
            $('.name-container span').each(function(){$(this).remove();})
        }
}

function validaApellido() {
        var texto = $('#lastname').val();
        if( texto.trim() == ""){
            $('.lastname-container span').each(function(){$(this).remove();})
            var span = $('<span class="error" >Campo Vacio</span>');
            $(".lastname-container").append(span);
        }else if( !patron.test(texto) ){
            $('.lastname-container span').each(function(){$(this).remove();})
            var span = $('<span class="error" >Texto invalido</span>');
            $(".lastname-container").append(span);
        }else{
            $('.lastname-container span').each(function(){$(this).remove();})
        }
}

function validaMail() {
        var texto = $('#input-email').val();
        if(texto.trim()==""){
            $('.email-container span').each(function(){$(this).remove();})
            var span = $('<span class="error" >Campo Vacio</span>');
            $(".email-container").append(span);
        }else if(!patronEmail.test(texto)){
            $('.email-container span').each(function(){$(this).remove();})
            var span = $('<span class="error" >Email invalido</span>');
            $(".email-container").append(span);
        }else{
            $('.email-container span').each(function(){$(this).remove();})
        }
    }
function validaPassword() {
        var texto = $('#input-password').val();
        if ( texto.trim() == "" ) {
           if($('#input-password').siblings('span')[0]){
                $('#input-password').siblings('span')[0].remove();
            }
            var span = $('<span class="error" >Campo Vacio</span>');
            $('#input-password').parent().append(span);
        }else if( texto.length<6 ) {
            if($('#input-password').siblings('span')[0]){
                $('#input-password').siblings('span')[0].remove();
            }
            var span = $('<span class="error" >Password debe tener al menos 5 caracteres</span>');
            $('#input-password').parent().append(span);
        }else{
            if( $('#input-password').siblings('span')[0] ){
                $('#input-password').siblings('span')[0].remove();
            }
        }
    }

function validaCombo() {
        if($('select').siblings('span')[0]){
                $('select').siblings('span')[0].remove();
            }
         if($('select option').eq(0).prop('selected')){
            var span = $('<span class="error" >Elige una opcion valida</span>');
            $('select').parent().append(span);
         }else{
             if($('select').siblings('span')[0]){
                $('select').siblings('span')[0].remove();
            }
         }
    }


