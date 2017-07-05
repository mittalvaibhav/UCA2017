import { Component } from '@angular/core';

@Component({
    selector: 'exporttoexcel',
    template: `<button (click)=exportToJsonFile()>CreateCSV</button>`
})

export class ExportComponent {

    jsonData: Array<Object> = [{
        head1: "soemhead",
        head2: "anotherhead"
    },
    {
        head1: "someotherhead",
        head2: "another some head"
    }]

    exportToJsonFile(): void {
        let dataStr = JSON.stringify(this.jsonData);

        if (this.jsonData.length == 0) {
            console.log("Empty data");
        }

        let keys = Object.keys(this.jsonData[0]);
        console.log(keys);

        let columnDelimiter = ',';
        let lineDelimiter = '\n';

        let csvColumnHeader = keys.join(columnDelimiter);
        let csvStr = csvColumnHeader + lineDelimiter;

        this.jsonData.forEach(item => {
            keys.forEach((key, index) => {
                if ((index > 0) && (index < keys.length - 1)) {
                    csvStr += columnDelimiter;
                }
                csvStr += item[key];
            });
            csvStr += lineDelimiter;
        });

        // return encodeURIComponent(csvStr);
        let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(csvStr);

        let exportFileDefaultName = 'data.json';

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
}
