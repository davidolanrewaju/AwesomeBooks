// select the parent element that holds all the book items
const bookContainer = document.querySelector('.book-lists');

// define a function to remove a book item
function removeBook(event) {
  // get the clicked remove button
  const removeBtn = event.target;
  // get the closest ancestor element with the 'book-list' class
  const bookItem = removeBtn.closest('.book-list');
  // remove the book item from the DOM
  bookItem.remove();
}

// attach a click event listener to the book container
bookContainer.addEventListener('click', (event) => {
  // check if the clicked element has the 'remove' class
  if (event.target.classList.contains('remove')) {
    // call the removeBook function with the event as the argument
    removeBook(event);
  }
});