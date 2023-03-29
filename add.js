const bookLists = document.querySelector('.book-lists');
const form = document.getElementById('form');

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

  form.reset();
}

form.addEventListener('submit', updateList);