const myLibrary = [];

// Construct the book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.toggleRead = function () {
    if (this.read === "yes") {
      this.read = "no";
    } else {
      this.read = "yes";
    }
  };
}

// Adds a book object to the myLibrary array
function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// First clear all books from the display, then get the books in the myLibrary array and display them in the DOM
function displayBooks() {
  clearBookDisplay();
  const booksContainer = document.querySelector(".books-container");
  for (let i = 0; i < myLibrary.length; i++) {
    const bookTitle = document.createElement("p");
    bookTitle.textContent = `Title: ${myLibrary[i]["title"]}`;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${myLibrary[i]["author"]}`;
    const bookPages = document.createElement("p");
    bookPages.textContent = `Pages: ${myLibrary[i]["pages"]}`;
    const bookRead = document.createElement("p");
    bookRead.textContent = `Read: ${myLibrary[i]["read"]}`;
    console.log(bookTitle, bookAuthor, bookPages, bookRead);
    bookDiv = document.createElement("div");
    toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = "Toggle read";
    toggleReadBtn.classList.add("toggle-btn");
    deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete book";
    deleteBtn.classList.add("delete-btn");
    bookDiv.classList.add("book-div");
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(toggleReadBtn);
    bookDiv.appendChild(deleteBtn);
    bookDiv.dataset.id = i;
    booksContainer.appendChild(bookDiv);
  }
}

// Opens the add book form when the button is clicked
function openForm() {
  const addBookBtn = document.querySelector(".add-book-btn");
  const addBookForm = document.querySelector(".add-book-form");
  addBookBtn.addEventListener("click", () => {
    addBookForm.style.display = "flex";
    addBookBtn.style.display = "none";
  });
}

// Close the add book form when the button is clicked
function closeForm() {
  const closeFormBtn = document.querySelector(".close-form-btn");
  const addBookForm = document.querySelector(".add-book-form");
  const addBookBtn = document.querySelector(".add-book-btn");
  closeFormBtn.addEventListener("click", () => {
    addBookForm.style.display = "none";
    addBookBtn.style.display = "inline";
  });
}

// Get the book information from the form, add it to the array and run all the base event handling functions again
function submitBook() {
  const submitBookBtn = document.querySelector(".submit-book-btn");
  submitBookBtn.addEventListener("click", () => {
    const bookTitle = document.querySelector("#book-title").value;
    const bookAuthor = document.querySelector("#book-author").value;
    const bookPages = document.querySelector("#book-pages").value;
    let bookRead = "";
    const checkBoxRead = document.querySelector("#book-read");
    if (checkBoxRead.checked) {
      bookRead = "yes";
    } else {
      bookRead = "no";
    }
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    displayBooks();
    deleteBook();
    toggleRead();
  });
}

// Clear all book DOM elements
function clearBookDisplay() {
  const booksContainer = document.querySelector(".books-container");
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild);
  }
}

// Runs the toggleRead method of the selected book Object, run all the base event handling functions again
function toggleRead() {
  const toggleReadBtns = document.getElementsByClassName("toggle-btn");
  for (let i = 0; i < toggleReadBtns.length; i++) {
    toggleReadBtns[i].addEventListener("click", () => {
      console.log("click");
      const bookId = toggleReadBtns[i].parentElement.dataset.id;
      myLibrary[bookId].toggleRead();
      displayBooks();
      deleteBook();
      toggleRead();
    });
  }
}

// Delete the selected book from the array, run all the base functions again
function deleteBook() {
  const deleteBtns = document.getElementsByClassName("delete-btn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
      const bookId = deleteBtns[i].parentElement.dataset.id;
      myLibrary.splice(bookId, 1);
      displayBooks();
      deleteBook();
      toggleRead();
    });
  }
}

// Add testing book objects
addBookToLibrary("worm", "bow", 5000, "yes");
addBookToLibrary("ubik", "dick", 500, "yes");
addBookToLibrary("cronicas", "hefacar", 400, "no");

// Run all the base event handling functions
displayBooks();
openForm();
closeForm();
submitBook();
toggleRead();
deleteBook();
