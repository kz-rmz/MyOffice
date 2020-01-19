function newRequest() {
  const input = document.getElementById('option4');
  const descriptionBox = document.getElementById('request__description');
  const submit = document.querySelector('.submit-btn');
  const message = document.querySelector('.request-message');
  const form = document.querySelector('#request__form fieldset');

  input.addEventListener('change', () => {
    descriptionBox.style.display = 'block';
  })

  submit.addEventListener('click', (e) => {
    message.style.display = 'block';
    submit.style.display = 'none';
    form.disabled = true;
  })

}

export default newRequest;