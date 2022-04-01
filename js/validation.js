function enviar() {

    var response = grecaptcha.getResponse();
    if (response.length != 0) {

        const nombre = $("#nombre").val()
        const apellidos = $("#apellidos").val()
        const numero = $("#numero").val()
        const organizacion = $("#organizacion").val()
        const asunto = $("#asunto").val()
        const correo = $("#correo").val()
        const mensaje = $("textarea#mensaje").val()

        if(nombre != "" && apellidos != ""  && numero != "" &&  organizacion != "" &&  asunto != "" && correo != ""  && mensaje != ""){
            $.ajax({
                url: 'app/mail.php',
                type: 'post',
                data: {'nombre': nombre, 'apellidos':apellidos, 'numero':numero, 'organizacion':organizacion, 'asunto':asunto ,'correo': correo, 'mensaje': mensaje},
                dataType: 'text',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    $("#nombre").val('')
                    $("#apellidos").val('')
                    $("#numero").val('')
                    $("#organizacion").val('')
                    $("#asunto").val('')
                    $("#correo").val('')
                    $("textarea#mensaje").val('')
                    document.getElementById('status').innerHTML = "";
                    Swal.fire(
                        {
                        title: "Gracias por enviarnos tu correo",
                        text: "Espera nuestra respuesta pronto",
                        icon: 'success',
                        confirmButtonText: "Ok",
                        iconColor: '#0eb2f6',
                        confirmButtonColor: "#95cf47",
                        }
                    ).then(function() {
                        window.location.href = "index.php";
                    })
                
                },
                error: function(xhr, status, error) {
                    $("#nombre").val('')
                    $("#apellidos").val('')
                    $("#numero").val('')
                    $("#organizacion").val('')
                    $("#asunto").val('')
                    $("#correo").val('')
                    $("textarea#mensaje").val('')
                    document.getElementById('status').innerHTML = "";
                    
                }
            });
        }
        else{
            Swal.fire(
                {
                title: "Fallo al enviar email",
                text: "Debes de llenar todos los campos",
                icon: 'error',
                confirmButtonText: "Ok",
                iconColor: 'red',
                confirmButtonColor: "red",
                }
            )
        }
        

    }
            
    else {
        document.getElementById('status').innerHTML = "¡Debes aceptar el captcha!";
        $('#status').css('color','black').css('font-size','1rem');
    }

    
}