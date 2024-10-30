menu();

function menu() {
    opcion = parseInt(prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas  \n5.- Salir"));
    switch (opcion) {
        case 1:
            uno();
            break;
        case 2:
            dos();
            break;
        case 3:
            tres();
            break;
        case 4:
            cuatro();
            break;
        case 5:
            cinco();
            break;
        default:
            any();
            break;
    }
}

//FUNCIONES

function uno() {
    let pri = prompt("Seleccione una opción:\n1.- Ver Boleta\n2.- Pagar cuenta\n3.- Volver al menú pricipal");
    switch (pri) {
        case "1":
            alert("Haga click aquí para descargar su boleta.")
            uno();
            break;
        case "2":
            alert("Usted está siendo transferido. Espere por favor...")
            uno();
            break;
        case "3":
            menu();
            break;
        default:
            if (pri == null) {
                menu();
            }
            else {
                alert("Por favor, escriba una opción válida. Intente nuevamente")
                uno();
            }
            break;
    }
}

function dos() {
    let sec = prompt("Seleccione una opción:\n1.- Problemas con la señal\n2.- Problemas con las llamadas\n3.- Volver al menú principal");
    switch (sec) {
        case "1":
            let mensj1 = prompt("A continuación, escriba su solicitud:");
            if (mensj1 != null) {
                alert("Estimado usuario, su solicitud: 'Tengo problemas con la señal en avenida siempre viva' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
                dos()
                }
            else if (mensj1 == null) {
                dos()
                }
            break;
        case "2":
            let mensj2 = prompt("A continuación, escriba su solicitud:");
            if (mensj2 != null) {
                alert("Estimado usuario, su solicitud: 'Tengo problemas con las llamadas en avenida siempre viva' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
                dos()
                }
            else if (mensj2 == null) {
                dos()
                }
            break;
        case "3":
            menu();
            break;
        default:
            if (sec == null) {
                menu();
                }
            else {
                alert("Por favor, escriba una opción válida. Intente nuevamente")
                dos();
                }
            break;
            }
}


function tres() {
    let ter = prompt("¡Mentel tiene una oferta comercial acorde a tus necesidades!\nPara conocer más información y ser asesorado personalmente por un ejecutivo, escribe 'SI' y un ejectutivo te llamará. De lo contrario, ingrese 'NO'.\nPara volver al menú principal, escriba 'M' o presione 'Cancelar'.");
    switch (ter) {
        case "SI":
            alert("Un ejecutivo contactará con usted.")
            menu();
            break;
        case "NO":
            alert("Gracias por preferir nuestros servicios.")
            menu();
            break;
        case "M":
            menu();
            break;
        default:
            if (ter == null) {
                menu();
            }
            else {
                alert("Por favor, escriba una opción válida. Intente nuevamente")
                tres();
            }
            break;
            }
}

function cuatro() {
    let cua = prompt("A continuación, escriba su consulta:");
    if (cua != null) {
        alert("Estimado usuario, su consulta: 'Quisiera saber por qué no ha llegado mi producto código 1234' ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.");
        menu();
        }
    else {
        menu()
        }
}

function cinco() {
    alert("Gracias por preferir nuestros servicios. Hasta pronto.");
}

function any() {
    alert("Por favor, escriba una opción válida. Intente nuevamente");
    menu()
}