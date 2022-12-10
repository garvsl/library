const bod = document.querySelector('.body');
const button = document.querySelector('.addbook');
const form = document.querySelector('form');
const exit = document.querySelector('.exit');
const add = document.querySelector('.add');;

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

addBookToLibrary('Reverened Insanity', 'Garv sehgal', 192, true)

function bookLoop(){
    library.forEach(element => {
        
        let book = document.createElement('div');
        book.className = 'book';
        bod.appendChild(book);

        let bookinner = document.createElement('div');
        bookinner.className = 'bookinner';
        book.appendChild(bookinner);

        let textwrap = document.createElement('div');
        textwrap.className = 'textwrap';
        bookinner.appendChild(textwrap)

        let title = document.createElement('h3');
        title.textContent = element.title
        textwrap.appendChild(title)


        let author = document.createElement('h4');
        author.textContent = element.author
        textwrap.appendChild(author)


        let pages = document.createElement('h5');
        pages.textContent = element.pages + ' Pages'
        textwrap.appendChild(pages)
    });
}

button.addEventListener('mousedown', ()=>{
    button.style.backgroundColor = 'green'
})

button.addEventListener('mouseup', () => {
    button.style.backgroundColor = 'white';
    form.style.visibility = 'visible';
    form.style.scale = 1
})



exit.addEventListener('mouseup', () => {
    form.style.scale = 0
    form.style.visibility = 'hidden';
    
})





/* make a div with class bookinner and make another with class text-wrap and append it to bookinner, and append h3 with class title, h4 with class author, and another h4 with pages, for the status idk  to text-wrap
make it say pages after the number inputted*/