function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.readStatus = () => {
    return isRead ? "ALREADY READ" : "NOT READ YET";
  };
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

const myLibrary = [];

const inputTitle = document.querySelector('[name="book-title"]');
const inputAuthor = document.querySelector('[name="book-author"]');
const inputPages = document.querySelector('[name="book-pages"]');
const inputReadStatus = document.querySelector('[name="read-status"]');
const inputFields = [inputTitle, inputAuthor, inputPages];
const textInputFields = [inputTitle, inputAuthor];

const submitBtn = document.querySelector(".modal__submit");
const booksContainer = document.querySelector(".book__container");

//Show modal from add button
const addBookModal = () => {
  const btnNewBook = document.querySelector("#add-book");
  btnNewBook.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    inputTitle.focus();
  });
};

// Click out of modal
const modal = document.querySelector(".modal__container");
modal.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  clearInput();
});

// On page load
document.addEventListener("DOMContentLoaded", () => {
  addBookModal();
});

//Submit btn function
submitBtn.addEventListener("click", () => {
  //Variable to return true if all input fields have value
  const hasInputValue = inputFields.every((el) => el.value !== "");

  for (const input of textInputFields) {
    if (input.value == "") {
      input.classList.add("input-error");
      input.placeholder = "* This field is required";
    }
  }

  if (inputPages.value <= 0) {
    inputError(inputPages);
    inputPages.placeholder = "* This field is required";
  } else if (inputPages.value > 10000) {
    inputError(inputPages);
    inputPages.placeholder = "* Exceeded limit: 10,000";
  } else if (hasInputValue) {
    // Add to library
    addBookToLibrary();
    // Hide modal
    modal.classList.toggle("hidden");
    // Clear input fields
    clearInput();
    // Update DOM with new card
    update(myLibrary);
  }
});

//Input error function (Reveal error on placeholder value)
const inputError = (inputElement) => {
  inputElement.classList.add("input-error");
  inputElement.value = "";
};

//Add to myLibrary array
const addBookToLibrary = () => {
  let acc = [];
  acc.push(inputTitle.value, inputAuthor.value, inputPages.value);

  if (inputReadStatus.checked) {
    acc.push(true);
  } else {
    acc.push(false);
  }

  const newBookObj = new Book(...acc);
  myLibrary.push(newBookObj);
};

//Clear input fields
const clearInput = () => {
  for (const el of inputFields) {
    el.value = "";
    el.classList.remove("input-error");
  }
  inputTitle.placeholder = "Title";
  inputAuthor.placeholder = "Author";
  inputPages.placeholder = "Pages";

  if (inputReadStatus.checked) {
    inputReadStatus.checked = false;
  }
};

//Add new book to DOM
const update = (objArr) => {
  let displayBooks = objArr.map((book) => {
    return `<div class="book__card flex flex-col">
    <h2 class="book__title" data-title="${book.title}">${book.title}</h2>
    <h3 class="book__author" data-author="${book.author}">${book.author}</h3>
    <p class="book__pages" data-pages="${book.pages}">${book.pages} pages</p>
    <button class=" ${
      book.isRead ? "read-true" : "read-false"
    } btn btn--card__read" data-is-read="${
      book.isRead
    }" onclick="readBookToggle(this)">${book.readStatus()}</button>
    <button class="btn btn--card__remove" onclick="removeBook(this)">REMOVE</button>
  </div>`;
  });
  displayBooks = displayBooks.join("");
  booksContainer.innerHTML = displayBooks;
};

// Event handler to remove book
const removeBook = (el) => {
  let card = el.parentNode;
  let nodes = card.childNodes;

  let cardTitle = nodes[1].innerText;
  let cardAuthor = nodes[3].innerText;

  for (const bookObj of myLibrary) {
    if (bookObj.title == cardTitle && bookObj.author == cardAuthor) {
      let index = myLibrary.indexOf(bookObj);
      myLibrary.splice(index, 1);
      card.remove();
    }
  }
};

// Event handler to toggle card read status
const readBookToggle = (el) => {
  let card = el.parentNode;
  let nodes = card.childNodes;

  let cardTitle = nodes[1].innerText;
  let cardAuthor = nodes[3].innerText;

  for (const bookObj of myLibrary) {
    if (bookObj.title == cardTitle && bookObj.author == cardAuthor) {
      if (el.getAttribute("data-is-read") && bookObj.isRead) {
        el.setAttribute("data-is-read", false);
        bookObj.isRead = false;
        el.innerText = "NOT READ YET";
        el.classList.replace("read-true", "read-false");
      } else {
        el.setAttribute("data-is-read", true);
        bookObj.isRead = true;
        el.innerText = "ALREADY READ";
        el.classList.replace("read-false", "read-true");
      }
    }
  }
};
