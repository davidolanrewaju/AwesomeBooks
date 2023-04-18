const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

const lists = document.getElementById('lists');
const addBooks = document.getElementById('add-books');
const contact = document.getElementById('contact');

listLink.addEventListener('click', () => {
  window.location.reload();
  addBooks.style.display = 'none';
  contact.style.display = 'none';
  lists.style.display = 'block';
});

addLink.addEventListener('click', () => {
  lists.style.display = 'none';
  contact.style.display = 'none';
  addBooks.style.display = 'block';
});

contactLink.addEventListener('click', () => {
  addBooks.style.display = 'none';
  lists.style.display = 'none';
  contact.style.display = 'block';
});