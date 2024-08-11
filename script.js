const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

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
    bookDiv.classList.add("book-div");
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);
    booksContainer.appendChild(bookDiv);
  }
}

function clickAddBookBtn() {
  const addBookBtn = document.querySelector(".add-book-btn");
  const addBookForm = document.querySelector(".add-book-form");
  addBookBtn.addEventListener("click", () => {
    addBookForm.style.display = "flex";
    addBookBtn.style.display = "none";
  });
}

function closeForm() {
  const closeFormBtn = document.querySelector(".close-form-btn");
  const addBookForm = document.querySelector(".add-book-form");
  const addBookBtn = document.querySelector(".add-book-btn");
  closeFormBtn.addEventListener("click", () => {
    addBookForm.style.display = "none";
    addBookBtn.style.display = "inline";
  });
}

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
  });
}

function clearBookDisplay() {
  const booksContainer = document.querySelector(".books-container");
  while (booksContainer.firstChild) {
    booksContainer.removeChild(booksContainer.firstChild);
  }
}

addBookToLibrary("worm", "bow", 5000, "yes");
addBookToLibrary("ubik", "dick", 500, "yes");
addBookToLibrary("cronicas", "hefacar", 400, "no");
displayBooks();
clickAddBookBtn();
closeForm();
submitBook();
