document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('action');
  const msg = document.getElementById('message');
  let count = 0;
  if(!btn || !msg) return;
  btn.addEventListener('click', function(){
    count += 1;
    msg.textContent = `Button clicked ${count} time${count!==1?'s':''}`;
    btn.classList.add('clicked');
    setTimeout(()=> btn.classList.remove('clicked'), 150);
  });
});
