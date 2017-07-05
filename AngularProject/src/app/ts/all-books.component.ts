import { Component } from '@angular/core';
import { BookService } from './book.service'

@Component({
    selector: 'allBooks',
    templateUrl: './../html/all-books.component.html'
})

export class AllBooksComponent {

    constructor(private bookService: BookService) { }

    showBookDetails: boolean = false;
    selectedBookName: string;
    selectedBookAuthor: string;
    selectedBookDescription: string;


    selectedTab: number = 1;
    booksListFromParent: Array<any> = this.bookService.getBooks("science");

    setSelectedTab(tab: number, subject: string) {
        this.selectedTab = tab;
        this.booksListFromParent = this.bookService.getBooks(subject);
    }


    selectBook(book: any) {
        let a = 1;
        this.showBookDetails = true
        this.selectedBookName = book.title;
        this.selectedBookAuthor = book.author;
        this.selectedBookDescription = book.description;
    }
}