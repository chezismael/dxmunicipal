/* Configuración del cuestionario. Va en la misma carpeta que index.html (opcional).
   Sin este archivo, el cuestionario funciona como versión de prueba y no envía nada. */
window.DX_CONFIG = {
  // Dirección del servicio que recibe las respuestas (ver instrucciones). Vacío = no enviar.
  submitUrl: "https://script.google.com/macros/s/AKfycby0SSgQUAw3a_zWv_7ZR6yyTewtG38UgraP8RmHswT1oS3SuO_gTelVnCofRpFQ5us/exec",
  // Clave simple para descartar envíos ajenos. Debe coincidir con la del servicio receptor.
  token: "dx-2026-clave-larga",
  // true = muestra el aviso de «Versión de prueba». Poner false para la aplicación real.
  prototype: true,
  // true = muestra la libreta de notas y la vista de reglas de salto. Poner false para la aplicación real.
  reviewerTools: true,
  // Logo de la institución convocante (por ejemplo, SETRAN). Va primero, antes del logo del programa.
  // Subir la imagen al mismo repositorio y poner aquí su nombre, por ejemplo "logo-setran.png". Vacío = no mostrar.
  logoLocal: "",
  logoLocalAlt: ""
};
