// Seleciona o checkbox
const themeSwitchCheckbox = document.querySelector('.theme-switch__checkbox');

// Verifica se o tema já está configurado e aplica o tema salvo
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeSwitchCheckbox.checked = true; // Marca o checkbox caso o tema escuro esteja ativo
}

// Adiciona um evento de click para alternar entre os temas
themeSwitchCheckbox.addEventListener('change', () => {
  if (themeSwitchCheckbox.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Salva a preferência do tema
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Salva a preferência do tema
  }
});
