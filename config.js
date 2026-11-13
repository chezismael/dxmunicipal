/* Configuración del cuestionario. Va en la misma carpeta que index.html (opcional).
   Sin este archivo, el cuestionario funciona como versión de prueba y no envía nada. */
window.DX_CONFIG = {
  // Dirección del servicio que recibe las respuestas (ver instrucciones). Vacío = no enviar.
  submitUrl: "",
  // Clave simple para descartar envíos ajenos. Debe coincidir con la del servicio receptor.
  token: "",
  // true = muestra el aviso de «Versión de prueba». Poner false para la aplicación real.
  prototype: true,
  // true = muestra la libreta de notas y la vista de reglas de salto. Poner false para la aplicación real.
  reviewerTools: true,
  // Logo de la institución convocante (por ejemplo, SETRAN). Va primero, antes del logo del programa.
  // Subir la imagen al mismo repositorio y poner aquí su nombre, por ejemplo "logo-setran.png". Vacío = no mostrar.
  logoLocal: "",
  logoLocalAlt: ""
};
