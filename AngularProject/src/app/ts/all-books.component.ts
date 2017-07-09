import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service'

@Component({
    selector: 'allBooks',
    templateUrl: './../html/all-books.component.html'
})

export class AllBooksComponent implements OnInit {

    constructor(private bookService: BookService) {
        this.setSelectedTab(1, "scienceBooks");
    }

    showBookDetails: boolean = false;
    selectedBookName: string;
    selectedBookAuthor: string;
    selectedBookDescription: string;


    ngOnInit() {
        console.log("Allbooks component initialzied");
    }

    selectedTab: number = 1;
    booksListFromParent: Array<any>;

    setSelectedTab(tab: number, subject: string) {
        this.selectedTab = tab;

        this.bookService.getBooks(subject)
            .then(bookslist => {
                this.booksListFromParent = bookslist
                console.log("The books list is: " + this.booksListFromParent);
            });
    }

    selectBook(book: any) {
        let a = 1;
        this.showBookDetails = true
        this.selectedBookName = book.title;
        this.selectedBookAuthor = book.author;
        this.selectedBookDescription = book.description;
    }
}