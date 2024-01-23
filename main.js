let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookContainer(book) {
  const container = document.createElement("div");
  container.classList.add("books-container"); 
  container.dataset.bookIndex = myLibrary.indexOf(book);
  const para = document.createElement("p");
  const tooltipSpan = document.createElement("span");
  para.textContent = book.title; 
  para.appendChild(tooltipSpan);
  para.classList.add("tooltip");
  para.dataset.fulltext = book.title;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-button"); 
  container.appendChild(para);
  container.appendChild(deleteBtn);
  body.appendChild(container);
}

function updateDataAttributes() {
  const bookContainers = document.querySelectorAll(".books-container"); 

  bookContainers.forEach((container, index) => {
    container.dataset.bookIndex = index;
  });
}

function removeBook(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  updateDataAttributes();
  setupDeleteButtons(); // Set up delete buttons after updating data attributes
}

function setupDeleteButtons() {
  const deleteButtons = document.querySelectorAll(".delete-button");

  // Remove existing event listeners
  deleteButtons.forEach((button) => {
    button.removeEventListener("click", handleDeleteButtonClick);
  });

  // Set up new event listeners
  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDeleteButtonClick);
  });
}

// ...

function handleDeleteButtonClick(event) {
  const button = event.target;
  const container = button.parentElement;
  const bookIndex = container.dataset.bookIndex;

  // Ensure the bookIndex is valid before attempting removal
  if (bookIndex !== undefined && myLibrary[bookIndex]) {
    // Remove the container from the DOM directly
    container.remove();
    removeBook(bookIndex);

    console.log(`clicked:${bookIndex}`);
  }
}

console.log(myLibrary);

function changeReadStatus() {
  const statusButtons = document.querySelectorAll(".status-btn");

  
  statusButtons.forEach((button) => {
    button.removeEventListener("click", handleStatusButtonClick);
  });

  
  statusButtons.forEach((button) => {
    button.addEventListener("click", handleStatusButtonClick);
  });
}

function handleStatusButtonClick(event) {
  const button = event.target;
  const container = button.parentElement;
  const bookIndex = container.dataset.bookIndex;

  
  if (bookIndex !== undefined && myLibrary[bookIndex]) {
    const book = myLibrary[bookIndex];
    if (book.status === "Read") {
      book.status = "Unread";
    } else {
      book.status = "Read";
    }
    // Update the button text and data attribute based on the new status
    button.textContent = book.status;
    button.dataset.status = book.status;

    console.log(book.status);
  }
}

setupDeleteButtons();
changeReadStatus();

const body = document.querySelector(".books-body");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const bookForm = document.getElementById("book-form");
const bookNameInput = document.getElementById("book-name");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const statusSelect = document.getElementById('status');
const statusInput = statusSelect.value;

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookName = bookNameInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const status = statusInput;
  const book = new Book(bookName, author, pages, status);
  addBookToLibrary(book);
  createBookContainer(book);

  // Find the container for the newly added book
  const container = document.querySelector(`.books-container[data-book-index="${myLibrary.indexOf(book)}"]`);

  // Create and append the status button
  const statusBtn = document.createElement("button");
  statusBtn.textContent = book.status;
  statusBtn.classList.add("status-btn");
  statusBtn.dataset.status = book.status;
  container.appendChild(statusBtn);

  dialog.close();
  
  setupDeleteButtons();
  updateDataAttributes();
  changeReadStatus();
});
