/* Get HTML elements */

const books = document.querySelector("#books");
const formContainer = document.querySelector(".formContainer")
const addBookBtn = document.querySelector("#add")
const removeFormBtn = document.querySelector(".remove")


/* Define a book constructor */

class Book {
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
    readStatus(status) {
        this.read = status;
    }
}


/* Define library to store books */
let library = [];

/* Define functions to take user inputs and add to library */

function addBookToLibrary(book) {

    library.push(book);


}

/* Define function to display books */
function displayBook(book) {
    
    const container = document.createElement("div");

    const bookTitle = document.createElement("div");
    bookTitle.textContent = `${book.title}`;
    

    const bookAuthour = document.createElement("div");
    bookAuthour.textContent = `By: ${book.author}`;
    bookAuthour.classList.add('book-author')
    
        
    const bookPages = document.createElement("div");
    bookPages.textContent = `${book.pages} Pages`;

    const bookRead = document.createElement("button");
    bookRead.textContent = book.read ? `Already Read!` : `Not Read Yet!`;
    bookRead.classList.add('book-read');

    bookRead.addEventListener("click", () => {
        book.readStatus(!book.read)

        bookRead.textContent = !book.read ? `Already Read!` : `Not Read Yet!`;
    })

    const removeButton = document.createElement("button");
        removeButton.classList.add("book-remove");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
        removeBookFromLibrary(book);
        container.remove();
    });

    
    container.appendChild(bookAuthour);
    container.appendChild(bookTitle);
    container.appendChild(bookPages);
    container.appendChild(bookRead);
    container.appendChild(removeButton);

    books.appendChild(container);
}  

/* Define function to display all books */
function displayBooks() {
    books.innerHTML = "";
    library.forEach(book => displayBook(book));
}

/* Define function to take user inputs and add to library */
function addBookToLibraryForm() {
    const bookAuthor = document.querySelector("#author").value;
    const bookTitle = document.querySelector("#title").value;
    const bookPages = document.querySelector("#pages").value;
    const bookRead = document.querySelector("#read").value === "Yes";

    const newBook = new Book(bookAuthor, bookTitle, bookPages, bookRead);
    addBookToLibrary(newBook);

    // Clear form fields
    document.querySelector("#author").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#pages").value = "";
 
    displayBook(newBook);
}

/* Define function to remove book from library */
function removeBookFromLibrary(book) {
    const index = library.indexOf(book);
    if (index !== -1) {
        library.splice(index, 1);
    }
}

/* Add event listener to add and display book */
formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibraryForm();
});


/* Event listners to show and hide form */

addBookBtn.addEventListener('click', () => {
   formContainer.classList.add('show');
});

removeFormBtn.addEventListener("click", () => {
    formContainer.classList.remove('show');
})