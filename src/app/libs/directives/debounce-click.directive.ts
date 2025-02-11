import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[appDebounceClick]' })
export class DebounceClickDirective {
  @Input() debounceTime = 500;
  @Output() debounceClick = new EventEmitter();
  private timeout: any;

  @HostListener('click', ['$event'])
  clickEvent(event: Event) {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.debounceClick.emit(event), this.debounceTime);
  }
}
