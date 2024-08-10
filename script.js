const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.page = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

addBookToLibrary("worm", "bow", 5000, true);
addBookToLibrary("ubik", "dick", 500, true);
addBookToLibrary("cronicas", "hefacar", 400, false);

console.log(myLibrary);
displayBooks();
