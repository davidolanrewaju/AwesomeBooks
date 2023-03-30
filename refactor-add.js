class BookList {
  constructor(bookListSelector, formSelector, localStorageKey) {
    this.bookList = document.querySelector(bookListSelector);
    this.form = document.querySelector(formSelector);
    this.localStorageKey = localStorageKey;

    this.loadBooks();
    this.setupEventListeners();
  }

  updateList(event) {
    event.preventDefault();

    const formInput = new FormData(this.form);
    const inputData = Object.fromEntries(formInput.entries());

    const newBook = `
        <div class="book-list">
          <p>"${inputData.title}" - ${inputData.author}</p>
          <button class="remove">Remove</button>
        </div>
      `;

    this.bookList.innerHTML += newBook;
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.bookList.innerHTML));

    this.form.reset();
  }

  loadBooks() {
    const savedBooks = JSON.parse(localStorage.getItem(this.localStorageKey));
    if (savedBooks) {
      this.bookList.innerHTML = savedBooks;
    }
  }

  removeBook(event) {
    if (event.target.classList.contains('remove')) {
      const bookItem = event.target.parentElement;
      bookItem.remove();
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.bookList.innerHTML));
    }
  }

  setupEventListeners() {
    this.bookList.addEventListener('click', this.removeBook.bind(this));
    this.form.addEventListener('submit', this.updateList.bind(this));
  }
}

/* eslint-disable */
const bookList = new BookList('.book-lists', '#form', 'bookLists');
/* eslint-disable */