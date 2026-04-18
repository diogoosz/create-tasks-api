const form = document.querySelector('.login-form');
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');
const errorText = document.querySelector('.error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    const resp = await fetch('https://createtasks.zylochat.com.br/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    // pega como texto primeiro (evita crash se vier HTML)
    const text = await resp.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(`Resposta inválida do servidor`);
    }

    if (!resp.ok) {
      throw new Error(data.message || 'Erro ao logar');
    }

    // salva token
    localStorage.setItem('token', data.token);

    // redireciona
    window.location.href = 'index.html';

  } catch (err) {
    console.error(err);
    errorText.innerText = err.message;
  }
});
