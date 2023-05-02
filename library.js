/* Get HTML elements */


let form = document.querySelector("#form");
let sub = document.querySelector("form")
let add = document.querySelector("#add")
let books = document.querySelector("#books")


/* Hide form from DOM*/
window.addEventListener("load", remove);

function remove() {
    form.removeChild(sub)
}


/* Display form */
add.addEventListener("click", display)

function display() {
  form.appendChild(sub)
}

/* Define a book constructor */

function Books(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

/* Define library to store books */ 
let myLibrary = [];

function addBookToLibrary(author, title, pages, read) {
    let newBook = new Books(author, title, pages, read)

    myLibrary.push(newBook);
}

/* Add books manually */

addBookToLibrary("Mihret Debebe", "Lela Sew", 419, "Yes");
addBookToLibrary("Bealu Girma", "Oromay", 300, "Yes")
addBookToLibrary("Bealu Girma", "Kadmas Bashager", 321, "no")

/* define function to display books */
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {

        let container = document.createElement("div");
        let bookTitle = document.createElement("div");
        let bookAuthour = document.createElement("div");
        let bookPages = document.createElement("div");
        let bookRead = document.createElement("div")
        let removeButton = document.createElement("div")
        
        bookAuthour.textContent = "Author: " + myLibrary[i].author;
        bookTitle.textContent = "Title: " + myLibrary[i].title;
        bookPages.textContent = "Pages: " + myLibrary[i].pages;
        removeButton.textContent = "X";
        removeButton.className = "button";
        
        if (myLibrary[i].read == "Yes") {
            bookRead.textContent = "Read?: Yes"
        }else {
            bookRead.textContent = "Read: Not Yet"
        } 

        container.appendChild(removeButton);
        container.appendChild(bookAuthour);
        container.appendChild(bookTitle);
        container.appendChild(bookPages);
        container.appendChild(bookRead)

        books.appendChild(container)
    }
} 

displayBooks();

/*

// Functions to take user input and add it to the Library 

let takeInput = document.querySelector("#submit");
let bookAuthour = document.querySelector("#author");
let bookTitle = document.querySelector("#title");
let bookPages = document.querySelector("#pages");
let bookRead = document.querySelector("#read")

takeInput.addEventListener("click", userInput, false);

function userInput(event) {
    addBookToLibrary(bookTitle, bookAuthour, bookPages, bookRead);
    event.preventDefault();
}

*/