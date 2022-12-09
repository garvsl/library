bod = document.querySelector('.body')


let library = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(title, author, pages, status){
    let booker = new Book(title, author, pages, status)
    library.push(booker)
    bookLoop()
}

addBookToLibrary('Reverened', 'Garv', 192, true)

function bookLoop(){
    library.forEach(element => {
        let div = document.createElement('div');
        div.className = 'book'
        bod.appendChild(div);
        // make two more and make them the design ones

    });
}