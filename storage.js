const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

// Save the form data to local storage whenever any input changes
function saveFormData() {
  const formData = {
    title: titleInput.value,
    author: authorInput.value,
  };
  localStorage.setItem('form-data', JSON.stringify(formData));
}

// Load the saved data from local storage and fill in the form
const savedData = localStorage.getItem('form-data');
if (savedData) {
  const formData = JSON.parse(savedData);
  titleInput.value = formData.title;
  authorInput.value = formData.author;
}

titleInput.addEventListener('input', saveFormData);
authorInput.addEventListener('input', saveFormData);