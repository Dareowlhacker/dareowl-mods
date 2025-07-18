document.getElementById('search').addEventListener('input', function(){
  const term = this.value.toLowerCase();
  document.querySelectorAll('.mod-card').forEach(card => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});
