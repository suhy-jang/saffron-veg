const html = (() => {
  const createElement = ({
    tag, id, classes, text, src, alt, name, type, htmlFor,
  }) => {
    const item = document.createElement(tag);
    if (id) item.setAttribute('id', id);
    if (classes) classes.split(' ').forEach(one => item.classList.add(one));
    if (src) item.src = src;
    if (alt) item.alt = alt;
    if (name) item.name = name;
    if (type) item.type = type;
    if (htmlFor) item.htmlFor = htmlFor;
    if (text) item.appendChild(document.createTextNode(text));
    return item;
  };

  const resizeTextarea = () => {
    const textarea = document.querySelector('textarea');
    textarea.addEventListener('keyup', () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${20 + textarea.scrollHeight}px`;
    });
  };

  return { createElement, resizeTextarea };
})();

export default html;
