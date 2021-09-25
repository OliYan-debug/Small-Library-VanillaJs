const btnAdd = document.querySelector("#btn")
const inputContainer = document.querySelector(".container")
const form = document.querySelector("form");

let myLibrary = [
    {
        name:"Game of Thrones", 
        author:"George R. R. Martin",
        imageSrc: "http://img3.wikia.nocookie.net/__cb20130302001049/iceandfire/images/b/b6/Game_of_thrones.jpeg",
        pages:1090, 
        status: "Reading"
    },
    {
        name:"The Witcher",
        author:"Andrzej Sapkowski",
        imageSrc: "http://d26lpennugtm8s.cloudfront.net/stores/001/131/368/products/the-witcher-livro-06-a-torre-da-andorinha-capa-dura-andrzej-sapkowiski-martins-fontes1-2829214a4dcab71b4e15877730521513-640-0.jpg",
        pages: 393,
        status:  "Finished"
    },
    {
        name:"Lord of The Rings",
        author:"J. R. R. Tolkien",
        imageSrc:"https://media.npr.org/assets/bakertaylor/covers/t/the-lord-of-the-rings/9780618640157_custom-s6-c30.jpg?t=1337606246",
        pages: 990,
        status:  "Reading"
    },
    {
        name:"Dangerous Game",
        author:"William Harris",
        imageSrc:"https://english-e-reader.net/covers/Dangerous_Game-Harris_William.jpg",
        pages: 220,
        status:  "Reading"
    }
];

btnAdd.addEventListener("click", () =>{
    if(inputContainer.classList.contains('removeItem')){
        inputContainer.classList.remove('removeItem')
        btnAdd.innerText = "Close"
        btnAdd.style.backgroundColor = "red"
        btnAdd.style.color = "#0f0f0f"
    }
    else{
        inputContainer.classList.add('removeItem')
        btnAdd.innerText = "Add Book"
        btnAdd.style.backgroundColor = "#0f0f0f"
        btnAdd.style.color = "#ffff"
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let status = document.querySelector('.radio:checked').value
    let image = document.querySelector('#image').value
    let imageSrc = image == "" ? "https://saltlakemailing.com/wp-content/uploads/2014/02/Publish-Your-Book.jpg" : image
    let BookAdded = new Book(title,author,imageSrc,pages,status)
    myLibrary.push(BookAdded)
    showBooks()
})

function Book(name, author, imageSrc, pages, status){
    this.name = name
    this.author = author
    this.pages = pages
    this.status = status
    this.imageSrc = imageSrc
}

function changeStatus(bookIndex){
    let status = myLibrary[bookIndex].status 
    console.log(status)
    if(status == "Reading"){
        myLibrary[bookIndex].status = "Finished"
    }else{
        myLibrary[bookIndex].status = "Reading"
    }
    showBooks()
}

function removeBook(bookIndex){
    myLibrary.splice(bookIndex,1)
    showBooks()
}

function showBooks(){
    let box = document.querySelector(".box")
    box.innerHTML = ''
    if(myLibrary==""){
        box.innerHTML = "<h2>Empty Place </h2>"
    }
    for (let book of myLibrary){
        let card = document.createElement("div");
        card.setAttribute("class","minibox");
        let title = document.createElement("p");
        let author = document.createElement("h4");
        let pages = document.createElement("p");
        let status = document.createElement("p");
        let statusBtn = document.createElement("button");
        let removeBook = document.createElement("button");
        let image = document.createElement('img');
        image.src = book.imageSrc
        title.innerText = book.name;
        author.innerText = book.author;
        pages.innerText ="Pages: " + book.pages;
        status.innerText = "Status: "+  book.status;
        statusBtn.innerText = "Change Status";
        statusBtn.setAttribute("onclick", `changeStatus(${myLibrary.indexOf(book)})`);
        removeBook.innerText = "Delete";
        removeBook.setAttribute("onclick", `removeBook(${myLibrary.indexOf(book)})`);
        card.append(author, image, title, pages, status, statusBtn, removeBook)
        box.appendChild(card);

    }}
showBooks()