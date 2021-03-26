const formInputs = {
  meat: {
    title: 'Proteína:',
  },
  patty: {
    title: 'Número de Hambúrgueres:',
  },
  doneness: {
    title: 'Ponto da Carne:',
  },
  answer: {
    title: 'Gostaria de Queijo?',
  },
  toppings: {
    title: 'Quais complementos?',
  },
  bun: {
    title: 'Tipo de pão?',
  },
  sauce: {
    title: 'Qual molho?',
  },
  observation: {
    title: 'Observações:',
  },
};
const formInputsKeys = Object.keys(formInputs);

function renderOrderSummary(formData) {
  const contentEl = document.getElementById('content');
  removeAllHtmlContent(contentEl);

  const heading = document.createElement('h2');
  heading.innerText = 'Resumo do Pedido';
  contentEl.appendChild(heading);

  const responses = [];
  formInputsKeys
    .filter((input) => formData.get(input))
    .forEach((input) => {
      const container = document.createElement('div');

      const titleEl = document.createElement('span');
      titleEl.textContent = formInputs[input].title;
      titleEl.style.fontWeight = 'bold';

      const valueEl = document.createElement('span');
      valueEl.textContent = ' ' + formData.get(input);

      container.appendChild(titleEl);
      container.appendChild(valueEl);
      responses.push(container);
    });

  responses.map((p) => contentEl.appendChild(p));
}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  // Just to debug in console if it's actually coming something from the form
  formInputsKeys.map((input) => console.log(formData.get(input)));

  renderOrderSummary(formData);
}

function main() {
  const form = document.forms[0];
  form.addEventListener('submit', onFormSubmit);
}

window.addEventListener('load', main);
