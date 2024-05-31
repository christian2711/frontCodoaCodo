function loginUser() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Aquí puedes agregar la lógica de validación de los campos
  if (emailInput.value !== '' && passwordInput.value !== '') {
    // Redirige al usuario a la página principal
    window.location.href = '../paginaPrincipal.html';
  } else {
    // Muestra un mensaje de error o realiza alguna otra acción
    alert('Por favor, complete todos los campos.');
  }
}

