import { Component, OnInit } from '@angular/core';
import { Book } from "./book";

@Component({
    selector: 'request-book',
    templateUrl: "./../html/request-book.component.html",
    styleUrls: ['./../css/forms.css']
})

export class RequestBookComponent implements OnInit {
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

        if(requestBookForm.valid) window.alert("Request submitted successfully");
        console.log(requestBookForm);
    }

    checkForValidInput(fieldValue: string): boolean {        
        let isValid: boolean = !(!fieldValue);
        return isValid;
    }
}