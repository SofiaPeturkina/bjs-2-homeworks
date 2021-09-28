// Задание 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this._state *= 1.5;
        this.state = this._state;

        return this._state;
    }
    set state(mark) {
        if (mark < 0) {this._state = 0;}
        else if (mark > 100) {this._state = 100;}
        else {this._state = mark}
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super( name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

// Задача 2
class Library { 
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            } else {
                return null;
            }
        }
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}