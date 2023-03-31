function showLists() {
  document.querySelector('#displayContent').innerHTML = `<main id="books">
      <h3>My Books</h3>
      <div class="book-lists">
          <div class="book-list">
              <p>"Title" - Author</p>
              <button class="remove">Remove</button>
          </div>
      </div>
  </main>`;
}

function showAdd() {
  document.querySelector('#displayContent').innerHTML = `<main id="add-books">
      <h3>Add Books</h3>
      <div class="add-book">
          <form id="form" method="POST">
              <input name="title" id="title" type="text" placeholder="Title" required>
              <input name="author" id="author" type="text" placeholder="Author" required>
              <div class="add-btn">
                  <input type="submit" id="add" value="Add">
              </div>
          </form>
      </div>
  </main>`;
}

function showContact() {
  document.querySelector('#displayContent').innerHTML = '<h2>Contact</h2><p>This is the contact page.</p>';
}

function route() {
  const path = window.location.pathname;
  if (path === '/' || path === '/lists') {
    showLists();
  } else if (path === '/add') {
    showAdd();
  } else if (path === '/contact') {
    showContact();
  }
}

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, href);
    route();
  }
});

window.addEventListener('popstate', route);
window.addEventListener('load', route);
