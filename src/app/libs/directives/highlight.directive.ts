import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') condition!: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.condition ? 'yellow' : 'transparent';
  }
}
