const html = (() => {
  const createElement = ({
    type, id, classes, text, src, alt,
  }) => {
    const item = document.createElement(type);
    if (id) item.setAttribute('id', id);
    if (classes) classes.forEach(name => item.classList.add(name));
    if (text) item.innerHTML = text;
    if (src) item.src = src;
    if (alt) item.alt = alt;
    return item;
  };

  return { createElement };
})();

export default html;
