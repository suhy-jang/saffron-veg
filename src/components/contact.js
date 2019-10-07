import html from './html';

const contact = (() => {
  const descriptionContact = 'Do you have a suggestion or any service related query?'
  + 'Feel free to reach out to us! Whether it is a complaint or a compliment,'
  + 'we will respond to your feedback. Hearing from you motivates us to offer'
  + 'the best services and to cater to any special request.';

  const descriptionForm = 'Please fill out this form below. We will be in touch with you soon.';

  const writeDescriptions = () => [
    html.createElement({ tag: 'h1', classes: 'text-align-center h-title', text: 'Contact Us' }),
    html.createElement({ tag: 'p', classes: 'description', text: descriptionContact }),
    html.createElement({ tag: 'p', classes: 'description', text: descriptionForm }),
  ];

  const buildField = ({
    id, writeTag, type, text,
  }) => {
    const container = html.createElement({ tag: 'div', classes: 'field' });
    const label = html.createElement({ tag: 'label', htmlFor: id, text });
    let write;
    if (writeTag === 'input') {
      write = html.createElement({
        tag: writeTag, id, name: id, type,
      });
    } else {
      write = html.createElement({
        tag: writeTag, id, name: id, classes: id,
      });
    }
    container.appendChild(label);
    container.appendChild(write);
    return container;
  };

  const buildForm = () => {
    const formContainer = html.createElement({ tag: 'form', classes: 'contact_form' });
    const fieldSet = html.createElement({ tag: 'fieldset' });
    fieldSet.appendChild(buildField({
      id: 'username', writeTag: 'input', type: 'text', text: 'Name',
    }));
    fieldSet.appendChild(buildField({
      id: 'email', writeTag: 'input', type: 'email', text: 'Email',
    }));
    fieldSet.appendChild(buildField({
      id: 'contact_no', writeTag: 'input', type: 'tel', text: 'Contact no.',
    }));
    fieldSet.appendChild(buildField({
      id: 'store',
      writeTag: 'input',
      type: 'text',
      text: 'Store name & Location (if applicable)',
    }));
    fieldSet.appendChild(buildField({
      id: 'comments', writeTag: 'textarea', classes: 'comments', text: 'Comments',
    }));
    const submitBtn = html.createElement({ tag: 'button', classes: 'submit-btn', text: 'Send' });
    fieldSet.appendChild(submitBtn);
    formContainer.appendChild(fieldSet);
    return formContainer;
  };

  const create = () => {
    const mainContainer = html.createElement({ tag: 'div', id: 'contact', classes: 'contact-content' });
    writeDescriptions().forEach(description => mainContainer.appendChild(description));
    mainContainer.appendChild(buildForm());
    return mainContainer;
  };
  return { create };
})();

export default contact;
