const formulario = document.getElementById('formulario');
const numeroA = document.querySelector('#numero-1');
const numeroB = document.querySelector('#numero-2');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (numeroA && numeroB) {
      const validacaoNumero = +numeroB.value > +numeroA.value ? true : false;
      const mensagem = document.querySelector('.mensagem');

      if (validacaoNumero) {
        mensagem.innerHTML = 'Enviado com sucesso!';
        mensagem.classList.add('valido');
        setTimeout(() => {
          mensagem.classList.remove('valido');
        }, 3000);
      } else {
        mensagem.innerHTML =
          'Campo B precisa ser maior que o A, tente novamente!';
        mensagem.classList.add('invalido');
        setTimeout(() => {
          mensagem.classList.remove('invalido');
        }, 3000);
      }
    }
  });
}
