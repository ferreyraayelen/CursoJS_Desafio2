/* Desafío Nº 2 - JS */

let nombre = prompt("Por favor ingresa tu nombre");
alert(
  "Hola " +
    nombre +
    " sabías que tenemos tres ervicios disponibles. Por favor elegí uno: Página web, Tienda Online, OnePage"
);

let servicio = prompt("Ingresa uno de los servicios deseados");
if ((servicio == "PAGINA WEB") || (servicio == "pagina web") || (servicio == "página web") || (servicio == "PÁGINA WEB"))
{
  alert("El servicio elegido es: Página web");
} else if (( servicio == "tienda online") || (servicio == "tienda on line") || (servicio == "TIENDA ONLINE"))
{
  alert("El servicio elegido es Tienda Online");
} else if ((servicio == "One Page") || (servicio == "onepage") || (servicio == "ONE PAGE"))
{
  alert("El servicio elegido es: One Page");
} else {
  alert(
    "Ups, no elegiste ningún servicio, animate a dar un paso al mundo digital)"
  );
}

let dia = prompt(
  "¿Qué día te gustaría que te llame para coodinar una reunión así te cuento más sobre mis servicios?"
);
let whatsapp = prompt("Dejame tu número de WhatsApp así me comunico con vos");
alert(
  "Buenísimo, el " +
    dia +
    " te escribo a tu whatsapp nº " +
    whatsapp +
    ". Que tengas un buen día."
);
