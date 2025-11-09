const el = document.querySelector('.scriptsearch');

el.addEventListener('keydown', e => {
  if (e.key === 'Enter') e.preventDefault();
  if (el.textContent.length >= 33 && e.key.length === 1 && !e.ctrlKey && !e.metaKey) e.preventDefault();
});

el.addEventListener('input', () => {
  if (el.textContent.trim() === "") {
    el.setAttribute('data-placeholder', 'Type here...');
  }
});




if (window.location.href.includes('scripts.html')) {
  document.getElementById('scripts').style.color = 'black';
}
if (window.location.href.includes('index.html')) {
  document.getElementById('home').style.color = 'black';
}
