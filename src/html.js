const html = (() => {
  const createElement = ({type, id, classes, text}) => {
    const item = document.createElement(type);
    if (id) {
      item.setAttribute('id', id);
    }
    if (classes) {
      classes.forEach(name => item.classList.add(name));
    }
    if (text) {
      item.innerHTML = text;
    }
    return item;
  };
  return { createElement };
})();

export default html;
