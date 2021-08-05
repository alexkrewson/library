function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read


}

const book = new Book('title1', 'author1', 'pages1', 'read1')
console.log(book.title) 
