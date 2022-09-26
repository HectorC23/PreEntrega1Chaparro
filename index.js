
let tortas = ["Selva negra", "Ojaldre", "Chocotorta", "Moka"]
let detallesTorta = ["4 kilos", "3 kilos", "3,5 kilos", "5 kilos"]
let precioTorta = ["$4800", "$3600", "$4200", "$6000"]
let opcionTorta
let kilosTorta


let nombre
let direccion
let metodoDePago = ["Tarjeta de Debito", "Tarjeta de Credito", "Efectivo"]

let pagaCon
let opcionPago

let confirmacion

alert("Bienvenidx a Pasteleria Doña Olga!! \n Local de Venta de Pasteles")

do {
    let bandera = 0
    alert("Vamos a pedirle algunos datos para levantar el pedido")

    do {
        if(bandera>0) {
            alert("Opción Incorrecta, Ingrese el número de la opción (1,2,3 o 4) ")
        }
        opcionTorta = prompt("Elija el tipo de torta que desea: (ingrese el número de la opción) \n 1: Selva negra \n 2: Ojaldre \n 3: Chocotorta \n 4: Moka")
        bandera++
    } while (opcionTorta < 1 || opcionTorta > 4)

    alert( "Los detalles de la torta son: " + tortaArmada(opcionTorta))

    function tortaArmada(opcionTorta) {
        opcionTorta--
        return ("Torta: " + tortas[opcionTorta] + "\n Peso: " + detallesTorta[opcionTorta] + "\n Precio: " + precioTorta[opcionTorta] + "\n")
    }

    function ticket() {
        nombre = prompt("Ingrese su nombre completo:")
        direccion = prompt("Ingrese su dirección:")

        bandera = 0
        do {
            if(bandera>0) {
                alert("Opción Incorrecta, Ingrese el número de la opción (1,2 o 3) ")
            }
            opcionPago = prompt("Ingrese el metodo de pago: \n 1: Tarjeta de Debito \n 2: Tarjeta de Credito \n 3: Efectivo")
            bandera++
        } while (opcionPago<1 || opcionPago > 3)

        return alert("--------------------\n" + "TICKET \n" + tortaArmada(opcionTorta) + "\n" + nombre + "\n " + direccion + "\n" + metodoDePago[opcionPago-1] + "\n--------------------")
    }

    do {
        bandera = 0
        if(bandera>0) {
            alert("Opción Incorrecta, Ingrese el número de la opción (1,2 o 3) ")
        }
        confirmacion = prompt("¿Quiere confirmar el pedido? \n 1: si, generar ticket \n 2: Cambiar pedido \n 3: Salir")
        bandera++
    } while (confirmacion<1 || confirmacion > 3)

    switch (confirmacion){
        case "1":
            ticket()
            break;
        case "2":
            alert("Espero encuentre lo que busca")
            break;
        case "3":
            alert("Hasta pronto, que tenga un buen día!! :)")
            break;
    }

} while (confirmacion == 2)