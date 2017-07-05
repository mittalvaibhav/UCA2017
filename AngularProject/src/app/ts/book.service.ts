import { Injectable } from '@angular/core';
import { scienceBooks, techBooks, philosopyBooks } from './mock-books';
import { Book } from './book';

@Injectable()
export class BookService {
    getBooks(subject: string): Book[] {
        if (subject === "science") return scienceBooks;
        if (subject === "technology") return techBooks;
        if (subject === "philosophy") return philosopyBooks;
    }
}