const bookLists = document.querySelector('.book-lists');
const form = document.getElementById('form');
const listOfBooks = 'bookLists';

function updateList(event) {
  event.preventDefault();
  const formInput = new FormData(form);
  const inputData = Object.fromEntries(formInput.entries());

  bookLists.innerHTML += `
    <div class="book-list">
      <p>"${inputData.title}" - ${inputData.author}</p>
      <button class="remove">Remove</button>
    </div>
  `;

  // Save books to local storage
  localStorage.setItem(listOfBooks, JSON.stringify(bookLists.innerHTML));

  form.reset();
}

// Load books from local storage
function loadBooks() {
  const savedBooks = JSON.parse(localStorage.getItem(listOfBooks));
  if (savedBooks) {
    bookLists.innerHTML = savedBooks;
  }
}

// Remove book from list and local storage
function removeBook(event) {
  if (event.target.classList.contains('remove')) {
    const bookItem = event.target.parentElement;
    bookLists.removeChild(bookItem);
    localStorage.setItem(listOfBooks, JSON.stringify(bookLists.innerHTML));
  }
}

bookLists.addEventListener('click', removeBook);
window.addEventListener('load', loadBooks);
form.addEventListener('submit', updateList);