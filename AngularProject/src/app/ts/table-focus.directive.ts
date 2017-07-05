import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[tableFocus]'
})


export class TableFocusDirective {

    constructor(private el: ElementRef) { }

    @HostListener('mouseover') onmouseover() {
        this.el.nativeElement.style.fontWeight = "bold";
    }

    @HostListener('mouseleave') onmouseleave() {
        this.el.nativeElement.style.fontWeight = "normal";
    }
    
}