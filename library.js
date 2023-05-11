/* Get HTML elements */

let books = document.querySelector("#books");
let body = document.querySelector("body");
let formContainer = document.querySelector("#form")
let removeForm = document.querySelector(".remove")
let add = document.querySelector("#add")


/* Define a book constructor */

function Books(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

/* Define library to store books */ 
let myLibrary = [];

/* Define functions to take user inputs and add to library */

function addBookToLibrary() {
    let bookAuthour = document.querySelector("#author").value;
    let bookTitle = document.querySelector("#title").value;
    let bookPages = document.querySelector("#pages").value;
    let bookRead = document.querySelector("#read").value;

    let newBook = new Books(bookAuthour, bookTitle, bookPages, bookRead)

    myLibrary.push(newBook);

    
    
    //clear form fields
    document.querySelector("#author").value = ""
    document.querySelector("#title").value = ""
    document.querySelector("#pages").value = ""

}

/* Define function to display books */
function displayBooks() {
    
    for (let i = 0; i < myLibrary.length; i++) {
        let books = document.querySelector("#books");
        let container = document.createElement("div");
        let bookTitle = document.createElement("div");
        let bookAuthour = document.createElement("div");
        let bookPages = document.createElement("div");
        let bookRead = document.createElement("button")
        let removeButton = document.createElement("button")

        bookTitle.className = "style";
        bookAuthour.className = "style";
        bookPages.className = "style"


        if (myLibrary[i].read === "Yes") {
            bookRead.textContent = "Read Book: Yes";
            bookRead.className = "readalready";
        }
        else{
            console.log(myLibrary[i].read)
            bookRead.textContent = "Read Book: Not Yet";
            bookRead.className = "readalert";
        }


        
        bookAuthour.textContent = "Author: " + myLibrary[i].author;
        bookTitle.textContent = "Title: " + myLibrary[i].title;
        bookPages.textContent = "Pages: " + myLibrary[i].pages;
        removeButton.textContent = "Remove";
        removeButton.className = "button";
        
        
        
        container.appendChild(bookAuthour);
        container.appendChild(bookTitle);
        container.appendChild(bookPages);
        container.appendChild(bookRead);
        container.appendChild(removeButton);

        books.appendChild(container);
    }

}  


form.addEventListener("submit", (event) => {
    books.textContent = "";
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
});  

removeForm.addEventListener("click", () => body.removeChild(formContainer))
add.addEventListener("click", () => body.appendChild(formContainer))
window.addEventListener("DOMContentLoaded", () => body.removeChild(formContainer))


