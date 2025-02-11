import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({ selector: '[appOutsideClick]' })
export class OutsideClickDirective {
  @Output() outsideClick = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    if (!this.el.nativeElement.contains(targetElement)) {
      this.outsideClick.emit();
    }
  }
}
