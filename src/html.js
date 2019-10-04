const html = (() => {
  const createElement = ({
    tag, id, classes, text, src, alt, name, type, htmlFor,
  }) => {
    const item = document.createElement(tag);
    if (id) item.setAttribute('id', id);
    if (classes) classes.split(' ').forEach(name => item.classList.add(name));
    if (text) item.innerHTML = text;
    if (src) item.src = src;
    if (alt) item.alt = alt;
    if (name) item.name = name;
    if (type) item.type = type;
    if (htmlFor) item.htmlFor = htmlFor;
    return item;
  };

  return { createElement };
})();

export default html;
