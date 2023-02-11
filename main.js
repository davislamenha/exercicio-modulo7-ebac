const formulario = document.getElementById('formulario');
const numeroA = document.getElementById('numero-1');
const numeroB = document.getElementById('numero-2');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
