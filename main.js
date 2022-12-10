const bod = document.querySelector('.body');
const button = document.querySelector('.addbook');
const form = document.querySelector('form');
const exit = document.querySelector('.exit');
const add = document.querySelector('.add');;
const titl = document.getElementById('title')
const autho = document.getElementById('author')
const page = document.getElementById('pages')
const statu = document.getElementById('status')
let hover;
let inside;
let removal;
let yes;
let value;
let no;
let read;

let library = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.added = false;
}

function addBookToLibrary(title, author, pages, status){
    let booker = new Book(title, author, pages, status)
    library.push(booker)
    bookLoop()
}

addBookToLibrary('Example Title', 'Garv Doe', 192, true)
addBookToLibrary('Example Title', 'Garv Doe', 192, true)
addBookToLibrary('Example Title', 'Garv Doe', 192, false)

function bookLoop(){
    library.forEach(element => {

        

        
        if(element.added == false){
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

                removal = document.createElement('svg');
                book.appendChild(removal)
                removal.classList.toggle('removed')
                removal.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /> </svg>'

                removal.addEventListener('click', () => {
                    hover = document.createElement('div');
                    book.appendChild(hover)
                    hover.style.transition = '1s ease-in-out'
                    hover.classList.toggle('hovered')
                    hover.textContent = 'Remove Book?'

                    inside = document.createElement('div')
                    hover.appendChild(inside)
                    inside.className = 'inside'

                    yes = document.createElement('div')
                    inside.appendChild(yes)
                    yes.textContent = 'Yes'
                    yes.className = 'yes'
                    
                    no = document.createElement('div')
                    inside.appendChild(no)
                    no.textContent = 'No'
                    no.className = 'no'

                    yes.addEventListener('click', () => {
                        let index = library.indexOf(element)
                        let removed = library.splice(index, 1)
                        book.remove()
                    })

                    no.addEventListener('click', () => {
                        hover.remove()
                        inside.remove()
                        yes.remove()
                        no.remove()

                    })
                })


                
            if(element.status == true){
                value = true;
                read = document.createElement('svg');

                read.classList.toggle('read')
                read.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z" /> </svg>'
                textwrap.appendChild(read)


                read.addEventListener('click', (event) => {
                    if(event.target.value == true){
                        console.log('hi')
                        event.target.classList.toggle('read')
                    }
                    
                })
            }else if(element.status == false){
                value = false;
                read = document.createElement('svg');
                read.classList.toggle('noread')
                read.innerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z" /> </svg>'
                textwrap.appendChild(read)
                // read.addEventListener('click', (event) => {
                //     event.target.classList.toggle('read')
                // })
            }


            element.added = true;


        }

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

add.addEventListener('click', (event) => {
    event.preventDefault()
    addBookToLibrary(titl.value, autho.value, page.value, statu.checked)
    titl.value = ''
    autho.value = ''
    page.value = '' 
    statu.checked = false
    form.style.scale = 0
    form.style.visibility = 'hidden';
})



//need to add read status checker

//I cant seem to figure out read status checker switch, and how to switch the object to the opposite, or how to know that 
//the element im editing is apart of a certain object.