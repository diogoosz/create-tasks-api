const form = document.querySelector('.register-form');
const inputs = form.querySelectorAll('input');
const errorText = document.querySelector('.error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = inputs[0].value;
  const email = inputs[1].value;
  const password = inputs[2].value;

  try {
    const resp = await fetch(
      'https://create-tasks-api-production.up.railway.app/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      }
    );

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.message || 'Erro ao registrar');
    }

    // 🔥 Registro ok → vai pro login
    window.location.href = 'login.html';

  } catch (err) {
    errorText.innerText = err.message;
  }
});
