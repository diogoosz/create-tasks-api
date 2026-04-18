const form = document.querySelector('.register-form');
const inputs = form.querySelectorAll('input');
const errorText = document.querySelector('.error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const password = inputs[2].value.trim();

  try {
    const resp = await fetch('https://createtasks.zylochat.com.br/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    // evita crash se não vier JSON
    const text = await resp.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error('Resposta inválida do servidor');
    }

    if (!resp.ok) {
      throw new Error(data.message || 'Erro ao registrar');
    }

    // sucesso → redireciona pro login
    window.location.href = 'login.html';

  } catch (err) {
    console.error(err);
    errorText.innerText = err.message;
  }
});
