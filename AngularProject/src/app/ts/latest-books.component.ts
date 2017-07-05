import { Component } from '@angular/core';

@Component({
    selector: 'latestbooks',
    templateUrl: './../html/latest-books.component.html'
})

export class LatestBooksComponent {

    getLatestBooksStyle() {
        let styles = {
            'max-height': '400px',
            'overflow-y': 'auto'
        }
        return styles;
    }

}