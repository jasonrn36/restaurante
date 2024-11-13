$(document).ready(function(){

        // Área da mascara do telefone celular
        $('#telefone').mask('(00)00000-0000', {
            placeholder: '(99)98199-9999'
        })

        $('form').validate({
            rules:{
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                celular: {
                    required: true
                }

            }

        })

})





