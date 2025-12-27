const form = document.querySelector('.login-form');
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');
const errorText = document.querySelector('.error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const resp = await fetch(
      'https://create-tasks-api-production.up.railway.app/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      }
    );

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.message || 'Erro ao logar');
    }

    localStorage.setItem('token', data.token);

    // redireciona para a lista
    window.location.href = 'index.html';

  } catch (err) {
    errorText.innerText = err.message;
  }
});
