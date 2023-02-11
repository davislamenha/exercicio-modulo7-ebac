const formulario = document.getElementById('formulario');
const numeroA = document.querySelector('#numero-1');
const numeroB = document.querySelector('#numero-2');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (numeroA && numeroB) {
      const validacaoNumero = +numeroB.value > +numeroA.value ? true : false;
      console.log(validacaoNumero);
    }
  });
}
