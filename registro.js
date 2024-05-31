
function validateForm() {
  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const fechaNacimiento = document.getElementById('fechaNacimiento');
  const pais = document.getElementById('pais');
  const terminos = document.getElementById('terminos');

  // Verificar que todos los campos estén llenos
  if (nombre.value === '' || apellido.value === '' || email.value === '' || password.value === '' || fechaNacimiento.value === '' || pais.value === '' || !terminos.checked) {
    // Mostrar mensaje de error
    alert('Por favor, complete todos los campos y acepte los términos y condiciones.');
    return false; // Evita que se envíe el formulario
  } else {
    // Mostrar mensaje de éxito
    alert('¡Registro completado exitosamente!');
    window.location.href = 'inicio.html';
    return true; // Permite que se envíe el formulario
  }
}