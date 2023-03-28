// const addBtn = document.querySelector('.add');
// const bookLists = document.querySelector('.book-lists');
// const form = document.getElementById('form');

// const formData = new FormData(form);

// const inputData = Object.fromEntries(formData.entries());

// function updateList() {
//   bookLists.innerHTML = `
//         <div class="book-list">
//                 <p>"${inputData[0]}" by ${inputData[1]}</p>
//                 <button>Remove</button>
//         </div>
//     `;
// }

// addBtn.addEventListener('click', updateList);

const bookLists = document.querySelector('.book-lists');
const form = document.getElementById('form');

function updateList(event) {
  event.preventDefault();
  const formInput = new FormData(form);
  const inputData = Object.fromEntries(formInput.entries());

  bookLists.innerHTML += `
    <div class="book-list">
      <p>"${inputData.title}" by ${inputData.author}</p>
      <button>Remove</button>
    </div>
  `;
}

form.addEventListener('submit', updateList);