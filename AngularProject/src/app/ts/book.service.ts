import { scienceBooks, techBooks, philosopyBooks } from './mock-books';
import { Book } from './book';

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

    constructor(private http: Http) { }

    // getBooks(subject: string): Book[] {
    //     if (subject === "science") return scienceBooks;
    //     if (subject === "technology") return techBooks;
    //     if (subject === "philosophy") return philosopyBooks;
    // }

    // getBooks(subject: string): Promise<Book[]> {
    //     if (subject === "science") return Promise.resolve(scienceBooks);
    //     if (subject === "technology") return Promise.resolve(techBooks);
    //     if (subject === "philosophy") return Promise.resolve(philosopyBooks);
    // }

    getBooks(subject: string): Promise<any> {
        return this.http.get(this.weburl + subject).toPromise()
            .then(response => response.json())
            .catch(this.errorHandler);
    }

    private newBook = { "title": "SBook5", "author": "SAuth5", "isAvailable": false };

    private headers = new Headers({ "Content-Type": "application/json" });
    addBooks(subject: string , book: any) {
        return this.http.post(this.weburl + subject, JSON.stringify(book), { headers: this.headers })
            .toPromise().then().catch();
    }

    readonly weburl = 'http://localhost:3000/';

    errorHandler(error: any) {
        console.log(error);
    }
} 