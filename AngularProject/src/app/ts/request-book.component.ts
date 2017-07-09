import { Component, OnInit } from '@angular/core';
import { Book } from "./book";
import { BookService } from './book.service'

@Component({
    selector: 'request-book',
    templateUrl: "./../html/request-book.component.html",
    styleUrls: ['./../css/forms.css']
})

export class RequestBookComponent implements OnInit {

    constructor(private bookService: BookService) {}
    formSubmitted: boolean = false;

    ngOnInit() {
        console.log("request book initialzed'");
    }

    currentDate: Date;
    tickFunction() {
        this.currentDate = new Date();
    }
    book = new Book();

    onSubmit(requestBookForm: any) {
        this.formSubmitted = true;

        this.book.isAvailable = true;
        console.log("Form submitted for book: " + this.book);

        this.bookService.addBooks("philosopyBooks", this.book);

        if (requestBookForm.valid) window.alert("Request submitted successfully");
        console.log(requestBookForm);

    }

    checkForValidInput(fieldValue: string): boolean {
        let isValid: boolean = !(!fieldValue);
        return isValid;
    }
}